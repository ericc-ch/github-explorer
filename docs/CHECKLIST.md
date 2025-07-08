### Project Setup & Configuration

- [x] Set up a React + TypeScript project using Vite.
- [x] Configure Tailwind CSS for styling.
- [x] Set up ESLint for code linting.
- [x] Install and configure a state management library for API calls (`@tanstack/react-query`).
- [x] Create a base API client instance with `ofetch` for GitHub API.

---

### API Integration

- [x] Implement a function to fetch a list of users based on a search query (`searchUserQuery`).
  - [x] The query should limit results to 5 users as per the requirements.
  - [x] Define TypeScript types for the user search API response.
- [x] Implement a function to fetch repositories for a specific user (`listReposQuery`).
  - [x] Use infinite query for pagination to handle an unlimited number of repositories.
  - [x] Define TypeScript types for the repository list API response.

---

### UI Development & State Management

- [x] **Form & Search Input**
  - [x] Manage the state of the username input field.
  - [x] Create an `onSubmit` event handler for the form.
  - [x] On form submission, trigger the `searchUserQuery`.
  - [x] Handle form submission via the "Enter" key.
- [x] **Loading & Error States**
  - [x] Conditionally render a loading spinner while the user search is in progress.
  - [ ] Display a user-friendly message if the user search API call fails.
  - [x] Conditionally render a loading indicator when fetching repositories.
  - [x] Display an error message if fetching repositories fails.
- [x] **User Search Results**
  - [x] Once user data is fetched, render the "Showing users for '...'" text.
  - [x] Map over the API results to display a list of clickable user items.
  - [x] Style the user list to match the accordion-style design in **Frame 4**.
- [x] **Repository List**
  - [x] Manage state to track the currently selected/expanded user.
  - [x] On user click, trigger the `listReposQuery` for that user.
  - [x] Conditionally render the repository list for the selected user, matching the design in **Frame 2**.
  - [x] For each repository, display its **name**, **description**, and **star count**.
  - [x] Implement a "Load More" button or infinite scroll to fetch subsequent pages of repositories using `getNextPageParam` from `useInfiniteQuery`.
  - [x] Ensure the chevron icon changes direction based on the expanded/collapsed state.

---

### Final Touches & Deployment

- [ ] **README File**
  - [ ] Write a proper `README.md` file describing the project, how to set it up, and how to run it.
- [ ] **Styling & Responsiveness (Nice to have)**
  - [ ] Refine Tailwind CSS styles to closely match the provided designs.
  - [ ] Ensure the application has a responsive mobile view.
- [ ] **Testing (Nice to have)**
  - [ ] Write unit or integration tests for key components and functions.
- [ ] **Deployment**
  - [ ] Host the application on a publicly accessible URL, like GitHub Pages.
  - [ ] Ensure the final code is in a public GitHub repository.
