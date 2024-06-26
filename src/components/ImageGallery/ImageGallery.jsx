
import css from './ImageGallery.module.css'
import  ImageCard  from "../ImageCard/ImageCard";

const ImageGallery = ({ pictures, onImageClick }) => {
  return (
    <div>
      <ul className={css.imageContainer}>
        {pictures.map((picture) => (
          <li key={picture.id}>
            <ImageCard
              className={css.imageBox}
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
