import { useEffect, useState } from "react";

import "./App.css";
import { getPicturesApi } from "./components/api/pictures=api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Audio } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import  SearchBar  from "./components/SearchBar/SearchBar";


const notify = () => toast.error("This didn't work.");


function App() {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')



  useEffect(() => {
    const fetchData = async() =>{
    try {
      setisLoading(true);
        const data = await getPicturesApi(query, page);
        setPictures((prev)=>[...prev, ...data]);
        console.log("data :>>", data);
      } catch (error) {
        setError(true);
      } finally {
        setisLoading(false);
    }
  };
  query && fetchData();
  }, [ page, query])

  const HandleLoadMore = async () => {
    setPage(page + 1);
  };
  


  const handleSubmit = async (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setPictures([]);
  };
  

  // useEffect(() => {
  //   const getPictures = async () => {
  //     try {
  //       setisLoading(true);
  //       const data = await getPicturesApi('nature');
  //       setPictures(data);
  //       console.log("data :>>", data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setisLoading(false);
  //     }
  //   };
  //   getPictures();
  // }, []);

  return (
    <>
      <SearchBar submit={handleSubmit} />
      
      {isLoading && (
        <p>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </p>
      )}
      {error && (
        <p>
          <b>Opps...some error!</b>
        </p>
      )}
      {pictures.length > 0 && <ImageGallery pictures={pictures} />}
      {pictures.length > 0 && (
        <button onClick={HandleLoadMore}>Load more...</button>
      )}
    </>
  );
}

export default App;
