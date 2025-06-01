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

export function renderMarkdownContent(content: string): string {
  return (
    content
      .trim()
      // テーブル処理
      .replace(/\|(.+)\|/g, (match, content) => {
        const cells = content.split("|").map((cell: string) => cell.trim());
        return cells.join(" | ");
      })
      // リスト処理
      .replace(/^- (.+)/gm, "• $1")
      // コードブロック処理
      .replace(
        /```([^`]+)```/g,
        '<pre class="bg-gray-100 p-4 rounded overflow-x-auto"><code>$1</code></pre>'
      )
      // インラインコード処理
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>')
      // 太字処理
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      // 斜体処理
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      // リンク処理
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'
      )
      // 改行処理
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/\n/g, "<br>")
  );
}
