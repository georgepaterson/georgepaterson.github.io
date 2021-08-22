import * as React from 'react'
import Header from "./header"
import Footer from "./footer"

const BlogPage = ({ children }) => {
  return (
    <div>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default BlogPage