// import { newdata } from "../../../public/airplane.png";
export function HeroSection() {
    return (
        <div id="home" className="bg-white dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
                <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
                    <h1 className="text-5xl font-bold">
                        <span className="text-[#5527d7] font-extrabold">Find the Best Flights & Airports</span>
                    </h1>
                    <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
                    Effortlessly Find Nearby Airports, Compare a Wide Range of Available Flights, and Secure Your Perfect Journey with Just a Few Clicks
                    </p>
                    
                </div>

                <div className="flex items-center">
                    <div class="w-full h-full bg-white px-8 
        pt-16 pb-24 rounded-lg overflow-hidden 
        text-center relative">

                        <div
                            class="w-80 h-80 rounded-full inline-flex  items-start justify-start 
                bg-[#5527d7] text-gray-700 text-xl font-bold">
                            <img className="h-auto max-w-full" src="/airplane.png" alt="airplane image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}