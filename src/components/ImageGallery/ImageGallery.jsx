
import css from './ImageGallery.module.css'
import  ImageCard  from "../ImageCard/ImageCard";

const ImageGallery = ({ pictures, onImageClick }) => {
  return (
    <div className={css.imageContainer}>
      <ul className={css.imageBox}>
        {pictures.map((picture) => (
          <li key={picture.id}>
            <ImageCard
              picture={picture}
              // webFormatURL={picture.urls.small}
              // largeImageURL={picture.urls.regular}
              // altText={picture.alt_description}
              onClick={() => onImageClick(picture)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
