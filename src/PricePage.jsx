import React, { useEffect } from 'react'

import { BiLink } from "react-icons/bi";
import { MdAutoGraph } from "react-icons/md";



const navList = [
    // { name: 'Home', href: '/' },
    // { name: 'Pricing', href: '/pricing' },
    // { name: 'About', href: '/about' },
    // { name: 'Contact', href: '/contact' },
    {
        name: "class 10", href: "/class-10",
    },

    {
        name: "class 11-12", href: "/class-11",
    },
    {
        name: "counsellors", href: "/cs",
    },
    {
        name: "Study Abroad", href: "/ab",
    },
    {
        name: "Psychometric Test", href: "/psychometric-test",
    },

    {
        name: "pricing", href: "/pricing", isActive: true
    },
    {
        name: "course", href: "/course",
    },
    {
        name: "924883498448", href: "/num",
    }
]
const Nav = () => {
    return (
        <nav className=" text-gray-500 w-screen p-4 flex justify-between items-center shadow-lg flex-wrap gap-y-5 ">

            <span className='max-w-[200px] min-w-[150px] flex'> <img src="https://i.ibb.co/w0BJt1L/cg-logo.png" loading='lazy' alt="logo" className='object-contain w-[150px]' />  </span>
            <span className='capitalize flex flex-wrap gap-y-1 last:text-blue-500'>
                {
                    navList?.map((item, index) => {

                        return (
                            <a key={index} style={item?.isActive ? { backgroundColor: "blue ", color: "white" } : {}} href={item.href} className=" capitalize px-2 py-1 ml-2 text-md hover:bg-gray-700 rounded last:text-blue-500">
                                {item.name}
                            </a>
                        )
                    })
                }
            </span>
            <span>
                <a href="#" className="px-4 font-bold py-2 hover:bg-gray-700 rounded">
                    sign in
                </a>

                <a href="#" className=" font-bold px-4 py-2 hover:bg-gray-700 rounded ml-2">
                    My Dasboard
                </a>
            </span>
        </nav>
    )
}


const Header = () => {

    return (
        <header className="text-gray-700 p-6 center md:gap-6 gap-2">
            <span><h1 className="text-3xl font-bold text-center">
                SCIENTIFICALLY PLAN YOUR CAREER</h1>
                <p className="mt-2 font-semibold"> FOR SCHOOL/COLLEGE STUDENTS & WORKING PROFESSIONALS
                    .</p></span>
            <span className="">
                <img src="https://www.careerguide.com/images-mcg/award-best-career-guidance.png" alt="" className='max-w-[200px]' />
            </span>
        </header>
    )
}


const cardList = [
    { title: 'Career Report', price: '999 ₹', originalPrice: '1999 ₹', discount: '50% off', features: [{ name: 'Feature 1', description: 'Detailed career analysis', icon: null, link: "/test" }, { name: 'Feature 2', description: 'Personalized career recommendations', link: "/test" }, { name: 'Feature 3', description: 'Access to expert career counsellors' }], isIntial: false },
    { title: 'Recommended Plan', price: '4,999 ₹', originalPrice: '5,999 ₹', discount: '16% off', features: [{ name: 'Feature 1', description: 'One-on-one career counselling session', icon: null, link: "/test" }, { name: 'Feature 2', description: 'Personalized career guidance', link: "/test" }, { name: 'Feature 3', description: 'Access to career resources' }, { name: 'Feature 4', description: 'Access to career resources' }, { name: 'Feature 5', description: 'Access to career resources' }], isIntial: false },
    { title: 'Our Most Popular Career Plan ', price: '499 ₹', originalPrice: '999 ₹', discount: '50% off', features: [{ name: 'Feature 1', description: 'Comprehensive psychometric assessment', icon: null, link: "/test" }, { name: 'Feature 2', description: 'In-depth personality analysis', link: "/test" }, { name: 'Feature 3', description: 'Career fit analysis based on test results' }], isIntial: true },


]
const CardSection = () => {
    return (
        <section className="p-6 mt-20 grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2  gap-4 md:px-10">

            {
                cardList?.map((item, index) => {

                    return (
                        <div key={index} style={{animation:`fadeIn ${0.5*index}s ease-in-out`}} className={`relative px-6 py-8 rounded-xl shadow-md min-h-[400px] max-w-[400px] flex flex-col items-center flex flex-col gap-2 border-2 border-blue-500 ${index % 2 == 0 ? "" : "sm:-mt-10 "} ${item?.isIntial ? "bg-blue-500/50" : "bg-white"} `}>
                            <h2 className="text-lg font-bold bg-sky-500 px-2 text-white  uppercase">{item?.title}</h2>
                            <p className='line-through hover:text-blue-500 transtion-all ease duration-500 text-2xl font-bold'> {item?.originalPrice} </p>
                            <p className="text-gray-600 capitalize font-semibold text-red-500 text-xl">{item?.discount}</p>
                            <p className="bg-sky-500 text-gray-200 md:px-8 md:py-4 mt-5  px-4 py-2 font-semibold rounded-md  text-xl ">{item?.price}</p>




                            <ul className="mt-4 min-w-[200px] center flex-col w-full ">
                                {
                                    item?.features?.map((feature, featureIndex) => (
                                        <li key={featureIndex} className='border-b  mb-2   flex items-center flex-1 justfy-between min-w-[200px] gap-4 group cursor-pointer font-semibold'>


                                            {feature?.icon ? feature?.icon : <MdAutoGraph />}

                                            <p className='group-hover:text-blue-500'>{feature?.name} </p>
                                            {feature?.link && <BiLink className='group-hover:text-blue-500' />}
                                        </li>
                                    ))
                                }
                            </ul>
                            <button className="mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition-all ease duration-700 hover:scale-105 will-change-transform uppercase font-medium">Get Started</button>
                        </div>
                    )
                })
            }
            {/* <div className="bg-white p-4 rounded shadow min-h-[400px] flex flex-col items-center flex flex-col gap-2">
                <h2 className="text-xl font-bold bg-sky-500 p-2 text-white">Basic Plan</h2>
                <p className='line-through text-2xl text-medium'> 19000 ₹</p>
                <p className="text-gray-600 capitalize">50% off</p>
                <p className="bg-sky-500 text-gray-600 p-2 rounded-md  text-slate-200">999 ₹</p>

                <ul className="mt-4 w-full ">
                    <li className='border-b '>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Choose Plan</button>
            </div> */}

        </section>
    )
}

const CareerSection = () => {
    return (
        <section className='flex
         min-h-[400px] my-10 md:px-10 md:py-20 px-4 py-10 gap-4  shadow-lg bg-gray-200 rounded-lg flex-wrap center lg:gap-10 sm:gap-6 '>

            <span className=" relative aspect-video  rounded-md min-w-[400px] min-h-[400px] max-w-[600px] max-h-[600px]">

                <video muted={true} controls src="https://www.w3schools.com/html/mov_bbb.mp4" className='w-full h-full object-fill rounded-lg'></video>
            </span>
            <span className="flex-1 flex flex-col items-start min-w-[400px] min-h-[400px] max-w-[400px] max-h-[600px] p-4 bg-white rounded-lg shadow-md">

                <h2 className="text-2xl font-semibold bg-blue-500 px-2 text-gray-300 rounded-md">Career Counselling</h2>
                <h3 className='text-2xl font-semibold mt-2 text-left'>A Career Counsellor Can Change Your Life</h3>
                <p className="mt-2 text-gray-600 text-left">Investing in Career Guidance & Career counselling helps you understand yourself and your career options better, making it easier to make decisions. It also helps you learn more about the job market, be happier in your career, and succeed in the long run. </p>

                <span
                    className='center w-full mt-10'>

                    <button className='p-2 bg-red-800 rounded-md text-gray-50 font-bold'> View Pricing</button>

                </span>
            </span>
        </section>
    )
}

const BrandScrollSection = () => {
    const scrollRef = React.useRef(null);
    useEffect(() => {


        const time = setInterval(() => {
            console.log(scrollRef?.current?.scrollWidth, scrollRef?.current?.scrollLeft);
            if (scrollRef?.current) {
                scrollRef.current.scrollLeft += 200;
                if (scrollRef?.current?.scrollLeft >= (scrollRef?.current?.scrollWidth - scrollRef?.current?.clientWidth)) {
                    scrollRef.current.scrollLeft = 0;
                }
            }

        }, [1000])

        return () => clearInterval(time)

    }, [])

    return (
        <section className='flex items-center gap-4  p-4 center flex-col'>

            <h2 className='text-xl font-bold text-gray-600 my-5'>We Are in The News</h2>


            <div ref={scrollRef} className='flex gap-2 center scroll-x overflow-x-auto w-full p-4 scroll-smooth  scroll-ml-6'>


                {
                    Array.from({ length: 10 }).map((_, index) => <span key={index} className={`min-w-[200px] min-h-[100px]  rounded-md flex items-center justify-center ${index % 2 === 0 ? "bg-gray-300" : "bg-blue-500"}`} >Brand {index}</span>)
                }


            </div>

        </section>
    )
}

const PricePage = () => {
    return (

        <section className="max-w-screen min-h-screen flex-1 flex flex-col  bg-gray-100">
            <Nav />
            <Header />
            <CardSection />
            <CareerSection />
            <BrandScrollSection />
        </section>

    )
}

export default PricePage