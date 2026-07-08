'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import tournamentImg from "../assets/images/tourneyImg.jpg";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  if (!sectionRef.current) return

  const scrollerEl = document.getElementById('scroll-container')
  if (!scrollerEl) return

  const ctx = gsap.context(() => {
    const sharedTrigger = {
      trigger: sectionRef.current,
      scroller: scrollerEl,
    }

    gsap.from('.features-title', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { ...sharedTrigger, start: 'top 75%' },
    })

    gsap.from('.features-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: { ...sharedTrigger, start: 'top 75%' },
    })

    gsap.from(".feature-item", {
    opacity: 0,
    scale: 0.6,
    y: 80,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      ...sharedTrigger,
      start: "top 65%",
    },
  })
  }, sectionRef)

  return () => ctx.revert()
}, [])

  const features = [
  {
    title: "Competitive Tournaments",
    image: tournamentImg,
    className: "top-0 left-10 -rotate-6",
    imageClassName: "w-80",
  },
  {
    title: "Cash Prizes",
    image: tournamentImg,
    className: "top-20 right-10 rotate-6",
    imageClassName: "w-64",
  },
  {
    title: "Live Broadcasts",
    image: tournamentImg,
    className: "top-[38%] left-1/2 -translate-x-1/2 rotate-2",
    imageClassName: "w-96",
  },
  {
    title: "Leaderboards",
    image: tournamentImg,
    className: "bottom-10 left-[12%] -rotate-4",
    imageClassName: "w-64",
  },
  {
    title: "1v1 Challenges",
    image: tournamentImg,
    className: "bottom-0 right-[10%] rotate-4",
    imageClassName: "w-72",
  },
  ]

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-gray-900 text-white px-8 md:px-16 lg:px-24 py-24"
    >
      {/* <h2 className="features-title text-3xl md:text-4xl font-bold mb-3 text-left max-w-xl">
        Features
      </h2>
      <p className="features-subtitle text-gray-400 text-lg mb-8 text-left max-w-xl">
        Everything you need to compete, win, and be seen.
      </p> */}
      <div className="relative h-[calc(100vh-180px)] w-full">
  {features.map((feature) => (
    <div
      key={feature.title}
      className={`feature-item absolute ${feature.className}`}
    >
      <Image
        src={feature.image}
        alt={feature.title}
        className={`
          ${feature.imageClassName}
          rounded-xl
          object-cover
          border
          border-purple-500/40
          shadow-[0_0_30px_rgba(168,85,247,.35)]
          transition-all
          duration-300
          hover:scale-105
        `}
      />

      <h3 className="mt-3 text-center text-cyan-300 uppercase tracking-wider font-bold">
        {feature.title}
      </h3>
    </div>
  ))}
</div>
    </div>
  );
}