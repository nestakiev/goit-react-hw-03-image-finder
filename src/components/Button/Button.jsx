import { Btn } from "./Button.styled";
import PropTypes from "prop-types";

export const Button = ({onLoadMore, isLoading}) => {
    return (
        <Btn type="button" onClick={onLoadMore} disabled={isLoading}>Load more</Btn>
    )
}

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}