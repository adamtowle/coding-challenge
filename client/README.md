# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Solution, assumptions, and improvements

1. I've used URL manipulation to retrieve the notes, depending on whether we want them for the last 6 months (default)
 or to show them all
    Alternative approaches:
        - Return ALL notes by default, and filter by the createdDate on load. This is fine for a small data set, but as the notes inevitably increase this would become an expensive operation
        - Lazy load / paginate the notes (cursor or offset-based. I prefer offset as we can just fetch via page number directly. Cursor is fine, but again, if we have a lot of data this becomes slower as we have to find at which cursor to begin to get the next batch)

2. I've created hooks for the GET and POST operations to abstract out the logic from the view layer to adhere to the separation of concerns principle.
3. I've added react-hook-form, date-fns and chakra-ui libraries (I appreciate these are somewhat overkill for this, but it was more about keeping it within the 3-5 time limit).
4. There is some code duplication, but I have added comments where necessary to explain this. Things like forms, toasts etc would be better off created as generic components receiving props where appropriate, but for this I have kept it simple.
5. I've kept the styling basic. In reality I would have wireframes/mockups (Figma or Adobe XD) to follow.
6. In terms of styling, I have kept it basic. I don't know how LDMS style their components, but in practice these guidelines would be adhered to (design system, storybook etc). I have added the styles to the components, but alternative approaches might be Styled Components, CSS Modules etc.
7. The Container component in Chakra UI is fairly responsive out-of-the-box. For finer level control, I would use media breakpoints (sm, md, lg, xl etc) to control what users' see at different viewports.
8. I've co-located the tests with their features. There aren't many, but a basic idea of what we could test for.
9. I've re-exported the components as it's a pet peeve of mine when having to import from different locations, whereas with re-exporting we can access them from a central entry point (single source of truth etc).
It also helps create a consistent API if we were to build a library, and simplifies imports.
 