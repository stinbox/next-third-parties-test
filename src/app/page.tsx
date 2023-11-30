import { YouTubeEmbed } from "@next/third-parties/google";

export default async function Home() {
  return (
    <main className="space-y-8 p-4">
      <section>
        <h1 className="text-xl mb-2 font-bold">普通の YouTube 埋め込み</h1>
        <iframe
          className="aspect-video"
          width="720"
          src="https://www.youtube.com/embed/cyFB7sB6CYs"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
      <section>
        <h1 className="text-xl mb-2 font-bold">
          <code>@next/third-parties</code> 経由の埋め込み
        </h1>
        <YouTubeEmbed
          videoid="cyFB7sB6CYs"
          style="background-image: url('https://i.ytimg.com/vi/cyFB7sB6CYs/maxresdefault.jpg');"
        />
      </section>
    </main>
  );
}
