'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Design System",
    src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Project Beta",
    category: "E-commerce",
    src: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Project Gamma",
    category: "Web Application",
    src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Project Delta",
    category: "Mobile App",
    src: "https://images.unsplash.com/photo-1481487484168-9b930d5b7960?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Project Epsilon",
    category: "Branding",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2400&auto=format&fit=crop",
  },
];

export default function PortfolioScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white dark:bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-10 left-10 z-10">
          <h2 className="text-4xl font-bold text-black dark:text-white">Selected Works</h2>
          <p className="text-zinc-500">Scroll down to explore</p>
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 pl-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[50vh] w-[40vw] flex-shrink-0 overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.src})` }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm font-medium uppercase tracking-wider opacity-80">{project.category}</p>
                <h3 className="text-3xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
