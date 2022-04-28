import { Divider, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { format } from "date-fns";

const appliedFormikCall = () =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useFormik<{
    date: Date;
    note: string;
  }>(undefined as any);

export type NotesFormik = Pick<
  ReturnType<typeof appliedFormikCall>,
  | "setFieldValue"
  | "values"
  | "handleChange"
  | "errors"
  | "touched"
  | "handleBlur"
>;

export declare namespace NotesModalContent {
    export interface Props {
        formik: NotesFormik;
    }
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const NotesModalContent = ({
    formik,
} : NotesModalContent.Props) => {
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
                        value={format(formik.values.date, "dd-MM-yyyy HH:mm aaaaaa")}
                        width={16}
                        disabled
                    >
                    </Form.Input>
                </Form.Field>
                <Form.Field>
                    <label>Note</label>
                    <Form.TextArea 
                        name="note"
                        width={16}
                        onChange={formik.handleChange}
                        value={formik.values.note}
                        error={formik.touched.note && formik.errors.note}
                        onBlur={formik.handleBlur}
                        />
                </Form.Field>
            </Form>
        </div>
    )
}