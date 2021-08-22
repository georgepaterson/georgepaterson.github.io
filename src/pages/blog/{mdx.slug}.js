import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import BlogPage from '../../components/blogPage'

const BlogPost = ({ data }) => {
  return (
    <BlogPage>
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src={data.mdx.frontmatter.imageUrl}
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Blog</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {data.mdx.frontmatter.title}
              </h3>
              <p class="mt-8 text-lg text-gray-500">
                <time dateTime="2021-08-17">{data.mdx.frontmatter.date}</time>
              </p>
              <p className="mt-8 text-lg text-gray-500">
                {data.mdx.frontmatter.description}
              </p>
            <div className="mt-5 prose prose-indigo text-gray-500">
              <MDXRenderer>
                {data.mdx.body}
              </MDXRenderer>
            </div>
          </div>
        </div>
      </div>
    </div>
    </BlogPage>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
        imageUrl
        fileUrl
      }
      body
    }
  }
`

export default BlogPost