import {React, useState} from "react";
import Filter from './Filter'
import Input from "./ Input";

const Main = (props) => {
    const [keyword, setKeyword] = useState('')
    const [limit, setLimit] = useState(5)
    const data = props.data



    const handleKeywordChange = (e) => {
        setKeyword(e.target.value)
    }

    const showMore = () => {
        setLimit(limit+5)
    }


    return (
        <div className="flex flex-col h-[800px] w-screen m-10 bg-[#F2F2F2] justify-center items-center">
            <div className="w-96">
                <Input className='w-96'
            value={keyword}
            function={handleKeywordChange}
            />
            </div>
            
            
            <div className="h-1/2 w-3/4 overflow-auto	bg-white p-10">
                <Filter limit={limit} data={data} keyword={keyword}/>
            </div>
            <button onClick={showMore}>Show more</button>
            
        </div>
    )
}

export default Main