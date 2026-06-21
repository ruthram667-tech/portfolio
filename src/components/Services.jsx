import React from 'react';

const Services = () => {
  const services = [
    { title: 'Machine Learning', desc: 'Developing predictive models, deep learning architectures, and intelligent algorithms to solve complex real-world problems.' },
    { title: 'Data Science', desc: 'Extracting actionable insights from raw data using statistical analysis, data visualization, and advanced analytics.' },
    { title: 'Full-Stack Development', desc: 'Building responsive, scalable web applications from end to end using modern frontend frameworks and robust backend architectures.' },
    { title: 'IoT Solutions', desc: 'Designing and integrating interconnected devices and smart sensor systems to enable real-time monitoring and automation.' }
  ];

  return (
    <section className="w-full py-8 px-4 md:px-12">
      <h3 className="text-xl font-bold text-black mb-6">My Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#FF6A00] hover:shadow-[0_4px_15px_rgba(255,106,0,0.15)] transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
            <h4 className="text-black font-bold mb-3 text-sm">{service.title}</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
