import React, { useState } from "react";

async function loginUser() {
  return fetch("http://ideadeploy.space/test/graph.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((data) => data.json());
}

export default function Dashboard() {
  const [data, setData] = useState("");

  return <h2>Dashboard</h2>;
}
