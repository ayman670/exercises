import './App.css';
import {useState, useEffect} from "react"

function App() {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/').then((result)=>{
          setData(result)
        })
  },[])


  return (
    <div className="App">
      {data && data.map((re)=>(

       console.log(data)

      ))}

    </div>
  );
}

export default App;
