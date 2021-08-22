import * as React from 'react'
import { graphql } from 'gatsby'
import BlogIndex from '../components/blogIndex'

const BlogPage = ({ data }) => {
  return (
    <BlogIndex>
      {
        data.allMdx.nodes.map((node) => (
          <div key={node.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <a href={node.frontmatter.fileUrl}>
                <img className="h-48 w-full object-cover" src={node.frontmatter.imageUrl} alt="" />
              </a>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href={node.frontmatter.fileUrl} className="hover:underline">
                    Blog
                  </a>
                </p>
                <a href={node.frontmatter.fileUrl} className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">{node.frontmatter.title}</p>
                  <p className="mt-3 text-base text-gray-500">
                    {node.frontmatter.description}
                  </p>
                  <p class="text-sm text-gray-500 mt-2">
                    <time dateTime="">{node.frontmatter.date}</time>
                  </p>
                </a>
              </div>
            </div>
          </div>
        ))
      }
    </BlogIndex>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          imageUrl
          fileUrl
        }
        id
        body
      }
    }
  }
`

export default BlogPage