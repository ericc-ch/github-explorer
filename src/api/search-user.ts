import { queryOptions } from "@tanstack/react-query"

import { minutesToMs } from "~/lib/utils"

import { github } from "./_api"

interface SearchUserQueryOptions {
  searchQuery: string
}

export const searchUserQuery = (options: SearchUserQueryOptions) =>
  queryOptions({
    queryKey: ["search-user", options] as const,
    queryFn: ({ queryKey: [_, options] }) =>
      searchUser({ q: options.searchQuery, per_page: 5 }),
    staleTime: minutesToMs(5),
  })

// https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-users

interface SearchUserOptions {
  q: string
  per_page?: number
}

const searchUser = (options: SearchUserOptions) => {
  const urlParams = new URLSearchParams(Object.entries(options))
  return github<SearchUserResponse>(`/search/users?${urlParams.toString()}`)
}

// Types

interface SearchUserResponse {
  total_count: number
  incomplete_results: boolean
  items: Array<SearchUserItem>
}

export interface SearchUserItem {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string | null
  url: string
  html_url: string
  followers_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  received_events_url: string
  type: string
  score: number
  following_url: string
  gists_url: string
  starred_url: string
  events_url: string
  site_admin: boolean
  public_repos?: number
  public_gists?: number
  followers?: number
  following?: number
  created_at?: string // ISO 8601 format
  updated_at?: string // ISO 8601 format
  name?: string | null
  bio?: string | null
  email?: string | null
  location?: string | null
  hireable?: boolean | null
  blog?: string | null
  company?: string | null
  suspended_at?: string | null // ISO 8601 format
  user_view_type?: string
}
