import hero1 from "../assets/images/hero1.png"
import MOE_Logo from "../assets/images/MOE_Logo.png"
import blog1 from "../assets/images/blog1.jpg"
import blog2 from "../assets/images/blog2.jpg"
import blog3 from "../assets/images/test4.jpg"
import backgroundGif from "../assets/images/bg.gif" 

const hero = () => {
    return (
        <div className="relative isolate lg:px-8">
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundGif})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    opacity: 0.3,
                }}
            ></div>

            <div
                className="absolute inset-x-10 transform-gpu overflow-hidden sm:-top-50"
                aria-hidden="true"
            >
                <div
                    className="relative left-0 aspect-[1155/678] w-[36.125rem] -translate-x-0 rotate-[30deg] bg-gradient-to-tr from-[#3ba138] to-[#00ff73] opacity-30 sm:left-[calc(60%)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="container mx-auto flex px-7 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-lg leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Find out how your E-Waste can be recycled today. &nbsp;
                            <a href="/blogs" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Welcome to Digital Detox.
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-800">
                        Your Solution for Responsible E-Waste Disposal
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Are you looking for a convenient and responsible way to dispose of your electronic waste (e-waste)? E-Waste Dumper Locator is here to assist you in finding the nearest e-waste disposal facilities, ensuring that your e-waste is handled in an environmentally friendly and ethical manner.
                    </p>
                    <div className="mt-10 z-50 flex items-center justify-center">
                        <a
                            className="cursor-pointer rounded-md bg-green-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm"
                            href="/edumpers"
                        >
                            Find your nearest E-Dumper
                        </a>
                    </div>
                </div>
                <div className="w-300px">
                    <img className="drop-shadow-2xl object-cover object-center rounded" alt="hero" src={hero1} />
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">E-Waste Caused by Humans</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">By disposing of your e-waste at certified recycling centers, you contribute to reducing environmental pollution, conserving resources through proper recycling, and supporting a sustainable future.</p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <img className="text-green-500 w-15 h-15 mb-3 inline-block" width="80" height="80" src="https://img.icons8.com/dotty/80/person-male.png" alt="person-male" />
                                <h2 className="title-font font-medium text-3xl text-green-600">7.6kg</h2>
                                <p className="mt-4 text-10 leading-relaxed">E-Waste generated by a single person.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <img className="text-green-500 w-15 h-15 mb-3 inline-block" width="80" height="80" src="https://img.icons8.com/dotty/80/appliances.png" alt="appliances" />
                                <h2 className="title-font font-medium text-3xl text-green-600">57.4M Tons</h2>
                                <p className="mt-4 text-10 leading-relaxed">E-waste generated World Wide</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <img className="text-green-500 w-15 h-15 mb-3 inline-block" width="80" height="80" src="https://img.icons8.com/dotty/80/factory.png" alt="factory" />
                                <h2 className="title-font font-medium text-3xl text-green-600">468</h2>
                                <p className="mt-4 text-10 leading-relaxed">E-Recycler in India</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <img className="text-green-500 w-15 h-15 mb-3 inline-block" width="80" height="80" src="https://img.icons8.com/dotty/80/recycle-bin.png" alt="recycle-bin" />
                                <h2 className="title-font font-medium text-3xl text-green-600">75.4%</h2>
                                <p className="mt-4 text-10 leading-relaxed">of E-Waste is collected only.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="flex flex-col text-center w-full mb-8">
                            <h1 className="text-4xl font-medium title-font text-gray-900">About Us</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img src={MOE_Logo} alt="MOE_Logo" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Ministry of Environment</h2>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">At Digital Detox, our mission is to encourage responsible e-waste disposal by making it easy and convenient for individuals and businesses to find appropriate recycling facilities. We aim to raise awareness about the importance of recycling e-waste and its positive impact on the environment.</p>
                                <a href="/about" className="text-green-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                    Our Blogs
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-10 max-w-[370px]">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img src={blog1} alt="" className="w-full" />
                                </div>
                                <div>
                                    <h3>
                                        <a
                                            href="/#"
                                            className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            Reduce Laptops Carbon Footprint Through IT Asset Disposal
                                        </a>
                                    </h3>
                                    <p className="text-base text-body-color">Laptops and computers have become a necessity in the digital age. On the other hand, laptop production, utilization, and disposal contribute to carbon emissions and environmental degradation.</p>
                                    <a href="/blogs" className="mt-5 text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-10 max-w-[370px]">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img src={blog2} alt="" className="w-full" />
                                </div>
                                <div>
                                    <h3>
                                        <a
                                            href="/#"
                                            className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            Green Gadgets: Exploring Eco-Friendly Electronics Options
                                        </a>
                                    </h3>
                                    <p className="text-base text-body-color">In a generation described by means of speedy technological improvements, the demand for electronics is soaring. However, with this surge in innovation comes increasing difficulties for the environmental effect of digital gadgets.</p>
                                    <a href="/blogs" className="mt-5 text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-10 max-w-[370px]">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img src={blog3} alt="" className="w-full" />
                                </div>
                                <div>
                                    <h3>
                                        <a
                                            href="/#"
                                            className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            Understanding e-waste: Types and consequences
                                        </a>
                                    </h3>
                                    <p className="text-base text-body-color">In the present scenario, technological advancements have become a part of our daily lives. As we refurbish our smartphones, laptops, and other electronic devices, we create a lot of electronic waste or e-waste.</p>
                                    <a href="/blogs" className="mt-5 text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};

export default hero;