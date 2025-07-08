import { page } from "@vitest/browser/context"
import { expect, test } from "vitest"
import { render } from "vitest-browser-react"

import type { MinimalRepository } from "~/api/list-repos"

import { RepoCard } from "~/components/repo-card"

const mockRepo: MinimalRepository = {
  id: 1,
  name: "test-repo",
  html_url: "https://github.com/testuser/test-repo",
  description: "A test repository",
  stargazers_count: 123,
  owner: { login: "testuser" },
} as MinimalRepository

test("RepoCard with description", () => {
  render(<RepoCard repo={mockRepo} />)

  expect(page.getByText("test-repo")).toBeInTheDocument()
  expect(page.getByText("A test repository")).toBeInTheDocument()
  expect(page.getByText("123")).toBeInTheDocument()
  expect(page.getByRole("link", { name: /test-repo/i })).toHaveAttribute(
    "href",
    "https://github.com/testuser/test-repo",
  )
})

test("RepoCard without description", () => {
  const repoWithoutDescription = { ...mockRepo, description: null }
  render(<RepoCard repo={repoWithoutDescription} />)

  expect(page.getByText("test-repo")).toBeInTheDocument()
  expect(page.getByText("No description")).toBeInTheDocument()
})
