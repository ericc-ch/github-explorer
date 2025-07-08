import { Icon } from "@iconify/react"
import clsx from "clsx"
import { useState } from "react"

import type { SearchUserItem } from "~/api/search-user"

import { ReposList } from "./repos-list"

interface GitHubUserProps {
  user: SearchUserItem
}

export function GitHubUser({ user }: GitHubUserProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="rounded-lg bg-gray-100 shadow-sm">
      <div className="flex items-center gap-4 px-4 py-3">
        <img
          alt={user.login}
          className="size-10 rounded-full"
          src={user.avatar_url}
        />
        <p className="font-medium text-gray-800">{user.login}</p>
        <button
          aria-expanded={isExpanded}
          aria-label={`Show repositories for ${user.login}`}
          className="ml-auto flex size-8 cursor-pointer items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          title={`Show repositories for ${user.login}`}
          type="button"
          onClick={() => {
            setIsExpanded((prev) => !prev)
          }}
        >
          <Icon
            className={clsx("transform text-2xl transition-transform", {
              "rotate-180": isExpanded,
            })}
            icon="line-md:chevron-down"
          />
        </button>
      </div>

      {isExpanded && <ReposList username={user.login} />}
    </div>
  )
}
