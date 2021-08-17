import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
        <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase"><Link to="/">Home</Link></h2>
          <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Writing for fun and productivity.</p>
          <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Code, science, stories, and all the interesting things in between.</p>
        </div>
      </div>
    </header>
  )
}

export default Header