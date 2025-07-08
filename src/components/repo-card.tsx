import { Icon } from "@iconify/react"

import type { MinimalRepository } from "~/api/list-repos"

interface RepoCardProps {
  repo: MinimalRepository
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="flex w-full items-start justify-between rounded-md bg-white p-3 shadow-sm">
      <div className="max-w-[85%]">
        <a
          className="font-semibold text-blue-600 underline-offset-2 hover:underline"
          href={repo.html_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {repo.name}
        </a>
        <p className="mt-1 text-sm text-gray-600">
          {repo.description ?? (
            <span className="italic text-gray-400">No description</span>
          )}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-1 text-yellow-500">
        <span className="font-bold text-gray-800">
          {repo.stargazers_count ?? 0}
        </span>
        <Icon className="text-lg" icon="line-md:star-filled" />
      </div>
    </div>
  )
}
