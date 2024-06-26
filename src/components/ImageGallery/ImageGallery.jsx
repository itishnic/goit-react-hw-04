import React from "react";
import css from './ImageGallery.module.css'

const ImageGallery = ({ pictures }) => {
  return (
    <div>
      <ul className={css.imageContainer}>
        {pictures.map((picture) => (
          <li key={picture.id} className={css.imageBox}>
            <img src={picture.urls.small} alt={picture.alt_description} height='300'/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
