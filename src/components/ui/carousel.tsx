"use client";
import React from 'react';

interface SlideData {
  title: string;
  description: string;
  icon: string;
  bgClass: string;
  items: string[];
}

interface CarouselProps {
  slides: SlideData[];
}

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <div className="w-full overflow-x-auto pb-8">
      <div className="flex gap-6 min-w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex-1 min-w-[350px] ${slide.bgClass} rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:-translate-y-2`}
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{slide.icon}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{slide.title}</h3>
              </div>
              <p className="text-xl text-white/90 mb-8">{slide.description}</p>
              <ul className="space-y-4 flex-grow">
                {slide.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0"></div>
                    <p className="text-white/90 text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
