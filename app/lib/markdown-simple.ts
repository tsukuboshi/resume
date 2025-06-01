export interface MarkdownSection {
  title: string;
  content: string;
  level: number;
  id: string;
}

export function parseMarkdownSimple(markdown: string): MarkdownSection[] {
  const lines = markdown.split("\n");
  const sections: MarkdownSection[] = [];
  let currentSection: MarkdownSection | null = null;
  let sectionCounter = 0;

  for (const line of lines) {
    const headingMatch = line.match(/^(#+)\s+(.+)/);

    if (headingMatch) {
      // 現在のセクションがあれば配列に追加
      if (currentSection) {
        sections.push(currentSection);
      }

      // 新しいセクションを作成
      const level = headingMatch[1].length;
      const title = headingMatch[2];

      currentSection = {
        title,
        content: "",
        level,
        id: `section-${++sectionCounter}`,
      };
    } else if (currentSection) {
      // コンテンツを現在のセクションに追加
      currentSection.content += line + "\n";
    } else {
      // 最初のヘッディング前のコンテンツ
      if (sections.length === 0) {
        currentSection = {
          title: "",
          content: line + "\n",
          level: 0,
          id: "intro",
        };
      }
    }
  }

  // 最後のセクションを追加
  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

// テーブル記法を検出してHTMLテーブルに変換する関数
function convertTableToHtml(content: string): string {
  const lines = content.trim().split("\n");
  let htmlContent = "";
  let i = 0;

  while (i < lines.length) {
    const currentLine = lines[i].trim();

    // 水平線をチェック（---のみの行）
    if (currentLine === "---") {
      htmlContent += '<hr class="my-6 border-t border-gray-200">';
      i++;
      continue;
    }

    // 行の先頭が`- `で始まる場合（箇条書き）
    if (currentLine.startsWith("- ")) {
      const listContent = currentLine.substring(2); // "- "を削除
      htmlContent += `<li class="ml-4 mb-2 flex items-start"><span class="mr-2 text-blue-500">•</span><span>${listContent}</span></li>`;
      i++;
      continue;
    }

    // テーブル行を検出（| で区切られている）
    if (
      currentLine.includes("|") &&
      lines[i + 1] &&
      lines[i + 1].includes("---")
    ) {
      // テーブルの開始を検出
      const headerRow = currentLine
        .split("|")
        .map((cell) => cell.trim())
        .filter((cell) => cell);
      const separatorRow = lines[i + 1];

      if (separatorRow.includes("---")) {
        // テーブル開始
        htmlContent +=
          '<div class="overflow-x-auto my-4"><table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"><thead class="bg-gray-50"><tr>';

        // ヘッダー行を追加
        headerRow.forEach((header) => {
          htmlContent += `<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">${header}</th>`;
        });

        htmlContent += '</tr></thead><tbody class="divide-y divide-gray-200">';

        // セパレーター行をスキップ
        i += 2;

        // データ行を処理
        while (i < lines.length && lines[i].trim().includes("|")) {
          const dataRow = lines[i]
            .trim()
            .split("|")
            .map((cell) => cell.trim())
            .filter((cell) => cell);
          if (dataRow.length > 0) {
            htmlContent += '<tr class="hover:bg-gray-50">';
            dataRow.forEach((cell) => {
              htmlContent += `<td class="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">${cell}</td>`;
            });
            htmlContent += "</tr>";
          }
          i++;
        }

        htmlContent += "</tbody></table></div>";
        i--; // 次のループで正しく進むように調整
      } else {
        // 通常の行として処理
        htmlContent += currentLine + "<br>";
      }
    } else {
      // 通常の行として処理
      if (currentLine) {
        htmlContent += currentLine + "<br>";
      } else {
        htmlContent += "<br>";
      }
    }

    i++;
  }

  return htmlContent;
}

export function renderMarkdownContent(content: string): string {
  if (!content.trim()) return "";

  // まずテーブルを変換（水平線と箇条書きも含む）
  let processedContent = convertTableToHtml(content);

  // 残った水平線パターンを変換
  processedContent = processedContent.replace(
    /---<br>/g,
    '<hr class="my-6 border-t border-gray-200">'
  );

  // リンクを変換
  processedContent = processedContent.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'
  );

  // 太字を変換
  processedContent = processedContent.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong class="font-semibold">$1</strong>'
  );

  // 斜体を変換
  processedContent = processedContent.replace(
    /\*([^*]+)\*/g,
    '<em class="italic">$1</em>'
  );

  // インラインコードを変換
  processedContent = processedContent.replace(
    /`([^`]+)`/g,
    '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>'
  );

  // 連続するリスト項目をul要素でラップ
  processedContent = processedContent.replace(
    /(<li class="ml-4 mb-2 flex items-start">[\s\S]*?<\/li>)(\s*<li class="ml-4 mb-2 flex items-start">[\s\S]*?<\/li>)*/g,
    '<ul class="list-none space-y-1 mb-4">$&</ul>'
  );

  return processedContent;
}
