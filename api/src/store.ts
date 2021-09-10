import faker from "faker";

interface NoteModel {
  readonly id: number;
  readonly createdAt: Date;
  readonly user: string;
  note: string;
}

const users = [...new Array(3)].map(
  () => `${faker.name.firstName()} ${faker.name.lastName()}`
);

const store: { notes: NoteModel[] } = {
  notes: [...new Array(30)]
    .map(() => ({
      createdAt: faker.date.past(1),
      user: users[Math.floor(Math.random() * users.length)],
      note: faker.lorem.sentence(30, 60),
    }))
    .sort((a, b) => a.createdAt.valueOf() - b.createdAt.valueOf())
    .map((item, index) => ({
      id: index + 1,
      ...item,
    }))
    .sort((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf()),
};

const createStore = () => {
  const getNotes = (from?: Date) =>
    from ? store.notes.filter((note) => note.createdAt >= from) : store.notes;

  const createNote = (note) =>
    (store.notes = [
      {
        id: store.notes.length + 1,
        createdAt: new Date(),
        user: "You",
        ...note,
      },
      ...store.notes,
    ]);

  return { createNote, getNotes };
};

export default createStore;
