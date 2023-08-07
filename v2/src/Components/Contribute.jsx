import React from 'react'
import Tech from '../img/contribute.png'

function Contribute() {
  return (
    <section className="overflow-hidden bg-gray-900 grid sm:grid-cols-2 p-10 sm:p-32">
        <div className="flex justify-center items-center sm:relative">
      <img
        alt="Student"
        src={Tech}
        className="h-56  object-cover sm:h-full sm:w-full sm:absolute sm:top-0 sm:left-0"
      />
    </div>
    <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex items-center">
  <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
    <h2 className="text-4xl font-bold text-white md:text-5xl text-start">
      Ways to contribute
    </h2>
    <ul className="mt-6 md:mt-8">
      <li className="text-xl md:text-2xl text-pink-500 text-start">
        * Join an open issue
        <span className="text-gray-500">- Work we've identified that needs doing</span>
      </li>
      <li className="text-xl md:text-2xl text-pink-500 text-start">
        * Join the translation program{" "}
        <span className="text-gray-500">- Help us bring kewr.org to new languages</span>
      </li>
      <li className="text-xl md:text-2xl text-pink-500 text-start">
        * Help design the website{" "}
        <span className="text-gray-500">- Designers of all levels can contribute to improve the website</span>
      </li>
      <li className="text-xl md:text-2xl text-pink-500 text-start">
        * Improve our research{" "}
        <span className="text-gray-500">- Provide feedback on our research or contribute your own</span>
      </li>
      <li className="text-xl md:text-2xl text-pink-500 text-start">
        * Request a feature <span className="text-gray-500">- Let us know about any ideas</span>
      </li>
      <li className="text-xl md:text-2xl text-pink-500 text-start">
        * Add Developer tools{" "}
        <span className="text-gray-500">- Add a developer tool to relevant pages</span>
      </li>
    </ul>
  </div>
</div>

    
  </section>
  )
}

export default Contribute