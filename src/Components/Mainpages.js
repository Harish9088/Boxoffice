import React from "react";
import Title from "./Title";
import Navs from "./Navs";

function Mainpages({ children }) {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navs />
      {children}
    </div>
  );
}
export default Mainpages;
