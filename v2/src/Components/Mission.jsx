import React from 'react';
import Tech from '../img/tech.png';

function Mission() {
  return (
    <section className="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2 p-10 sm:p-32">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-3xl font-bold text-white md:text-3xl">
            The Kewr Mission
          </h2>
          <p className="hidden text-gray-500 md:mt-4 md:block">
          deliver cutting-edge technologies that not only fulfil today's needs but also strengthen our readiness for a dynamic future. We work relentlessly to create innovations that transform the way we communicate, work, learn and play. Through in-depth research, collaboration with the best experts, and a focus on technological excellence, we strive to empower the global community with powerful and intuitive tools.
          </p>
        </div>
      </div>
      <img
        alt="Student"
        src={Tech}
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
}

export default Mission;
