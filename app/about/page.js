export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-12 font-sans">
      <main className="w-full max-w-2xl">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
          About
        </h1>

        <div className="space-y-4 text-zinc-600 leading-7 dark:text-zinc-400">
          <p>
            Minecraft Player Search lets you look up any Minecraft player by
            their username. Enter a name on the Search page and the app fetches
            their profile from the public Minecraft API, then displays their
            username, UUID, and skin.
          </p>

          <p>
            Player data is provided by{" "}
            <a
              href="https://mc-api.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              mc-api.io
            </a>
            , a free API for Minecraft profile lookups. No API key is required.
          </p>

          <p>
            This app is a Next.js navigation lab: it demonstrates client-side
            routing with a shared navbar, and server-side data fetching on the
            search page so results are shareable via the URL.
          </p>
        </div>
      </main>
    </div>
  );
}
