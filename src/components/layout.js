import * as React from 'react'
import { Link } from 'gatsby'
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Header/>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout