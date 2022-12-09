import React from "react"

const Spinner = (props) => {
    const spin = props.spinner
    return(
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden font-bold">.</span>
        </div>
    )
}

export default Spinner