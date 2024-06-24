import React from "react";

const ImageGallery = ({ pictures }) => {
  return (
    <div>
      <ul>
        {pictures.map((picture) => (
          <li key={picture.id}>
            <img
              src={picture.urls.raw}
              alt={picture.alt_description}
              width="100"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
