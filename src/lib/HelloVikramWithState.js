import React, { useState } from "react";

function HelloVikramWithState(props) {
  const [name, setName] = useState("Vikram Singh");
  return <div>Hello {name}</div>;
}

export default HelloVikramWithState;
