import React, { ChangeEvent, useEffect } from "react";
import axios from "axios";
import { Divider, Label, Checkbox } from "semantic-ui-react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../store';
import { BasicNotes } from '../state/notesState';
import { setNotes, setIsAll } from '../state/noteActions';
import NoteItems  from "./NoteItems";

export interface NotesProps extends StateProps {}

export const Notes = (props: NotesProps) => {

    useEffect(() => {
            axios.get('http://localhost:8080/api/notes')
            .then(response => response.data)
            .then((data) => {
                props.setNotes(data)
            });
            //eslint-disable-next-line
    }, []);

    const onHandleToggleOn = (evt: ChangeEvent<EventTarget>, data: any) => {
        let on = data.checked;
        if(on) {
            props.setIsAll(true);
        } else {
            props.setIsAll(false);
        }
    }
 
    return( 
        <div>
            <h2 className="ui header">
                <Divider hidden/>
                <i className="book icon"></i>
                <div className="content">
                    Your notes:
                    <div>{!props.isAll ? <Label color="teal" tag> Notes from last 6 months</Label> : <Label color="blue" tag> All notes </Label>}</div>
                    <div>
                        <Checkbox onClick={(evt, data) => onHandleToggleOn(evt, data)} toggle/>
                    </div>
                </div>
            </h2>

            <NoteItems />
            
        </div>
    )
}

const mapState = (state: RootState) => ({
    isAll: state.notesReducer.isAll
});
const mapDispatch = {
    setIsAll : (on: Boolean) => setIsAll(on),
    setNotes: (notes: BasicNotes[]) => setNotes(notes)
}

const connector = connect(mapState, mapDispatch);
type StateProps = ConnectedProps<typeof connector>;
export default connector(Notes)