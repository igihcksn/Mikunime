import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

const MikModalCustom = ({
    initialRef,
    finalRef,
    isOpen,
    onClose,
    modalBody = null,
    modalFooter = null,
}) => {
    return (
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add this anime to your collection</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    { modalBody }
                </ModalBody>

                <ModalFooter>
                    { modalFooter }
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default MikModalCustom;