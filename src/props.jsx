import React from "react";

function Car(props) {
    return <h2>I am { props.brand }</h2>;
  }
  
  function Brand() {
    return (
      <>
        <Car brand="Ford" />
      </>
    );
  }
export default Brand;

