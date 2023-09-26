import { useState, useEffect} from "react";
import axios from "axios";


function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1>using Axios</h1>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em"
              }}
            >
              <p>{dataObj.name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;