import {React, useState} from "react";
import Filter from './Filter'
import Input from "./ Input";
import Spinner from "./Spinner";

const Main = (props) => {
    const [keyword, setKeyword] = useState('')
    const [limit, setLimit] = useState(5)
    const [spinner, setSpinner] = useState(false)
    const [isEnd, setIsEnd] = useState(false)
    const data = props.data


    const handleKeywordChange = (e) => {
        setKeyword(e.target.value)
        if (e.target.value === '') {
            setLimit(5)
        }
    }

    const switchSpinner = () => {
        setSpinner(!spinner)

    }

    const showMore = () => {
        setLimit(limit+5)
        switchSpinner()

    }

    // loads next 5 items when you scroll to the bottom
    const handleScroll = (e) => {
        const element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            switchSpinner()
            setTimeout(showMore, 1000)
            
            if (limit > data.length -4){
                setIsEnd(!isEnd)
            }
        }
    }


    return (
        //handles the search 
        <div className="flex flex-col h-[800px] w-screen m-10 bg-[#F2F2F2] justify-center items-center rounded-md">
            <p>Enter keyword:</p>
            <div className="w-3/4 mb-10">
                <Input 
            value={keyword}
            function={handleKeywordChange}
            />
            </div>
            
            {/* displays the info from the API in the required format. Images not available from the api so I commented out the image */}
            <div className="h-1/2 w-3/4 overflow-auto	bg-white p-10 rounded-md" onScroll={handleScroll}>
                <Filter limit={limit} data={data} keyword={keyword}/>
                {spinner ? <Spinner spinner={spinner}/> : <div className="h-8"></div>}
                <div className="h-10">{isEnd ? <p>No more flights available.</p>: null}</div>
            </div>
            
        </div>
    )
}

export default Main