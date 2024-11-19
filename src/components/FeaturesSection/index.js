import { CardComponent } from "../CardCompoment";
const featuresCollection = [
    { title: "Get Nearby Airports", description: "Find airports near your location or any city to explore options for your next flight.", text: "Search Nearby" ,href: "#nearbyAirport"},
    { title: "Search Airports", description: "Search for any airport by name or code, and find relevant details quickly.", text: "Search Airports" ,href: "#searchAirport"},
    { title: "Search Flights", description: "Enter your departure and destination airports to find available flights.", text: "Search Flights" , href: "#searchFlight"}

]

export function FeatureSection() {
    return (
        <div className="dark:bg-neutral-900  pt-8 pb-16 mx-4 bg-[#e5f8ff]">
            <div class="flex flex-row mt-12">
                {
                    featuresCollection.map((feature) => (
                        <div class="basis-1/3 md:basis-1/3">
                            <CardComponent title={feature.title} description={feature.description} text={feature.text}  href={feature.href}/>
                        </div>))
                }

            </div>
        </div>
        
    );
}