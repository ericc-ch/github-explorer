import type { ReactNode } from "react"

import { QueryClientProvider } from "@tanstack/react-query"

import { queryClient } from "./lib/query"

export function App() {
  return (
    <Providers>
      <div className="mx-auto w-[min(calc(100%-2rem)_,400px)] bg-fuchsia-500">
        <form>
          <input
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 transition duration-150 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            name="username"
            type="text"
          />
          <button type="submit"></button>

          <p>Showing</p>

          <Spinner />
        </form>
      </div>
    </Providers>
  )
}

const Providers = (props: { children?: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
)

const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="size-8 animate-spin rounded-full border-b border-t border-blue-500"></div>
  </div>
)
