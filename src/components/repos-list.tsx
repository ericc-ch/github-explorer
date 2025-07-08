import { useInfiniteQuery } from "@tanstack/react-query"

import { listReposQuery } from "~/api/list-repos"
import { minutesToMs } from "~/lib/utils"

import { RepoCard } from "./repo-card"

interface ReposListProps {
  username: string
}

export function ReposList({ username }: ReposListProps) {
  const repos = useInfiniteQuery({
    ...listReposQuery({ username }),
    staleTime: minutesToMs(5),
  })

  if (repos.isPending) {
    return (
      <p className="p-4 text-center text-gray-500">Loading repositories...</p>
    )
  }

  if (repos.isError) {
    return (
      <p className="p-4 text-center text-red-600">
        Error fetching repositories: {repos.error.message}
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-3 border-t border-gray-200 p-4">
      {repos.data.pages.map((page) =>
        page.map((repo) => <RepoCard key={repo.id} repo={repo} />),
      )}

      {repos.hasNextPage && (
        <button
          className="mt-2 w-full cursor-pointer rounded-md border border-blue-600 bg-transparent px-4 py-2 font-semibold text-blue-600 transition-colors hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-400 disabled:bg-transparent disabled:text-gray-400"
          disabled={repos.isFetchingNextPage}
          type="button"
          onClick={() => repos.fetchNextPage()}
        >
          {repos.isFetchingNextPage ? "Loading more..." : "Load More"}
        </button>
      )}
    </div>
  )
}
