'use client';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and market position to create a solid roadmap for success.",
    color: "bg-[#1a1a1a]",
    textColor: "text-white"
  },
  {
    title: "UX/UI Design",
    description: "Crafting intuitive and visually stunning interfaces that engage users and drive conversions effectively.",
    color: "bg-[#2a2a2a]",
    textColor: "text-white"
  },
  {
    title: "Development",
    description: "Building robust, scalable, and high-performance applications using cutting-edge technologies.",
    color: "bg-[#3a3a3a]",
    textColor: "text-white"
  },
  {
    title: "Launch & Growth",
    description: "Ensuring a smooth deployment and providing ongoing support to help your product grow and evolve.",
    color: "bg-[#4a4a4a]",
    textColor: "text-white"
  },
];

interface CardProps {
  i: number;
  title: string;
  description: string;
  color: string;
  textColor: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({ i, title, description, color, textColor, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Opacity effect: fade out as it scales down (optional, but requested "scale and opacity")
  const opacity = useTransform(progress, range, [1, 0.5]); // Only fade to 0.5 so it's still visible in stack

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ 
          scale, 
          opacity: i === cards.length - 1 ? 1 : opacity, // Don't fade the last card
          top: `calc(10% + ${i * 25}px)` 
        }} 
        className={`relative flex flex-col h-[500px] w-[800px] rounded-3xl p-12 origin-top ${color} ${textColor} border border-white/10 shadow-2xl`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">{title}</h2>
          <span className="text-6xl font-bold opacity-10">0{i + 1}</span>
        </div>
        <p className="text-xl leading-relaxed max-w-[80%]">{description}</p>
        
        <div className="mt-auto">
          <button className="px-6 py-3 rounded-full border border-current hover:bg-white hover:text-black transition-colors">
            Learn more
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default function StackedCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section className="bg-black text-white pt-20">
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-5xl font-bold mb-6">Our Process</h2>
        <p className="text-xl text-gray-400 max-w-2xl">
          We follow a proven methodology to deliver exceptional results.
        </p>
      </div>
      
      <div ref={container} className="pb-[50vh]">
        {cards.map((card, i) => {
          const targetScale = 1 - ( (cards.length - i) * 0.05);
          return (
            <Card 
              key={i} 
              i={i} 
              {...card} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  )
}
