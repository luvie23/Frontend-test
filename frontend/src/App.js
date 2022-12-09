import {React, useState, useEffect} from "react";
import services from './services/SpaceX'
import Main from './components/Main'

function App() {

  const [data, setData] = useState([])


  useEffect(() => {
    services.getAll()
    .then(response => {
      setData(response)
    })
  },[])

  return (
    <div className="flex justify-center items-center">
      <Main data={data}/>
    </div>
  );
}

export default App;
