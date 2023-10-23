"use client"
import React, { useState, RefObject } from "react";
import Image from "next/image";
import d1 from '../images/d1.png';
import d2 from '../images/d2.png';

interface CardData {
  url: string;
  title: string;
  para: string;
}

function Recents() {
  const data: CardData[] = [
    {
      url: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/07/img-post-4-500x334.jpg",
      title: "Planting seeds in the hearts of preschoolers",
      para: "Full-day kindergarten saves families thousands of dollars a year in child care costs, but it costs the government $1.5 billion a year.…",
    },
    {
      url: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/07/img-post-4-500x334.jpg",
      title: "Why children need a Healthy Environment",
      para: "Full-day kindergarten saves families thousands of dollars a year in child care costs, but it costs the government $1.5 billion a year.…",
    },
    {
      url: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/07/img-post-4-500x334.jpg",
      title: "Why children need a Healthy Environment",
      para: "Full-day kindergarten saves families thousands of dollars a year in child care costs, but it costs the government $1.5 billion a year.…",
    },
    {
      url: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/07/img-post-4-500x334.jpg",
      title: "Why children need a Healthy Environment",
      para: "Full-day kindergarten saves families thousands of dollars a year in child care costs, but it costs the government $1.5 billion a year.…",
    },
    // ... (other data entries)
  ];

  const [index, setIndex] = useState(0);
  const cardContainerRef: RefObject<HTMLDivElement> = React.useRef(null);

  const moveCardContainer = (direction: number) => {
    const container = cardContainerRef.current;

    if (container) {
      const cardWidth = 405;
      const maxIndex = data.length - 1;
      const cardsToMove = 3;

      let newIndex = index + direction;
      if (newIndex < 0) {
        newIndex = 0;
      }
      if (newIndex + cardsToMove > maxIndex) {
        newIndex = maxIndex - cardsToMove + 1;
      }

        if(!container.scrollTo)
        {
          container.scrollTo = ()=>{};
        }
      setIndex(newIndex);
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <>
        <div className="md:hidden flex w-15 flex-col m-[20px]" key="23">
          <div className="w-[365px]  max-w-sm h-[15rem] rounded-[1rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
            <Image
              src={data[0].url}
              alt=""
              className="w-[100%] object-cover h-[100%] rounded-[1rem]"
              width = {100}
              height = {100}
              layout="responsive"
            />
          </div>
          <div className=" flex flex-col gap-4 p-2">
            <div className="flex items-center justify-start gap-4 text-[#1ab9ff] font-[600]">
              <div className="w-[1.2rem] rounded-[50%] hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                <Image
                  className="w-full rounded-full object-cover transform hover:scale-150%"
                  src={d1}
                  alt=""
                />
              </div>
              <div className="underline">By Jhon copper</div>
              <div>0 Comments</div>
            </div>
            <div className="font-sans text-2xl text-[#271344] font-bold">
              {data[0].title}
            </div>
            <div className="text-[#878787] font-[600]">
              {data[0].para}
            </div>
            <div className="text-[#ff4880] font-[800] text-sm p-0.5 border-[#ff4880] border-b-2 w-max group transition-all">
              <a href="/">
                Read more <span className="hidden group-hover:inline ease-in duration-300">👉</span>
              </a>
            </div>
          </div>
        </div>
        <div className="md:hidden flex w-15 flex-col m-[20px]">
          <div className="w-[365px]  max-w-sm h-[15rem] rounded-[1rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
            <Image
              src={d2}
              alt=""
              className="w-[100%] object-cover h-[100%] rounded-[1rem]"
            />
          </div>
          <div className=" flex flex-col gap-4 p-2">
            <div className="flex items-center justify-start gap-4 text-[#1ab9ff] font-[600]">
              <div className="w-[1.2rem] rounded-[50%] hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                <Image
                  className="w-full rounded-full object-cover transform hover:scale-150%"
                  src={d1}
                  alt=""
                />
              </div>
              <div className="underline">By Jhon copper</div>
              <div>0 Comments</div>
            </div>
            <div className="font-sans text-2xl text-[#271344] font-bold">
              {data[1].title}
            </div>
            <div className="text-[#878787] font-[600]">
              {data[1].para}
            </div>
            <div className="text-[#ff4880] font-[800] text-sm p-0.5 border-[#ff4880] border-b-2 w-max group transition-all">
              <a href="/">
                Read more <span className="hidden group-hover:inline ease-in duration-300">➡️</span>
              </a>
            </div>
          </div>
        </div>
      </>
      <div className="hidden md:block">
        <div className=" my-7 justify-center text-center ">
          <h3 className="text-xl my-2">WHAT`S GOING ON IN OUR BLOG?</h3>
          <h1 className='text-4xl md:text-5xl text-blue-950 mb-3'>Recent News</h1>
          <p className='md:text-base leading-relaxed font-serif px-20'>
            We have been destroying the forests for whatever reasons for many years. Forests that work much like our lungs It is a long established.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex">
            {/* backward arrow */}
            <div
              className="flex items-center justify-center flex-col cursor-pointer text-[rgba(119,119,119,.3)]"
              onClick={() => moveCardContainer(-3)}
            >
              <div className="border-2 border-[rgba(119,119,119,.3)] flex justify-center items-center w-[3rem] h-[3rem] text-[2rem] rounded-[50%]">
                &larr;
              </div>
            </div>

            {/* row container */}
            <div
              className="flex w-[70rem] scroll-smooth hide-scrollbar-x overflow-x-hidden"
              ref={cardContainerRef}
            >
              <div
                className={`flex transition-transform duration-300 transform -translate-x-${index * 405
                  } `}
                  data-testid = {"card-container"} >
                {data.map((item, i) => (
                  <div className="flex w-15 flex-col m-[20px]" key={i} data-testid = {'blog-card'}>
                    <div className="w-[365px]  max-w-sm h-[15rem] rounded-[1rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                      <Image
                        src={d2}
                        alt=""
                        className="w-[100%] object-cover h-[100%] rounded-[1rem]"
                      />
                    </div>
                    <div className=" flex flex-col gap-4 p-2">
                      <div className="flex items-center justify-start gap-4 text-[#1ab9ff] font-[600]">
                        <div className="w-[1.2rem] rounded-[50%] hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                          <Image
                            className="w-full rounded-full object-cover transform hover:scale-150%"
                            src={d1}
                            alt=""
                          />
                        </div>
                        <div className="underline">By Jhon copper</div>
                        <div>0 Comments</div>
                      </div>
                      <div className="font-sans text-2xl text-[#271344] font-bold">
                        {item.title}
                      </div>
                      <div className="text-[#878787] font-[600]">
                        {item.para}
                      </div>
                      <div className="text-[#ff4880] font-[800] text-sm p-0.5 border-[#ff4880] border-b-2 w-max group transition-all">
                        <a href="/">
                          Read more <span className="hidden group-hover:inline ease-in duration-300">👉</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="flex items-center justify-center flex-col cursor-pointer text-[rgba(119,119,119,.3)]"
              onClick={() => moveCardContainer(3)}
            >
              <div className="border-2 border-[rgba(119,119,119,.3)] flex justify-center items-center w-[3rem] h-[3rem] text-[2rem] rounded-[50%]">
                &rarr;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Recents;