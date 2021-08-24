import * as React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p class="mt-8 text-center text-base text-gray-400">
          &copy; 2021 George Paterson. All rights reserved.
        </p>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" data-cfasync="false"></script>
      <script>
          window.cookieconsent.initialise({});
      </script>
    </footer>
  )
}

export default Footer