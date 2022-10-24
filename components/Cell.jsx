import React, { useContext } from "react";
import { PainterContext } from "../contexts/PainterContext";

export default function Cell(props) {
  const { xPos, yPos } = props;

  const { pixels, paint } = useContext(PainterContext);

  return (
    <div
      style={{
        width: "40px",
        height: "40px",

        //please replace color with painted color from position xPos, yPos
        backgroundColor: pixels[xPos][yPos],

        borderWidth: "1px",
        borderStyle: "solid",
        margin: "0px",
      }}
      onClick={() => {
        //when clicked, set pixels data at position xPos, yPos with selected color
        //you code here

        paint(xPos, yPos);
      }}
    ></div>
  );
}
