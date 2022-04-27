import React from "react";
import { Header, Container, Divider } from "semantic-ui-react";
import { Notes } from "./components/notesDashboard/Notes";
import "./scss/globalBundle.scss";

export const App = () => {
  return (
    <>
    <Header className="notesHeader">
        <Container inverted>
            <img
                className="ui middle aligned left floated image"
                src="/notes_logo.png"
                alt="LOGO"
                width="100"
            />
        </Container>
    </Header>
    <>
    <div className="bannerContainer">
        <div className="bannerImage" style={{backgroundImage: "url(/notes.jpg)"}}></div>
    </div>

    <Container className="mainContainer">
    <Notes />
    </Container>
    </>

    <Divider/>
    <footer className="notesFooter">
        <div className="ui basic inverted segment">
            <div className="ui container">
                Notes
            </div>
        </div>
    </footer>
</>
  );
}