import React from 'react';

const Stats = () => {
  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '10', label: 'Completed Projects' },
    { value: '7', label: 'Happy Customers' },
    { value: '5+', label: 'Honors and Awards' },
  ];

  return (
    <section className="w-full py-6 flex flex-wrap justify-between items-center px-4 md:px-12">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-3 mb-4 lg:mb-0 w-[45%] lg:w-auto">
          <span className="text-[#FF6A00] text-2xl font-bold">{stat.value}</span>
          <span className="text-gray-800 font-semibold text-sm leading-tight">{stat.label}</span>
        </div>
      ))}
    </section>
  );
};

export default Stats;
