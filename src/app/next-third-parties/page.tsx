import { YouTubeEmbed } from "@next/third-parties/google";
import { Metadata } from "next";
import { FC } from "react";
import shiki from "shiki";

export const metadata: Metadata = {
  title: "@next/third-parties の場合",
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
        <h1 className="text-xl mb-2 font-bold">
          <code>@next/third-parties</code> の埋め込み
        </h1>
        <YouTubeEmbed
          videoid="Ux2k6X-sh8k"
          style="background-image: url('https://i.ytimg.com/vi/Ux2k6X-sh8k/maxresdefault.jpg');"
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

const exampleCode = `import { YouTubeEmbed } from "@next/third-parties/google";

<YouTubeEmbed
  videoid="Ux2k6X-sh8k"
  style="background-image: url('https://i.ytimg.com/vi/Ux2k6X-sh8k/maxresdefault.jpg');"
/>`;
