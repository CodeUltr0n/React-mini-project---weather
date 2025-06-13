import Searchbox from "./searchbox"
import Infobox from "./infobox"
import { use, useState } from "react"


export default function Weatherapp(){
    const [weatherinfo,setWeatherinfo] = useState({
      city :"delhi",
      feelslike:40.49,
      Humidity:65,
      temp : 36.66,
      tempmax:36.66,
      tempmin:36.66,
      weather:"overcast clouds"

    });

    let updateinfo=(newinfo)=>{
      setWeatherinfo(newinfo);
    }

    return (
  <div style={{ textAlign: "center" }}>
    <h2 style={{ fontFamily: "Poppins, sans-serif", color: "#EBFFD8" }}>
      Weather App by Ketan Chokkara
    </h2>
    <Searchbox updateinfo={updateinfo} />
  </div>
);
}