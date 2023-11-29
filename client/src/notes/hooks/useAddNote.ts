import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { getClient } from "../../util/QueryClient";
import { useToast } from "@chakra-ui/react";
import { FieldValues, UseFormReset } from "react-hook-form";

interface Props<T extends FieldValues> {
    reset: UseFormReset<T>;
    onClose: () => void;
}

const useAddNote = <T extends FieldValues>(props: Props<T>) => {
    const { reset, onClose } = props;

    // Improvement: could create a ToastProvider so that we could display toasts app-wide, along with default config
    const toast = useToast();

    const onAddNote = (event: any) => {
        addNote.mutate(event)
    }

    const addNote = useMutation({
        mutationFn: (note) => {
            // Create properties/consts with API paths
            return axios.post("/api/notes", note);
        },
        onSuccess() {
            // Return latest list of notes
            // In the event of slow mutation, we could use optimistic updates
            getClient().resetQueries({ queryKey: ['notes', new URLSearchParams()] })
            reset();
            onClose();

            // Defaults to be in context provider
            toast({
                title: "Note added successfully",
                description: "",
                status: "success",
                duration: 2000,
                isClosable: true
            })
        },
    });

    return { onAddNote };
}

export default useAddNote;