import { connection } from "next/server";

export default async function Home() {
  await connection();

  return (
    <main>
      <p>site-creator-vinext-starter@0.1.0</p>
      <h1>next build --webpack</h1>
      <p>
        This project keeps <code>vinext</code> installed and the package name
        <code> site-creator-vinext-starter</code>. The build script is still
        <code> next build --webpack</code>.
      </p>
    </main>
  );
}
