import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ButtonGroup, Button, FormControl, Textarea, FormErrorMessage } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import useAddNote from "../hooks/useAddNote";

interface Props {
    isOpen: boolean;
    onClose: () => void;
};

// This is more in the event we add additionall fields
const defaultValues: Record<string, string> = {
    note: ''
}

/**
 * Basic modal. Alternatively, control via context and wrap App with provider so it can be re-used application-wide
 * @param props 
 * @returns 
 */
const NotesModal = (props: Props) => {
    const { isOpen, onClose } = props;

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<{ note: string }>({
        defaultValues,
        mode: "all"
    });

    const { onAddNote } = useAddNote({ reset, onClose })

    const onCloseModal = () => {
        onClose();
        reset();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>New note</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {/* Improvement: use yup and yupResolver to enforce strict schema validation */}
                    {/* Improvement: create form context for application-wide control and DI so that we are not replication boilerplate */}
                    <form onSubmit={handleSubmit(onAddNote)}>
                        <FormControl isInvalid={!!errors.note}>
                            <Textarea 
                                {...register('note', { required: true, maxLength: 500 })}
                                placeholder="Enter your message"
                                size="sm"
                            />
                            {/* This would be taken care of by the yup schema, or alternatively, a separate lookup via a switch or similar */}
                            {errors.note?.type === 'required' && <FormErrorMessage fontSize="small">Note is required</FormErrorMessage>}
                            {errors.note?.type === 'maxLength' && <FormErrorMessage fontSize="small">Note cannot exceed 500 characters</FormErrorMessage>}
                        </FormControl>
                        <ModalFooter>
                            <ButtonGroup alignItems="center" size="sm">
                                <Button variant="ghost" mr={3} onClick={onCloseModal}>
                                    Close
                                </Button>
                                <Button type="submit" colorScheme="blue" size="sm" isDisabled={!!errors.note}>Add</Button>
                            </ButtonGroup>
                        </ModalFooter>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default NotesModal;