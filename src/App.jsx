import { useEffect, useState } from "react";

import "./App.css";
import { getPicturesApi } from "./components/api/pictures=api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setisLoading(true);
        const data = await getPicturesApi(query, page);
        setPictures((prev) => [...prev, ...data]);
        console.log("data :>>", data);
      } catch (error) {
        setError(true);
      } finally {
        setisLoading(false);
      }
    };
    query && fetchData();
  }, [page, query]);

  const HandleLoadMore = async () => {
    setPage(page + 1);
  };

  const handleSubmit = async (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setPictures([]);
  };

  const handleImageClick = (picture) => {
    setSelectedPicture(picture);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPicture(null);
  };

  return (
    <>
      <SearchBar submit={handleSubmit} />

      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {pictures.length > 0 && (
        <ImageGallery pictures={pictures} onImageClick={handleImageClick} />
      )}
      {pictures.length > 0 && (
        <button onClick={HandleLoadMore}>Load more...</button>
      )}
      {selectedPicture && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          picture={selectedPicture}
        />
      )}
    </>
  );
}

export default App;
