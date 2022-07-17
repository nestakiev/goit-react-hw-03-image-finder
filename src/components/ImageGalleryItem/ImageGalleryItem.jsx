import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({items, onClick}) => {
    return (
        items.map(item => {
            return <GalleryItem key={item.id}>
            <GalleryImage src={item.webformatURL} alt={item.tag} onClick={() => onClick(item.largeImageURL)}/>
            </GalleryItem>
        })
        );
};

ImageGalleryItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func.isRequired,
}