"use client"
import React, { useState, RefObject } from "react";
import Image from "next/image";
import d1 from '../images/d1.png';
import d2 from '../images/d2.png';

interface CardData {
    age: string,
    size: string,
    price: string,
    title: string;
    para: string;
}

function Classes() {
    const data: CardData[] = [
        {
            age: "1 - 2 years",
            size: "13",
            price: " ₹ 12",
            title: "Playing",
            para: "Full-day kindergarten saves families thousands of dollars a year in child care costs, but it costs the government $1.5 billion a year.…",
        },
        {
            age: "12",
            size: "13",
            price: "$12",
            title: "Kid and Future",
            para: "Full-day kindergarten saves families thousands of dollars a year in child care costs, but it costs the government $1.5 billion a year.…",
        },
        {
            age: "12",
            size: "13",
            price: "$12",
            title: "Learnig",
            para: "Full-day kindergarten saves families thousands of dollars a year in child care costs, but it costs the government $1.5 billion a year.…",
        },
        {
            age: "12",
            size: "13",
            price: "12",
            title: "Playing",
            para: "Full-day kindergarten saves families thousands of dollars a year in child care costs, but it costs the government $1.5 billion a year.…",
        },

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
                            src={d2}
                            alt=""
                            className="w-[100%] object-cover h-[100%] rounded-[1rem]"
                        />
                    </div>
                    <div className=" flex flex-col gap-4 p-2">

                        <div className="font-sans text-2xl text-[#271344] font-bold text-center">
                            Playing
                        </div>
                        <div className="text-[#878787] font-[600] border-b  py-3 ">
                            Full-day kindergarten saves families thousands of dollars a year in child care costs, but it costs the government $1.5 billion a year,
                        </div>
                        <div className="flex items-center justify-between gap-4 text-[#1ab9ff] font-[600]">
                            <div className="underline">age
                                <p>13</p>
                            </div>
                            <div className="underline">size
                                <p>18</p>
                            </div>
                            <div className="underline">price
                                <p>$19</p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex w-15 flex-col m-[20px]">
                    <div className="w-[365px]  max-w-sm h-[15rem] rounded-[1rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                        <Image
                            src={d2}
                            alt="image"
                            className="w-[100%] object-cover h-[100%] rounded-[1rem]"
                        />
                    </div>
                    <div className=" flex flex-col gap-4 p-2">

                        <div className="font-sans text-2xl text-[#271344] font-bold text-center">
                            Kid and Future
                        </div>
                        <div className="text-[#878787] font-[600] border-b  py-3 ">
                            Full-day kindergarten saves families thousands of dollars a year in child care costs, but it costs the government $1.5 billion a year,
                        </div>
                        <div className="flex items-center justify-between gap-4 text-[#1ab9ff] font-[600]">
                            <div className="underline">age
                                <p>12</p>
                            </div>
                            <div className="underline">size
                                <p>15</p>
                            </div>
                            <div className="underline">price
                                <p>$12</p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </>
            <div className="hidden md:block">
                <div className=" my-7 justify-center text-center ">
                    <h3 className="text-xl my-2">Playing in Learning</h3>
                    <h1 className='text-4xl md:text-5xl text-blue-950 mb-3'>Our Classes</h1>
                    <p className='md:text-base leading-relaxed font-serif px-20'>
                        With kindori, we always put the quality of teaching children first, please rest assured when sending children at kindori kindergarten.

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
                                    data-testid={`card-container`}>
                                {data.map((item, i) => (
                                    <div className="flex w-15 flex-col m-[20px]" key={i} data-testid = {'class-card'}>
                                        <div className="w-[365px]  max-w-sm h-[15rem] rounded-[1rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                                            <Image
                                                src={d2}
                                                alt=""
                                                className="w-[100%] object-cover h-[100%] rounded-[1rem]"
                                            />
                                        </div>
                                        <div className=" flex flex-col gap-4 p-2">

                                            <div className="font-sans text-2xl text-[#271344] font-bold text-center">
                                                {item.title}
                                            </div>
                                            <div className="text-[#878787] font-[600] border-b  py-3 ">
                                                {item.para}
                                            </div>
                                            <div className="flex items-center justify-between gap-4 text-[#1ab9ff] font-[600]">
                                                <div className="underline">age
                                                    <p>{item.age}</p>
                                                </div>
                                                <div className="underline">size
                                                    <p>{item.size}</p>
                                                </div>
                                                <div className="underline">price
                                                    <p>{item.age}</p>
                                                </div>
                                                <div></div>
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
export default Classes;