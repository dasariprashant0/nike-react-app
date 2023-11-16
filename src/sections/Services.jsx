import React from 'react'
import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className='flex gap-9 justify-center flex-wrap max-container'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
}

export default Services