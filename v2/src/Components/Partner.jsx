import React from 'react'
import Capital from '../img/capital.png'
import Tech from '../img/kewrtech.png'
import Foundation from '../img/kewr.png'
import Lock from '../img/lock.svg'

function Partner() {
  return (
    <div>
        <section className="bg-gray-900 text-white">
  <div
    className="container mx-auto px-6 py-16 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Our Partner</h2>
    </div>
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-300/10 hover:shadow-pink-700/10">
    <img src={Capital} className="w-1/2 mx-auto" />
    <h2 className="mt-6 text-xl text-center font-bold text-white">Kewr Capital</h2>
</a>
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <img src={Tech} className="w-1/2 mx-auto" />
        <h2 className="mt-4 text-xl text-center font-bold text-white">Kewr Tech</h2>
      </a>
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
        <img src={Foundation} className="w-1/2 mx-auto" />
        <h2 className="mt-4 text-xl text-center font-bold text-white">Kewr Foundation</h2>
      </a>
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <img src={Foundation} className="w-1/3 mx-auto" />
        <h2 className="mt-4 text-xl text-center font-bold text-white">Karya Digital Kewrindo</h2>
      </a>
    </div>
  </div>
</section>
    </div>
  )
}

export default Partner