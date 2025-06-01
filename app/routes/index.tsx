import { parseMarkdownSimple, renderMarkdownContent } from '../lib/markdown-simple';
import ToggleSection from '../islands/ToggleSection';
// Viteの?rawクエリを使ってビルド時にファイルを読み込む
import markdownContent from '../../docs/README.md?raw';

export default function Home() {
  const sections = parseMarkdownSimple(markdownContent);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">職務経歴書</h1>
          <p className="text-gray-600">つくぼし - ソリューションアーキテクト</p>
        </header>

        <main className="bg-white rounded-lg shadow-lg p-8">
          {sections.map((section, index) => {
            if (!section.title && section.level === 0) {
              // イントロセクション（タイトルなし）
              return (
                <div
                  key={section.id}
                  className="mb-8"
                  dangerouslySetInnerHTML={{
                    __html: `<p class="mb-4">${renderMarkdownContent(section.content)}</p>`
                  }}
                />
              );
            }

            const processedContent = renderMarkdownContent(section.content);

            return (
              <ToggleSection
                key={section.id}
                title={section.title}
                content={processedContent}
                level={section.level}
                defaultOpen={section.level <= 2}
              />
            );
          })}
        </main>

        <footer className="text-center mt-12 text-gray-500">
          <p>Built with HonoX on Cloudflare Workers</p>
        </footer>
      </div>
    </div>
  );
}
