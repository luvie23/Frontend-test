import {React, useState} from "react"

import Flight from "./Flight"


const Filter = (props) => {

    let data = props.data

    const checkKeyword = (flight) => {
        return flight.name.toUpperCase().includes(props.keyword.toUpperCase())
    }

    const search = () => {
        const newData = data.filter(checkKeyword)
        return newData
    }



    return(
        <ul>
            {search().slice(0,props.limit).map(flight => 
                <Flight key={flight.name} flight={flight}/>)}
        </ul>
    )
}

export default Filter


// <li >{props.flight.flight_number} {props.flight.name} {props.flight.date_utc}, {props.flight.details}</li>
               