import { Overlay, ModalContainer } from "./Modal.styled";
import PropTypes from "prop-types";
import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    static propTypes = {
        closeModal: PropTypes.func.isRequired,
        url: PropTypes.string.isRequired,
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.closeModal();
        }
    }

    handleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.closeModal();
        }
    }

    componentDidMount () {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount () {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    render () {
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalContainer>
                    <img src={this.props.url} alt=""/>
                </ModalContainer>
            </Overlay>,
            modalRoot,
        )
    };
}

// Modal.propTypes = {
//     closeModal: PropTypes.func.isRequired,
//     url: PropTypes.string.isRequired,
// }