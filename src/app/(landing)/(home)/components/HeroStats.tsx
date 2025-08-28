import React from 'react'

const stats = [
    {
        quantity: "+2,500",
        text: "Adoptantes exitosos"
    },
    {
        quantity: "+30",
        text: "Refugios aliados"
    },
    {
        quantity: "24/7",
        text: "Soporte disponible"
    },

]

const HeroStats = () => {
  return (
    <ul className='w-full flex justify-between'>
        {stats.map((stat, index) => (
            <li key={index} className='flex flex-col gap-2 text-center'>
                <h3 className='text-2xl'>{stat.quantity}</h3>
                <p>{stat.text}</p>
            </li>
        ))}
    </ul>
  )
}

export default HeroStats