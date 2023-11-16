import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 shadow-3xl px-10 py-16 sm:w-[350px] sm:min-w-[350px] rounded-[20px] w-full'>
        <div className='w-11 h-11 bg-coral-red rounded-full flex justify-center items-center'>
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className='mt-5 text-3xl font-palanquin leading-normal font-bold'>
            {label}
        </h3>
        <p className='mt-3 font-montserrat text-lg text-slate-gray leading-normal'>
            {subtext}
        </p>
    </div>
  )
}

export default ServiceCard