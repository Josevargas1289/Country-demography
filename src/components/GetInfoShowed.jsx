import React from 'react';
const GetInfoShowed = ({ infoShowed, countrie }) => { //aqui se reciben las props

    if (infoShowed === "Demography") {
        return(
            <>
            <h1>Demography</h1>
            <h2><b>Population:</b>{`${" "}${countrie.population}`}</h2>
            <h2><b>Area:</b>{`${" "}${countrie.area}`}</h2>
            </>
        )
    }else if (infoShowed === "Location") {
        return(
            <>
            <h1>Location</h1>
            <h2> <b>Continents:</b>{`${" "}${countrie.continents?.[0]}`}</h2>
            <h2><b>Region:</b>{`${" "}${countrie.region}`}</h2>
            <h2><b>Sub-Region:</b>{`${" "}${countrie.subregion}`}</h2>
            </>
        )
    }else{
        return(
            <>
            <h1>Capital</h1>
            <h2> <b>Capital:</b>{`${" "}${countrie.capital}`}</h2>
            </>
        )
      

    }
};

export default GetInfoShowed;