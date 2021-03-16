import { faInfoCircle } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Modal, ModalBody, ModalTitle } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

const InfoModal = (props) => {
    return (
        <Modal {...props} size="lg" centered>
            <ModalHeader closeButton>
                <ModalTitle>
                    <FontAwesomeIcon icon={faInfoCircle} /> Minecraft Version Support Info
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <h5>Does Palace Network support the lastest version of Minecraft?</h5>
                <p>No, currently at this time Palace Network is running natively on <b>Minecraft 1.12.2 </b>and supports client connections up to <b>Minecraft 1.15</b></p>
                <h5>Does Palace Network have plans to support future versions of Minecraft?</h5>
                <p>Yes, Palace Network is currently working on plans to support newer versions of Minecraft. Check our discord and social media accounts for upcoming info.</p>
                <h5>Why can't I use newer blocks on Creative?</h5>
                <p>As mentioned above we are currently running <b>1.12</b> natively and are supporting connections through newer versions of the game using <b>Via Version</b>. While this gives us the  ability to allow these connections, it unforunately does not allow for support of <b>1.13+</b> features and blocks.</p>
            </ModalBody>
        </Modal>
    );
}

export default InfoModal;
