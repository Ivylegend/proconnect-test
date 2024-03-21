import React, { useEffect, useState } from "react";
import TableLayout from "../containers/TableLayout";



const Candidates = () => {
    const [apiData, setApiData] = useState([]);

 
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        return data;
      }

    useEffect(() => {
        fetchData().then(data => {
          setApiData(data);
        });
      }, []);

  return (
    <div className="margleft dashboard">
      <p className="doc-header">See all Candidates</p>

      <TableLayout />
    </div>
  );
};

export default Candidates;
