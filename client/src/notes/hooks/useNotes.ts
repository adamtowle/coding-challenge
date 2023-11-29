import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { INote } from "../types/note";
import { useLocation } from "react-router";

export const useNotes = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    
    const fetchNotes = async () => {
        const from = queryParams.get("from");

        if (from) {
            queryParams.set("from", from);
        } else {
            queryParams.delete("from");
        }

        console.log("query useNotes: ", queryParams)
        const result = await axios.get('/api/notes', { params: queryParams });
        return result.data;
    };
  
    const { data, error, isLoading, refetch } = useQuery<Array<INote>, Error>({ queryKey: ['notes', queryParams.toString()], queryFn: fetchNotes });

    return { notes: data, error, isLoading, refetch };
};