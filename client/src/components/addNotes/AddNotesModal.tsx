import React, { useState, useCallback } from "react";
import { useFormik } from "formik";
import { Modal, Button } from "semantic-ui-react";
import { NotesModalContent } from "./NotesModalContent";
import * as Yup from "yup";

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

    const formik = useFormik({
        // eslint-disable-next-line react-hooks/rules-of-hooks
        initialValues : {
            date: new Date(Date.now()),
            name: "",
            note: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please enter a name"),
            note: Yup.string().required("Dont forget your note").test('len', 'Note cannot exceed 500 characters', (val) => val?.toString().length! <= 500)
        }),
        onSubmit: async (values) => {
            console.log("submit")
        }
    })
    
    return( 
    <Modal
        trigger={trigger}
        open={modalOpen}
        size={"small"}
        onOpen={onModalOpen}
        onClose={onModalClose}
    >
        <Modal.Content>
            <NotesModalContent formik={formik}/>
        </Modal.Content>

        <Modal.Actions>
            <Button content="Close" onClick={closeModal}></Button>
            <Button icon="save" labelPosition="left" floated="right" name="Save" content="Save" onClick={() => formik.handleSubmit()} positive></Button>
        </Modal.Actions>
    </Modal>
    )
}