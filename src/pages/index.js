import * as React from "react"
import Footer from "../components/footer"

const posts = [
  {
    title: 'Working with Gatsby and GitHub Pages',
    href: 'blog/working-with-gatsby-and-github-pages',
    category: { name: 'Article', href: 'blog/working-with-gatsby-and-github-pages' },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageUrl: '/images/apothecary-87-CVBQdww5JZU-unsplash.jpg',
    date: 'Aug 17, 2021',
    datetime: '2021-08-17'
  }
]

const IndexPage = () => {
  return (
    <div>
      <header>
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Home</h2>
            <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Writing for fun and productivity.</p>
            <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Code, science, stories, and all the interesting things in between.</p>
          </div>
        </div>
      </header>
      <main>
        <div className="relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {posts.map((post) => (
                <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <a href={post.category.href} className="hover:underline">
                          {post.category.name}
                        </a>
                      </p>
                      <a href={post.href} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                      </a>
                      <p class="text-sm text-gray-500 mt-2">
                        <time dateTime={post.datetime}>{post.date}</time>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default IndexPage
