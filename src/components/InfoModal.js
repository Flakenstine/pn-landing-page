import { faInfoCircle } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Modal, ModalBody, ModalTitle } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

const InfoModal = (props) => {
    return (
        <Modal {...props} size="md" centered>
            <ModalHeader closeButton>
                <ModalTitle>
                    <FontAwesomeIcon icon={faInfoCircle} /> Minecraft Support Info
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <h4>Does Palace Network support the lastest version of Minecraft?</h4>
                <p>No, currently at this time Palace Network is running natively on <b>Minecraft 1.12.2 </b>and supports client connections up to <b>Minecraft 1.15</b></p>
            </ModalBody>
        </Modal>
    );
}

export default InfoModal;
