async function fetchPlayer(name, edition = "java") {
  const res = await fetch(
    `https://mc-api.io/profile/${encodeURIComponent(name)}/${edition}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const name = typeof params?.name === "string" ? params.name.trim() : "";
  const player = name ? await fetchPlayer(name) : null;
  const skinUrl = player?.decodedTexture?.textures?.SKIN?.url;

  return (
    <div className="flex flex-1 flex-col items-center px-6 py-12 font-sans">
      <main className="w-full max-w-lg">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
          Search players
        </h1>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          Enter a Minecraft username to look up their profile.
        </p>

        <form action="/search" method="GET" className="mb-10 flex gap-2">
          <input
            type="text"
            name="name"
            defaultValue={name}
            placeholder="e.g. Notch"
            required
            className="h-11 flex-1 rounded-lg border border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none ring-emerald-600/30 focus:border-emerald-600 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
          />
          <button
            type="submit"
            className="h-11 rounded-lg bg-emerald-600 px-5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Search
          </button>
        </form>

        {name && !player && (
          <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-200">
            No player found for &ldquo;{name}&rdquo;. Check the spelling and try
            again.
          </div>
        )}

        {player && (
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              {skinUrl ? (
                <img
                  src={skinUrl}
                  alt={`${player.name}'s skin`}
                  width={128}
                  height={128}
                  className="rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800"
                />
              ) : (
                <div className="flex h-32 w-32 items-center justify-center rounded-lg border border-dashed border-zinc-300 text-xs text-zinc-500 dark:border-zinc-700">
                  No skin
                </div>
              )}

              <dl className="flex-1 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-zinc-500 dark:text-zinc-400">
                    Username
                  </dt>
                  <dd className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {player.name}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-zinc-500 dark:text-zinc-400">
                    UUID
                  </dt>
                  <dd className="break-all font-mono text-zinc-700 dark:text-zinc-300">
                    {player.uuid}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
