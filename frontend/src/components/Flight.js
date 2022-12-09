import React from "react";

const Flight = (props) => {

    return(
        <li className="py-5">
    
        Flight number {props.flight.flight_number}: {props.flight.name} ({props.flight.date_utc.slice(0,4)}) 
        <p className="text-[#707070]">Details: {props.flight.details ? props.flight.details : 'no details'}</p></li>
    )
}

export default Flight