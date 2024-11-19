import { Disclosure } from "@headlessui/react";
const navigation = [
    { name: "Home", href: "#home", current: false },
    { name: "Nearby Airports", href: "#nearbyAirport", current: false },
    { name: "Search Airports", href: "#searchAirport", current: false },
    { name: "Search Flights", href: "#searchFlight", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-[#5527d7] p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Flight Finder</span>
            </div>

            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:justify-end">
                <div className="text-sm lg:flex-grow flex flex-col lg:flex-row lg:space-x-10 lg:justify-end">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? "text-white" : "text-white hover:underline",
                                "text-base font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>


    );
}
