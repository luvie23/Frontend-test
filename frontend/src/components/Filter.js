import {React, useState} from "react"

import Flight from "./Flight"


const Filter = (props) => {

    let data = props.data
    // I would have put a functionality for searching for the year by checking if the keyword is a number then checking the keyword with the flight.date instead but i ran out of time.
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



               