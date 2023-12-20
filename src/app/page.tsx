import Link from "next/link";

export default async function Home() {
  return (
    <main className="space-y-8">
      <h1 className="text-2xl mb-2 font-bold">YouTube 埋め込みの比較</h1>
      <p>
        <Link className="text-blue-500 hover:underline" href="/normal-iframe">
          通常の iframe で埋め込んだページへ
        </Link>
      </p>
      <p>
        <Link
          className="text-blue-500 hover:underline"
          href="/next-third-parties"
        >
          @next/third-parties で埋め込んだページへ
        </Link>
      </p>
    </main>
  );
}
