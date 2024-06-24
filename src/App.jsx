import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getPicturesApi } from "./components/api/pictures=api";
import ImageGallery from "./components/ImageGallery/ImageGallery"





function App() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    const getPictures = async () => {
      const data = await getPicturesApi()
      setPictures (data) ;
      console.log('data :>>', data)
    }
    getPictures()
  }, [])

  return <>{pictures.length > 0 && <ImageGallery pictures={ pictures} />}</>;
}

export default App;
