import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import BlogIndex from '../../components/blogIndex'

const BlogPost = ({ data }) => {
  return (
    <BlogIndex pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <p>{data.mdx.frontmatter.description}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </BlogIndex>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
      body
    }
  }
`

export default BlogPost