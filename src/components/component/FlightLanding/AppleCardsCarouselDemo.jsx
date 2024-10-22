"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-0">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 ">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1507608443039-bfde4fbcd142?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Macbook mockup from Aceternity UI"
              height="300"
              width="500"
              className=" h-[300px] mx-auto object-contain mt-3"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContent1 = ({ components }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {components.title}
        </span>{" "}
        {components.content}
      </p>
      <Image
        src={components.imageSrc}
        alt="Content image"
        height="300"
        width="500"
        className="h-[300px] mx-auto object-contain mt-3"
      />
    </div>
  );
};

const DummyContent2 = ({ components }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {components.title}
        </span>{" "}
        {components.content}
      </p>
      <Image
        src={components.imageSrc}
        alt="Content image"
        height="300"
        width="500"
        className="h-[300px] mx-auto object-contain mt-3"
      />
    </div>
  );
};

const DummyContent3 = ({ components }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {components.title}
        </span>{" "}
        {components.content}
      </p>
      <Image
        src={components.imageSrc}
        alt="Content image"
        height="300"
        width="500"
        className="h-[300px] mx-auto object-contain mt-3"
      />
    </div>
  );
};

const components = [
  {
    title: "Introducing MakeMyTRP",
    content: "Your one-stop travel companion designed to simplify your journey planning. With our user-friendly interface, you can effortlessly book flights, hotel rooms, homestays, and railway tickets all in one place.",
    imageSrc: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Plan Your Perfect Getaway",
    content: "Whether you're planning a weekend trip or an extended vacation, we help you find the best options that fit your needs.",
    imageSrc: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww",
  },
  {
    title: "Explore New Destinations",
    content: "Discover hidden gems and popular attractions around the globe. Your adventure awaits!",
    imageSrc: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww",
  },
]

const data = [
  {
    category: "Travelling",
    title: "Travel the world with MMT.",
    src: "https://images.unsplash.com/photo-1507608443039-bfde4fbcd142?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <>
        <DummyContent1 components={components[0]} />
        <DummyContent2 components={components[1]} />
        <DummyContent3 components={components[2]} />
      </>
    ),
  },
  {
    category: "Hotels",
    title: "Book your favourite hotel with MMT.",
    src: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    content: (
      <>
      <DummyContent1 components={components[0]} />
      <DummyContent2 components={components[1]} />
      <DummyContent3 components={components[2]} />
    </>
    ),
  },
  {
    category: "Explore",
    title: "Explore the world with MMT",
    src: "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbCUyMG1vdW50YWlufGVufDB8fDB8fHww",
    content: (
      <>
        <DummyContent1 components={components} />
        <DummyContent2 components={components} />
        <DummyContent3 components={components} />
      </>
    ),
  },

  {
    category: "Exploration",
    title: "Book your journey with MMT",
    src: "https://images.unsplash.com/photo-1675094689535-6f98ae472f72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsJTIwbW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    content: (
      <>
        <DummyContent1 components={components} />
        <DummyContent2 components={components} />
        <DummyContent3 components={components} />
      </>
    ),
  },
  {
    category: "Beaches",
    title: "Explore elegant beaches with MMT",
    src: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwYmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
    content: (
      <>
        <DummyContent1 components={components} />
        <DummyContent2 components={components} />
        <DummyContent3 components={components} />
      </>
    ),
  },
  {
    category: "Homestays",
    title: "Book your favourite Homestays",
    src: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwaG90ZWxzfGVufDB8fDB8fHww",
    content: (
      <>
        <DummyContent1 components={components} />
        <DummyContent2 components={components} />
        <DummyContent3 components={components} />
      </>
    ),
  },
];


// const data = [
//   {
//     category: "Travelling",
//     title: "Travel the world with MMT.",
//     components: [
//       {
//         title: "Introducing MakeMyTRP",
//         content: "Your one-stop travel companion designed to simplify your journey planning. With our user-friendly interface, you can effortlessly book flights, hotel rooms, homestays, and railway tickets all in one place.",
//         imageSrc: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=600&auto=format&fit=crop&q=60",
//       },
//       {
//         title: "Plan Your Perfect Getaway",
//         content: "Whether you’re planning a weekend trip or an extended vacation, we help you find the best options that fit your needs.",
//         imageSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1887&auto=format&fit=crop",
//       },
//       {
//         title: "Explore New Destinations",
//         content: "Discover hidden gems and popular attractions around the globe. Your adventure awaits!",
//         imageSrc: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600&auto=format&fit=crop&q=60",
//       },
//     ],
//   },
//   {
//     category: "Hotels",
//     title: "Book your favourite hotel with MMT.",
//     components: [
//       {
//         title: "Luxury and Comfort",
//         content: "Find the perfect accommodation that suits your style, from luxury resorts to cozy homestays.",
//         imageSrc: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&auto=format&fit=crop&q=60",
//       },
//       {
//         title: "Affordable Options",
//         content: "Compare prices and amenities to ensure you get the best deals for your stay.",
//         imageSrc: "https://images.unsplash.com/photo-1522058541758-1d1a0533b57d?q=80&w=1887&auto=format&fit=crop",
//       },
//       {
//         title: "Book with Confidence",
//         content: "Read reviews and ratings from fellow travelers to make informed decisions.",
//         imageSrc: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&auto=format&fit=crop&q=60",
//       },
//     ],
//   },
//   {
//     category: "Explore",
//     title: "Explore the world with MMT",
//     components: [
//       {
//         title: "Adventure Awaits",
//         content: "From the mountains to the sea, there are countless adventures waiting for you. Start your journey today!",
//         imageSrc: "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?w=600&auto=format&fit=crop&q=60",
//       },
//       {
//         title: "Cultural Experiences",
//         content: "Engage with local cultures and traditions to enhance your travel experience.",
//         imageSrc: "https://images.unsplash.com/photo-1507608443039-bfde4fbcd142?q=80&w=1887&auto=format&fit=crop",
//       },
//       {
//         title: "Relax and Unwind",
//         content: "Whether it's a beach holiday or a mountain retreat, find the perfect spot to relax.",
//         imageSrc: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60",
//       },
//     ],
//   },
// ];