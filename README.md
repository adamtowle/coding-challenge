# Frontend-focused Challenge

```
TIMEBOX: 3-4 hours
STACK: React/TypeScript + libraries of your choice for e.g. components
TESTS: Enough to showcase what good testing looks like to you
DOCS: Nice to have, not mandatory
```

## Overview

This challenge is to implement a small set of UI functionality providing the ability to create and interact with a list of notes.

We have provided a small API to interact with and a set of requirements for the desired solution, as well as a scaffolded client Create React App project to help you get started.

It is important to note that this is by no means a test with a single correct answer in terms of structure and code, we're wanting to get a sense for how you take a set of requirements and spike a holistic solution that demonstrates your craftsmanship and approach to building software.

## The Challenge

Using the provided API (documented in more detail below), build a small UI fulfilling the following criteria:

- The UI should provide a list of notes currently in the system
- The UI should list notes created within the last 6 months only by default
- The UI should provide the ability to toggle the list to display all notes
- The UI should provide the ability to create a new note using a modal
- The UI should validate and provide feedback for the following when creating a new note:
  - The note itself is required
  - The note cannot exceed 500 characters

You do not need to build a full application shell, we're more interested in the above functionality.

## Getting Started

### Running the Backend

From the root directory:

```
cd api && npm install && npm run serve
```

The API will be listening at http://localhost:8080 once started, however the client project has proxying set-up to avoid CORS issues.

### Running the Client

From the root directory:

```
cd client && npm install && npm start
```

The client app will be listening at http://localhost:3000 once started and will proxy any local requests to the API for ease of use.

## API

### `GET /api/notes`

#### Parameters

| Name   | Type | In    | Description                             |
| :----- | :--- | ----- | --------------------------------------- |
| `from` | Date | query | List notes created after this date only |

#### Response

```
Status: 200 OK
```

```json
[
  {
    "id": 30,
    "createdAt": "2021-07-17T18:04:38.040Z",
    "user": "Hoyt Braun",
    "note": "Sit iusto odit amet itaque sequi error laudantium fugit aperiam accusamus et mollitia est et necessitatibus iusto maxime sunt sed incidunt ut saepe quidem aspernatur modi consectetur illum qui vero."
  }
]
```

### `POST /api/notes`

#### Parameters

| Name   | Type   | In   | Description                           |
| :----- | :----- | ---- | ------------------------------------- |
| `note` | string | body | **Required.** The content of the note |

#### Response

```
Status: 201 Created
```

## Do I Need to Write Tests?

We want to get a sense for how you write code and solve problems so treat this as any other piece of code you would deliver. We are not looking for a comprehensive suite and 100% coverage, just enough to understand what you think is important in terms of tests and quality.

## Submitting Your Challenge

- Please submit your challenge as a git repository.
- You can either create a repository on your favourite git hosting provider (GitHub, GitLab, BitBucket) and share the link.
- Or send the whole repository, zipped (including the .git directory!). Please include both build and run instructions.
