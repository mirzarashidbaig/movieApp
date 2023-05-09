
import './App.css'
import Header from './Components/Header'
import Card from './Components/Card'
import { useEffect, useState } from 'react'
function App() {
  
  const [MData, SetMData] = useState([]);

  const Api = "https://api.themoviedb.org/3/trending/movie/day?api_key=0dd1536a415a69f749fb776c429b4995"

  
  useEffect(()=>{
    fetch(Api)
    .then((res)=>res.json())
    .then(data =>{
      SetMData(data.results)
      console.log(MData);
    })
  },[])

  return (
    <>
      <Header/>
      <div className="Cardsdiv">
        {
          MData.map((movieReq)=>{
            return(
              <>
              
              <Card key={movieReq.id}
               {...movieReq}
              />
              </>
            )
          })
        }

      </div>
    </>
  )
}

export default App
