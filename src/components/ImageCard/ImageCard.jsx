import css from "./ImageCard.module.css";

const imageCard = ({ picture, onClick }) => {
    return (
      <div>
        <div>
          <img
            src={picture.urls.small}
            alt={picture.alt_description}
            className={css.galleryimg}
            onClick={onClick}
          />
        </div>
      </div>
    );
};

export default imageCard
