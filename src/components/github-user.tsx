import { Icon } from "@iconify/react"
import { useInfiniteQuery } from "@tanstack/react-query"
import clsx from "clsx"
import { useState } from "react"

import type { SearchUserItem } from "~/api/search-user"

import { listReposQuery } from "~/api/list-repos"

interface GitHubUserProps {
  user: SearchUserItem
}

export function GitHubUser(props: GitHubUserProps) {
  const [expanded, setExpanded] = useState(false)

  const repos = useInfiniteQuery({
    ...listReposQuery({ username: props.user.login }),
    enabled: expanded,
  })

  return (
    <div className="bg-gray-100">
      <div className="flex items-center gap-4 px-4 py-4">
        <img
          alt={props.user.login}
          className="size-8 rounded-full"
          src={props.user.avatar_url}
        />

        <p>{props.user.login}</p>

        <button
          className="ml-auto cursor-pointer rounded-full bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          type="button"
          onClick={() => {
            setExpanded((prev) => !prev)
          }}
        >
          <Icon
            className={clsx("transform text-2xl", {
              "rotate-180": expanded,
            })}
            icon="line-md:chevron-down"
          />
        </button>
      </div>

      {expanded && (
        <>
          {repos.isPending && <p className="ml-[1.5rem] p-4">Loading...</p>}

          {repos.isSuccess && (
            <div className="flex flex-col items-end gap-2 px-4 pb-8">
              {repos.data.pages.map((page) =>
                page.map((repo) => (
                  <div
                    key={repo.id}
                    className="flex w-[calc(100%-1.5rem)] items-start justify-between bg-gray-300 px-4 py-2"
                  >
                    <div>
                      <a
                        className="underline"
                        href={repo.html_url}
                        target="_blank"
                      >
                        {repo.name}
                      </a>
                      <p className="text-sm text-gray-700">
                        {repo.description ?? (
                          <span className="text-gray-500">
                            No description available
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <p>{repo.stargazers_count ?? 0}</p>
                      <Icon icon="line-md:star-filled" />
                    </div>
                  </div>
                )),
              )}

              {repos.hasNextPage && (
                <button
                  className="transform cursor-pointer bg-blue-500 px-4 py-2 font-bold text-white duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:bg-gray-400"
                  type="button"
                  onClick={() => {
                    void repos.fetchNextPage()
                  }}
                >
                  Load more
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}
