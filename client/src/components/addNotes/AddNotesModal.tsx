import React, { useState, useCallback } from "react";
import { useFormik } from "formik";
import axios from "axios";
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

    const reload = () => {
        window.location.reload();
    }

    const formik = useFormik({
        // eslint-disable-next-line react-hooks/rules-of-hooks
        initialValues : {
            date: new Date(Date.now()),
            note: ""
        },
        validationSchema: Yup.object({
            note: Yup.string().required("Dont forget your note").test('len', 'Note cannot exceed 500 characters', (val) => val?.toString().length! <= 500)
        }),
        onSubmit: async (values) => {
                await axios.post('http://localhost:8080/api/notes', {
                    date: values.date, 
                    note:values.note
                },)
                .then((response) => {
                    console.log(response);
                    closeModal();
                    alert('note submitted');
                    reload();
                })
                .catch((error) => {
                    console.log(error);
                });
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