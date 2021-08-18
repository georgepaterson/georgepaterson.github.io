import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
  return (
    <div>
      <Header/>
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </Layout>
      <Footer/>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost