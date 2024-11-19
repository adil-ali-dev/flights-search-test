// import React from 'react';

// export const FlightCard = ({ data,date }) => {
//     console.log('rendered',data,date)
//     const { price, legs } = data;
//     const { origin, destination, departure, arrival, durationInMinutes, carriers, segments } = legs[0];
//     const hours = Math.floor(durationInMinutes / 60);
//     const minutes = durationInMinutes % 60;

//     return (
//         <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full space-y-4">
//             <div className="text-xl font-semibold text-blue-600">
//                 <h3>Price: {price.formatted}</h3>
//             </div>

//             <div className="space-y-2">
//                 <h4 className="text-lg font-semibold">
//                     {origin.city} ({origin.displayCode}) ➔ {destination.city} ({destination.displayCode})
//                 </h4>
//                 <p className="text-sm text-gray-600">Departure: {date}</p>
//                 <p className="text-sm text-gray-600">Arrival: {date}</p>
//             </div>

//             <div>
//                 <h4 className="text-lg font-semibold">Carriers:</h4>
//                 <div className="flex space-x-4">
//                     {carriers.marketing.map((carrier) => (
//                         <div key={carrier.id} className="flex items-center space-x-2">
//                             <img src={carrier.logoUrl} alt={carrier.name} width="40" height="40" className="rounded-full" />
//                             <p className="text-sm text-gray-700">{carrier.name}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div>
//                 <h4 className="text-lg font-semibold">Flight Segments:</h4>
//                 {segments.map((segment, index) => (
//                     <div key={segment.id} className="space-y-2">
//                         <p><strong>Flight {index + 1}:</strong></p>
//                         <p className="text-sm text-gray-600">{segment.origin.name} ➔ {segment.destination.name}</p>
//                         <p className="text-sm text-gray-600">Departure: {new Date(segment.departure).toLocaleString()}</p>
//                         <p className="text-sm text-gray-600">Arrival: {new Date(segment.arrival).toLocaleString()}</p>
//                         <p className="text-sm text-gray-600">Flight Number: {segment.flightNumber}</p>
//                     </div>
//                 ))}
//             </div>

//             <div className="text-sm text-gray-600">
//                 <p><strong>Stop Count:</strong> {legs[0].stopCount}</p>
//             </div>
//         </div>
//     );
// };

// export default FlightCard;


export const FlightCard = ({ flight }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Flight Price: {flight.price.formatted}</h2>
          <p className="text-gray-600"><strong>Departure:</strong> {new Date(flight.legs[0].departure).toLocaleString()}</p>
          <p className="text-gray-600"><strong>Arrival:</strong> {new Date(flight.legs[0].arrival).toLocaleString()}</p>
        </div>
  
        {flight.legs[0].segments.map((segment, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">
              Leg {index + 1}: {segment.origin.name} ({segment.origin.displayCode}) → {segment.destination.name} ({segment.destination.displayCode})
            </h3>
            <p className="text-gray-700"><strong>Flight Number:</strong> {segment.flightNumber}</p>
            <p className="text-gray-600"><strong>Departure:</strong> {new Date(segment.departure).toLocaleString()}</p>
            <p className="text-gray-600"><strong>Arrival:</strong> {new Date(segment.arrival).toLocaleString()}</p>
            <p className="text-gray-600"><strong>Duration:</strong> {Math.floor(segment.durationInMinutes / 60)}h {segment.durationInMinutes % 60}m</p>
          </div>
        ))}
  
        <div className="mt-6">
          <h4 className="font-semibold text-lg">Fare Policies:</h4>
          <p className="text-gray-600"><strong>Change Allowed:</strong> {flight.farePolicy.isChangeAllowed ? "Yes" : "No"}</p>
          <p className="text-gray-600"><strong>Cancellation Allowed:</strong> {flight.farePolicy.isCancellationAllowed ? "Yes" : "No"}</p>
        </div>
  
        <div className="mt-4">
          {flight?.tags?.map((tag, index) => (
            <span key={index} className="inline-block bg-blue-500 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">{tag}</span>
          ))}
        </div>
      </div>
    );
  };