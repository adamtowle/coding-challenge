import express from "express";
import Ajv, { JSONSchemaType } from "ajv";
import addFormats from "ajv-formats";
import createStore from "./store";

const ajv = new Ajv();
addFormats(ajv);

interface NoteModel {
  note: string;
}

const noteSchema: JSONSchemaType<NoteModel> = {
  type: "object",
  properties: {
    note: {
      type: "string",
      maxLength: 500,
    },
  },
  required: ["note"],
};

const querySchema = {
  type: "object",
  properties: {
    from: {
      type: "string",
      format: "date",
    },
  },
};

const validateNote = ajv.compile(noteSchema);
const validateQuery = ajv.compile(querySchema);

const port = 8080;

const store = createStore();
const app = express();

app.use(express.json());

app.get("/api/notes", (req, res) => {
  if (!validateQuery(req.query)) {
    res.status(400).json(validateQuery.errors);
    return;
  }

  const { from } = req.query;
  res.json(store.getNotes(from ? new Date(String(from)) : undefined));
});

app.post("/api/notes", (req, res) => {
  if (!validateNote(req.body)) {
    res.status(400).json(validateNote.errors);
    return;
  }

  store.createNote(req.body);
  res.status(201).end();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
