import type { FormEvent } from "react"

import { userEvent, page } from "@vitest/browser/context"
import { expect, test, vi } from "vitest"
import { render } from "vitest-browser-react"

import { SearchForm } from "~/components/search-form"

test("SearchForm", async () => {
  const handleSubmit = vi.fn((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  })

  const { rerender } = render(<SearchForm onSubmit={handleSubmit} />)

  const input = page.getByPlaceholder("Enter username")
  const submitButton = page.getByRole("button", { name: /search/i })

  expect(input).toBeEnabled()
  expect(submitButton).toBeEnabled()

  await userEvent.type(input, "testuser")
  expect(input).toHaveValue("testuser")

  await userEvent.click(submitButton)
  expect(handleSubmit).toHaveBeenCalledTimes(1)

  rerender(<SearchForm disabled onSubmit={handleSubmit} />)
  expect(page.getByPlaceholder("Enter username")).toBeDisabled()
  expect(page.getByRole("button", { name: /search/i })).toBeDisabled()
})
