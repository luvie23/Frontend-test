import {React, useState, useEffect} from "react";
import services from './services/SpaceX'

function App() {

  const [data, setData] = useState([])


  useEffect(() => {
    services.getAll()
    .then(response => {
      setData(response)
    })
  },[])

  return (
    <div >
      {data.map(element => (
        console.log(element.flight_number, element.name, element.date_utc, element.details)
      ))}
    </div>
  );
}

export default App;
