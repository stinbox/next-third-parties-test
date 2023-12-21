import { YouTubeEmbed } from "@next/third-parties/google";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "同時に使って比較",
};

const Page: FC = async () => {
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
        <h1 className="text-xl mb-2 font-bold">通常の iframe 埋め込み</h1>
        <iframe
          className="aspect-video w-full max-w-[720px]"
          src="https://www.youtube-nocookie.com/embed/Ux2k6X-sh8k"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </main>
  );
};

export default Page;
