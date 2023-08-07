import React from 'react';
import Tech from '../img/tech.png';

function Mission() {
  return (
    <section className="overflow-hidden bg-gray-900 grid sm:grid-cols-2 p-10 sm:p-32">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex items-center">
  <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
    <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
      The Kewr Mission
    </h2>
    <p className="text-gray-500 text-2xl md:mt-4 md:block">
      Deliver cutting-edge technologies that not only fulfill today's needs but also strengthen our readiness for a dynamic future. We work relentlessly to create innovations that transform the way we communicate, work, learn, and play. Through in-depth research, collaboration with the best experts, and a focus on technological excellence, we strive to empower the global community with powerful and intuitive tools.
    </p>
  </div>
</div>

      <div className="flex justify-center items-center sm:relative">
        <img
          alt="Student"
          src={Tech}
          className="h-56  object-cover sm:h-full sm:w-full sm:absolute sm:top-0 sm:left-0"
        />
      </div>
    </section>
  );
}

export default Mission;
