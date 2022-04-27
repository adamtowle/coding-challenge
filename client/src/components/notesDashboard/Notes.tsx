import React, { useEffect } from "react";
import axios from "axios";
import { Divider, Item, Icon } from "semantic-ui-react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../store';
import { BasicNotes } from '../state/notesState';
import { setNotes } from '../state/noteActions';

export interface NotesProps extends StateProps {}

export const Notes = (props: NotesProps) => {

    useEffect(() => {
            axios.get('http://localhost:8080/api/notes')
            .then(response => response.data)
            .then((data) => {
                props.setNotes(data)
            });
    },);

    return( 
        <div>
            <h2 className="ui header">
                <Divider hidden/>
                <i className="book icon"></i>
                <div className="content">
                    Your notes:
                </div>
            </h2>

            <Item.Group divided>
                {props.notes.map((note) => (
                    <Item>
                    <Icon size="large" name="sticky note" />
                    <Item.Content key={note.id}>
                        <Item.Header> Created at: {note.createdAt}</Item.Header>
                        <Item.Meta><span>Created by: {note.user}</span></Item.Meta>
                        <Item.Description>{note.note}</Item.Description>
                    </Item.Content>
                </Item>
                ))}
            </Item.Group>
        </div>
    )
}

const mapState = (state: RootState) => ({
    notes: state.notesReducer.notes
});
const mapDispatch = {
    setNotes: (notes: BasicNotes[]) => setNotes(notes)
}

const connector = connect(mapState, mapDispatch);
type StateProps = ConnectedProps<typeof connector>;
export default connector(Notes)