import { QueryClientProvider, useQuery } from "@tanstack/react-query"
import { useState, type FormEvent, type ReactNode } from "react"

import { searchUserQuery } from "./api/search-user"
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
    <div className="mx-auto w-[min(calc(100%-2rem)_,400px)] bg-yellow-500">
      <form className="flex flex-col gap-4 py-8" onSubmit={onSubmit}>
        <input
          required
          className="w-full border border-gray-300 bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-400 transition duration-150 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="username"
          placeholder="Enter username"
          type="text"
        />
        <button
          className="transform bg-blue-500 px-4 py-2 font-bold text-white duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 active:translate-y-0.5"
          type="submit"
        >
          Search
        </button>
      </form>

      {users.isFetching && <p>Loading...</p>}
      {isSuccess && (
        <>
          <p>Showing users for "{searchQuery}"</p>

          {users.data.items.map((user) => (
            <div key={user.id}>
              <p>{user.login}</p>
            </div>
          ))}
        </>
      )}

      {}

      <pre>{JSON.stringify(users.data, null, 2)}</pre>
    </div>
  )
}

export const Providers = (props: { children?: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
)
