import { type HTMLProps } from "react"

type SearchFormProps = HTMLProps<HTMLFormElement>

export function SearchForm(props: SearchFormProps) {
  return (
    <form className="flex flex-col gap-2" {...props}>
      <input
        required
        className="w-full border border-gray-300 bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={props.disabled}
        name="username"
        placeholder="Enter username"
        type="text"
      />
      <button
        className="transform cursor-pointer bg-blue-500 px-4 py-2 font-bold text-white duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:bg-gray-400"
        disabled={props.disabled}
        type="submit"
      >
        Search
      </button>
    </form>
  )
}
