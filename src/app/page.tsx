import { YouTubeEmbed } from "@next/third-parties/google";
import shiki from "shiki";

const code = `import { YouTubeEmbed } from "@next/third-parties/google";

export default function Home() {
  return (
    <main>
      <YouTubeEmbed videoid="cyFB7sB6CYs" />
    </main>
  );
}
`;

export default async function Home() {
  const highlighted = await shiki
    .getHighlighter({ theme: "dark-plus" })
    .then((highlighter) => highlighter.codeToHtml(code, { lang: "tsx" }));

  return (
    <main className="space-y-8">
      <div
        className="text-sm p-2"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
      <YouTubeEmbed videoid="cyFB7sB6CYs" />
    </main>
  );
}
