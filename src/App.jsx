import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getPicturesApi } from "./components/api/pictures=api";






function App() {
  const [picture, setPicture] = useState([]);
  useEffect(() => {
    const getPictures = async () => {
      const data = await getPicturesApi()
      setPicture (data) ;
      console.log('data :>>', data)
    }
    getPictures()
  }, [])

  return (
    <>
      
        <div>
          <img src={picture.urls.raw} alt={picture.alt_description}  />
        </div>
      
    </>
  );
}

export default App;
