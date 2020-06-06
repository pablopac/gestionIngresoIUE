import React from 'react';

const HolaMundo = () => {
    const Hello = 'Hola Mundo';
    const isTrue = true;
    return(
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso</h2>
            <img src="https://image.freepik.com/vector-gratis/fondo-tecnologia-cara-inteligencia-artificial-futurista_1017-18295.jpg"/>
            {isTrue ? <h4>Es verdad</h4> : <h4>Es Falso</h4> }
            {isTrue && <h4>Soy verdad</h4> }
        </div>
    );
};

export default HolaMundo