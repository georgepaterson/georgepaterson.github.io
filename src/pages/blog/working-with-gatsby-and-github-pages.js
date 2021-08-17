import * as React from "react"
import Footer from "../../components/footer"

const BlogPage = () => {
  return (
    <div>
      <header>
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Blog</h2>
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
                  Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                  pellentesque. Blandit amet, sed aenean erat arcu morbi.
                </p>
                <div className="mt-5 prose prose-indigo text-gray-500">
                  <p>
                    Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                    pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
                  </p>
                  <p>
                    Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet
                    fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.
                  </p>
                  <p>
                    Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.
                  </p>
                  <ul>
                    <li>Quis elit egestas venenatis mattis dignissim.</li>
                    <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                    <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                  </ul>
                  <p>
                    Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                    velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                    egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                  </p>
                  <h3>How we’re different</h3>
                  <p>
                    Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                    Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa,
                    lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
                  </p>
                  <p>
                    Mauris ullamcorper imperdiet nec egestas mi quis quam ante vulputate. Vel faucibus adipiscing lacus,
                    eget. Nunc fermentum id tellus donec. Ut metus odio sit sit varius non nunc orci. Eu, mi neque, ornare
                    suspendisse amet, nibh. Facilisi volutpat lectus id sapien dis mauris rhoncus. Est rhoncus, interdum
                    imperdiet ac eros, diam mauris, tortor. Risus id sit molestie magna.
                  </p>
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
