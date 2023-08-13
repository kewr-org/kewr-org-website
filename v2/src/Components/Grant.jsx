import React from 'react';

function Grant() {
  return (
    <section className="bg-gray-900 px-10 md:px-32">
      <div className="mx-auto max-w-screen-xl py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            Kewr Foundation Grants
          </h2>
          <p className="mt-4 text-gray-500 sm:text-xl">
          Funding Software Development and Research Efforts related to Kewr Ecosystem
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100"
          >
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
              applications
              </dt>
              <dd className="text-4xl font-extrabold text-pink-500 md:text-5xl">
                99+
              </dd>
            </div>
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
              projects funded
              </dt>
              <dd className="text-4xl font-extrabold text-pink-500 md:text-5xl">99+</dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
              countries
              </dt>
              <dd className="text-4xl font-extrabold text-pink-500 md:text-5xl">99+</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Grant;
