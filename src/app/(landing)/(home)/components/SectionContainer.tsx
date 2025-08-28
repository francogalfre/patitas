import React, { type ReactNode } from 'react'

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section className='max-w-7xl w-full mx-auto px-4 pb-48'>
        {children}
    </section>
  )
}

export default SectionContainer