import React, { useState, useCallback } from "react";
import { Modal, Button } from "semantic-ui-react";
import { NotesModalContent } from "./NotesModalContent";

export const AddNotesModal = ({
    trigger,
} : {
    trigger: React.ReactNode
}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const onModalOpen = useCallback(() => {
        setModalOpen(true);
      }, []);
    
      const onModalClose = useCallback(() => {
        setModalOpen(false);
      }, []);
      const closeModal = useCallback(() => setModalOpen(false), []);

    //create post submit code here / formik

    return( 
    <Modal
        trigger={trigger}
        open={modalOpen}
        onOpen={onModalOpen}
        onClose={onModalClose}
    >
        <Modal.Content>
            {/* create modal content here*\ */}
            <NotesModalContent/>
        </Modal.Content>

        <Modal.Actions>
            {/* create save button here for post submit*\ */}
            <Button content="Close" onClick={closeModal}></Button>
        </Modal.Actions>
    </Modal>
    )
}