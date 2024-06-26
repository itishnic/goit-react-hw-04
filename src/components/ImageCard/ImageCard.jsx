import css from "./ImageCard.module.css";

const imageCard = ({ picture, onClick }) => {
    return (
      <div className={css.galleryCard}>
        <div className={css.galleryCardImageContainer}>
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
