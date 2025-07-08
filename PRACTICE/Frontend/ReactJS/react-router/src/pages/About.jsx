import React from "react";
import { useParams } from "react-router-dom";

function About() {
  const { id } = useParams();
  return (
    <div className="flex justify-center items-center">
      <h1>
        {id
          ? `Hey, This is the about page with the ID is: ${id}`
          : "Hey, This is a general about page. "}
      </h1>
    </div>
  );
}

export default About;
