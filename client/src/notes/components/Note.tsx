import { Box, Heading, Text } from "@chakra-ui/react"
import { INote } from "../types/note"
import { format } from "date-fns";
import { memo } from "react";

const formatDate = (date: Date) => format(date, 'do MMM yyyy');

const Note = memo((note: INote) => {
    const { note: noteValue, user, createdAt } = note;

    return (
        <Box pt={4} pb={4} borderBottom="1px" borderColor="gray.200">
            <Heading size="sm" pb={2} textAlign="justify">
                {noteValue}
            </Heading>
            <Text textAlign="end" fontSize="small" color="gray.400">
                {user} · {formatDate(new Date(createdAt))}
            </Text>  
        </Box>
    );
});

export { Note }