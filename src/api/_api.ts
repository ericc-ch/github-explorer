import { ofetch } from "ofetch"

export const github = ofetch.create({
  baseURL: "https://api.github.com",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
    accept: "application/vnd.github+json",
  },
})
