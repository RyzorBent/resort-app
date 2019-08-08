import React from "react";


export default function Hero({ children, hero }) {
  return (
    <header className={hero}>
      {/* {console.log("this is hero: ", hero, children)} */}
      {children}
      
    </header>
  );
}

Hero.defaultProps = {
  hero: "defaultHero"
};
