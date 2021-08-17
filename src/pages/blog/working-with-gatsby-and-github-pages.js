import * as React from "react"
import { Link } from "gatsby"
import Footer from "../../components/footer"

const BlogPage = () => {
  return (
    <div>
      <header>
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase"><Link to="/">Home</Link></h2>
            <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Writing for fun and productivity.</p>
            <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Code, science, stories, and all the interesting things in between.</p>
          </div>
        </div>
      </header>
      <main>
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="/images/apothecary-87-CVBQdww5JZU-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Article</h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Working with Gatsby and GitHub Pages
                </h3>
                <p class="mt-8 text-lg text-gray-500">
                  <time dateTime="2021-08-17">Aug 17, 2021</time>
                </p>
                <p className="mt-8 text-lg text-gray-500">
                  Gatsby and GitHub pages can be a quick and effective way of developing a Website integrated 
                  with your existing source control, with minimal initial investment.
                </p>
                <div className="mt-5 prose prose-indigo text-gray-500">
                  <p>
                    There are many different choices available for Website hosting, AWS and Google Cloud are cloud platforms I've used in the past for dynamic and static Web hosting 
                    but if you're already on GitHub and want to get a site running or have a dedicated page for your repository, GitHub Pages is a viable choice.
                  </p>
                  <p>
                    GitHub Pages doesn't need a build framework to work, you could run a static site with simple a index.html file and if you want a custom domain
                    a CNAME file with your domain, for instance the CNAME for this site would simple have georgepaterson.com in the file. 
                  </p>
                  <p>
                    A framework though does make it easier to manage your build assets and content.
                    If you already develop with Ruby, GitHub works well with Jekyll. If you prefer JavaScript, there are a number of interesting frameworks you could use but in this article we'll reference Gatsby.
                  </p>
                  <p>
                    GitHub provides some excellent <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site">documentation</a>, create your repository if you need to and then set up two branches,
                    main for your Gatsby development and gh-pages that will render the site. Using the gh-pages branch you will need to set it as the <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site">publishing source</a>. 
                  </p>
                  <p>
                    With the repository prepared you'll then want to initiate NPM, install Gatsby, and add the gh-page package to support deployment. 
                    You'll then need to add a deploy script to package.json.
                    <pre><code>"deploy": "gatsby build --prefix-paths && gh-pages -d public"</code></pre>
                    This will allow you to write code in the main branch and when you're ready you can deploy to gh-pages. Gatsby have full documentation at <a href="https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/">How Gatsby Works with GitHub Pages</a>.
                  </p>
                  <p>The CNAME that I mentioned earlier, put that file in your static folder and it will deploy to the root of the gh-pages branch.</p>
                  <p>This should give you a quick site to work with, there's more to explore with Gatsby and as the site gets more complex you could choose to move from GitHub pages and deploy to another host with minimal changes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default BlogPage
