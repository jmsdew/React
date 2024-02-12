
import {useEffect, useState} from "react";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/showMe")
        .then((res) => {
          return res.json();
        })
        .then(function (result) {

          setData(result);
            console.log(data)
        })
  },[]);


  return (
      <div className="App">

          <ul>
            <li>{data[0]}</li>
              <li>{data[1]}</li>
          </ul>
      </div>
  );
}


export default App;
