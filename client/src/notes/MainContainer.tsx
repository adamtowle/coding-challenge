import { Container, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useNotes } from "./hooks/useNotes";
import CustomError from "../components/CustomError";
import Note from "../components/Note";
import NotesActions from "./components/NotesActions";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { format, subMonths } from "date-fns";

const MainContainer = () => {
    const { notes, isLoading, error } = useNotes() ?? [];
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        // Put into util function
        queryParams.set('from', format(subMonths(new Date(), 6), 'yyyy-MM-dd'));
        navigate({ search: queryParams.toString() })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate]);

    return (
        <Container
            className="App"
            p={4}
            display="flex"
            flex={1}
            height="100%"
            alignContent="center"
            justifyContent="center"
            flexDirection="column"
        >
            {isLoading && <Spinner />}
            {error !== null && <CustomError value="Please retry" /> }
            <Flex justifyContent="space-between" alignItems="center" pb={4}>
                <Heading size="md">Notes</Heading>
                <NotesActions />
            </Flex>

            {notes?.map(note => <Note key={note.id} {...note} />)}
        </Container>
    );
}

export default MainContainer;