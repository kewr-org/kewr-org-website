import React from 'react'
import Tech from '../img/tech.png'

function Contribute() {
  return (
    <section className="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2 p-10 sm:p-32">
        <img
        alt="Student"
        src={Tech}
        className="h-56 w-1/2 object-cover sm:h-full"
      />
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-7xl font-bold text-white md:text-3xl">
            Contribute to Kewr.org
          </h2>
          <p className="hidden text-gray-500 md:mt-4 md:block">
          This website is open source with hundreds of community contributors. You can propose edits to any of the content on this site, suggest awesome new features, or help us squash bugs.
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default Contribute