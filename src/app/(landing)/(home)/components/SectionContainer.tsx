import React, { type ReactNode } from 'react'

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section className='max-w-7xl w-full mx-auto'>
        {children}
    </section>
  )
}

export default SectionContainer