import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({item, onClick}) => {
    const {webformatURL, tag, largeImageURL} = item;
    return ( <GalleryItem>
            <GalleryImage src={webformatURL} alt={tag} onClick={() => onClick(largeImageURL)}/>
            </GalleryItem>);
};

ImageGalleryItem.propTypes = {
    items: PropTypes.exact({
        id: PropTypes.string,
        webformatURL: PropTypes.string,
        tag: PropTypes.string,
        largeImageURL: PropTypes.string,
    }),
    onClick: PropTypes.func.isRequired,
};