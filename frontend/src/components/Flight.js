import React from "react";

const Flight = (props) => {
    return(
        <li >{props.flight.flight_number}: {props.flight.name} ({props.flight.date_utc.slice(0,4)}) 

        <p className="text-[#707070]">{props.flight.details}</p></li>
    )
}

export default Flight