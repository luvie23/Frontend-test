import React from "react";

const Flight = (props) => {
    return(
        <li>{props.flight_number} {props.flight.name} {props.flight.date_utc}, {props.flight.details}</li>
    )
}

{data.map(element => (
    console.log(element.flight_number, element.name, element.date_utc, element.details)
  ))}