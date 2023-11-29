import { Button, ButtonGroup, useDisclosure } from "@chakra-ui/react"
import { memo } from "react";
import Toggle from "./Toggle";
import NotesModal from "./NotesModal";

const NotesActions = memo(() => {
    const { onOpen, onClose, isOpen } = useDisclosure();

    return (
        <>
            <ButtonGroup alignItems="center" gap={6} size="sm">
                <Toggle />
                <Button colorScheme="blue" onClick={onOpen}>Add</Button>
            </ButtonGroup>
            <NotesModal isOpen={isOpen}  onClose={onClose}/>
        </>
    );
});

export default NotesActions;