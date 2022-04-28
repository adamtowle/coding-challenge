import { Divider, Form, } from "semantic-ui-react";

export const NotesModalContent = () => {


    return (
        <div>
            <h2>Create a new note</h2>
            <Divider/>
            <Form>
                <Form.Field>
                    <label>Date</label>
                    <Form.Input
                        name="date"
                        placeholder="Date"
                        value={"date here"}
                        disabled
                    >
                    </Form.Input>
                </Form.Field>
                <Form.Field>
                    <label>Name</label>
                    <Form.Input
                        name="name"
                        placeholder="Name"
                        //value
                        //error
                        //onBlur
                    >
                    </Form.Input>
                </Form.Field>
                <Form.Field>
                    <label>Note</label>
                    <Form.TextArea 
                    name="note" 
                    //value
                    //error
                    //handleChange
                    //onBlur
                    width={12}
                    />
                </Form.Field>
            </Form>
        </div>
    )
}