import React from "react";

const Flight = (props) => {

    return(
        <li className="py-5">
            
            {/* <img src={props.flight.links.patch.large}></img> */}
        Flight number {props.flight.flight_number}: {props.flight.name} ({props.flight.date_utc.slice(0,4)}) 
        <p className="text-[#707070] mt-2">Details: {props.flight.details ? props.flight.details : 'no details'}</p></li>
    )
}

export default Flight