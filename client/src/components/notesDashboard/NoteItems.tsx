import {Item, Icon } from "semantic-ui-react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../store';
import { BasicNotes } from '../state/notesState';
import { setNotes } from '../state/noteActions';
import { format } from "date-fns";

export interface NotesProps extends StateProps {}

export const NoteItems = (props: NotesProps) => {
    const lastSixMonths = new Date();
    lastSixMonths.setMonth(lastSixMonths.getMonth() - 6)
    
    const allNotes = props.notes;
    const lastSixMonthNotes = props.notes.filter(({createdAt}) => (new Date(createdAt)) > lastSixMonths);

    return( 
        <div>
            <Item.Group divided>
               {props.isAll ? allNotes.map((note) => (
                   <Item>
                   <Icon size="large" name="sticky note" />
                   <Item.Content key={note.id}>
                       <Item.Header> Created at: {format(new Date(note.createdAt), "dd-MM-yyyy HH:mm aaaaaa")}</Item.Header>
                       <Item.Meta><span>Created by: {note.user}</span></Item.Meta>
                       <Item.Description>{note.note}</Item.Description>
                   </Item.Content>
               </Item>
               )) : 
                (lastSixMonthNotes.map((note) => (
                    <Item>
                        <Icon size="large" name="sticky note" />
                        <Item.Content key={note.id}>
                            <Item.Header> Created at: {format(new Date(note.createdAt), "dd-MM-yyyy HH:mm aaaaaa")}</Item.Header>
                            <Item.Meta><span>Created by: {note.user}</span></Item.Meta>
                            <Item.Description>{note.note}</Item.Description>
                        </Item.Content>
                    </Item>
                    )))
                } 
            </Item.Group>
        </div>
    )
}

const mapState = (state: RootState) => ({
    notes: state.notesReducer.notes,
    isAll: state.notesReducer.isAll
});
const mapDispatch = {
    setNotes: (notes: BasicNotes[]) => setNotes(notes)
}

const connector = connect(mapState, mapDispatch);
type StateProps = ConnectedProps<typeof connector>;
export default connector(NoteItems)