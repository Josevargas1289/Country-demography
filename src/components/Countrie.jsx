import axios from "axios"
import React from "react";
import { useState, useEffect } from "react";
import GetInfoShowed from "./GetInfoShowed";

const Countrie = () => {
    const [countrie, setCountrie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    const [tex, setTex] = useState(" colombia")
 

    const searchConutry = () => {
        setTex(tex)
      
    }

    useEffect(() => {

        axios.get(`https://restcountries.com/v3.1/name/${tex}`)
            .then(res => {
                setCountrie(res.data[0])
                setTimeout(() => setIsLoading(false), 1000);
            });


    }, [tex])

    


    // console.log(countrie);

    const [infoShowed, setInfoShowed] = useState("Demography")

    return (


        <div className="card">

            <div>
                <input type="text" placeholder="Buscar pais"
                    value={tex}
                    onChange={(e) => setTex(e.target.value)}  />
                    {/* <button onClick={searchConutry}>Buscar pais</button> */}
            </div>

            {
                isLoading ? (

                    <h1>Cargando...</h1>

                ) : (
                    <>
                        <h1 className="title">{countrie.altSpellings?.[1]}</h1>
                        <img className="img" src={countrie.flags?.svg} alt="Colombia" />

                        <div className="group-btn">
                            <button onClick={() => setInfoShowed("Demography")}>Demography</button>
                            <button onClick={() => setInfoShowed("Location")}>Location</button>
                            <button onClick={() => setInfoShowed("Capital")}>Capital</button>
                        </div>

                        {
                            <GetInfoShowed infoShowed={infoShowed} countrie={countrie} /> // aqui se envian las props
                        }
                    </>
                )
            }

        </div>
    );
};

export default Countrie;