import React, { useState } from "react";

function GoodMorning() {
  const [name, setName] = useState("Vikram");
  return <div>GoodMorning V1 NodePackage With {name}</div>;
}

export default GoodMorning;
