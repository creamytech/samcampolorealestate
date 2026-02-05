"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { FlipWords } from "./flip-words";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const flipWords = ["extraordinary", "exceptional", "remarkable", "unparalleled"];

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      style={{ backgroundColor: '#0d0d0d' }}
    >
      {/* Custom Real Estate Header */}
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <p 
          className="text-sm md:text-base uppercase tracking-[0.3em] mb-6"
          style={{ color: '#c9a962' }}
        >
          Westchester & Fairfield County Real Estate
        </p>
        <h1 
          className="text-4xl md:text-7xl font-bold mb-6"
          style={{ 
            color: '#fff',
            fontFamily: '"Playfair Display", Georgia, serif'
          }}
        >
          Sam Campolo
        </h1>
        <div className="max-w-2xl text-lg md:text-xl mt-4" style={{ color: '#a3a3a3' }}>
          Delivering <span style={{ color: '#c9a962' }}><FlipWords words={flipWords} className="font-semibold" /></span> results for 
          luxury home buyers and sellers throughout Westchester and Fairfield County.
        </div>
        <div className="flex gap-4 mt-10">
          <a
            href="#contact"
            className="px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all hover:opacity-90"
            style={{ backgroundColor: '#c9a962', color: '#0d0d0d' }}
          >
            Schedule Consultation
          </a>
          <a
            href="#testimonials"
            className="px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all hover:opacity-80"
            style={{ 
              backgroundColor: 'transparent', 
              color: '#fff', 
              border: '1px solid rgba(255,255,255,0.3)' 
            }}
          >
            Client Reviews
          </a>
        </div>
      </div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0 rounded-xl overflow-hidden"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div 
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-70 pointer-events-none transition-opacity"
        style={{ backgroundColor: '#0d0d0d' }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover/product:opacity-100 transition-opacity"
        style={{ 
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)'
        }}
      >
        <h2 
          className="text-lg font-medium"
          style={{ 
            color: '#fff',
            fontFamily: '"Playfair Display", Georgia, serif'
          }}
        >
          {product.title}
        </h2>
      </div>
    </motion.div>
  );
};
