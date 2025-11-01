"use client"

import { cn } from "@/lib/utils"

import { motion } from "motion/react"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "text-foreground",
      "py-12 sm:py-24 md:py-48 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="max-w-6xl flex flex-col items-center gap-4 px-4 sm:gap-4">
          <motion.h2
            initial={{ opacity: 0, y: -10, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1.5, delay: 0.1, stiffness: 200 }}
            className="max-w-[720px] font-poppins text-3xl font-medium leading-tight sm:max-w-5xl sm:text-5xl sm:leading-tight tracking-tight">
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1.5, delay: 0.2, stiffness: 200}}
            className="text-md max-w-[600px] sm:max-w-5xl font-raleway text-muted-foreground sm:text-xl">
            {description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1.5, delay: 0.3, stiffness: 200}} 
          className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </motion.div>
      </div>
    </section>
  )
}