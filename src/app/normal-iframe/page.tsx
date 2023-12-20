import { Metadata } from "next";
import { FC } from "react";
import shiki from "shiki";

export const metadata: Metadata = {
  title: "通常の iframe を使う場合",
};

const Page: FC = async () => {
  const highlighted = await shiki
    .getHighlighter({
      theme: "dark-plus",
    })
    .then((highlighter) =>
      highlighter.codeToHtml(exampleCode, { lang: "tsx" })
    );
  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-xl mb-2 font-bold">通常の iframe 埋め込み</h1>
        <iframe
          className="aspect-video w-full max-w-[720px]"
          src="https://www.youtube.com/embed/cyFB7sB6CYs"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div>
        <h2 className="text-xl mb-2 font-bold">ソースコード</h2>
        <div dangerouslySetInnerHTML={{ __html: highlighted }} />
      </div>
    </main>
  );
};

export default Page;

const exampleCode = `<iframe
  className="aspect-video w-full max-w-[720px]"
  src="https://www.youtube.com/embed/cyFB7sB6CYs"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>`;
