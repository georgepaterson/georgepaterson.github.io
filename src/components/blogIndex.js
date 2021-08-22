import * as React from 'react'
import { Link } from 'gatsby'
import Header from "./header"
import Footer from "./footer"

const BlogIndex = ({ pageTitle, children }) => {
  return (
    <div>
      <Header/>
      <main>
        <div className="relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {children}
              </div>
            </div>
          </div>
      </main>
      <Footer/>
    </div>
  )
}

export default BlogIndex