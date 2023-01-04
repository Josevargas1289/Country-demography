import React, { useState } from 'react';

const ImputShowed = () => {
    const [tex, setTex]= useState("Valor por defecto")

    return (
        <div>
            <input type="text"
            value={tex}
            onChange ={(e)=>setTex(e.target.value) } />
            <h1>El valor del imput es?</h1>
            <h2>{tex}</h2>
        </div>
    );
};

export default ImputShowed;