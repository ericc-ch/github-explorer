import { QueryClientProvider, useQuery } from "@tanstack/react-query"
import { useState, type FormEvent, type ReactNode } from "react"

import { searchUserQuery } from "./api/search-user"
import { GitHubUser } from "./components/github-user"
import { SearchForm } from "./components/search-form"
import { queryClient } from "./lib/query"

export function App() {
  const [searchQuery, setSearchQuery] = useState("")

  const users = useQuery({
    ...searchUserQuery({ searchQuery }),
    enabled: Boolean(searchQuery),
  })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    setSearchQuery(formData.get("username") as string)
  }

  const isSuccess = users.isSuccess && !users.isFetching

  return (
    <div className="mx-auto flex w-[min(calc(100%-2rem)_,64ch)] flex-col gap-6 pt-8">
      <SearchForm disabled={users.isFetching} onSubmit={onSubmit} />

      {users.isFetching && <p>Loading...</p>}

      {isSuccess && (
        <div className="flex flex-col gap-4">
          <p>Showing users for "{searchQuery}"</p>

          <div className="flex flex-col gap-2">
            {users.data.items.map((user) => (
              <GitHubUser key={user.id} user={user} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export const Providers = (props: { children?: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
)
