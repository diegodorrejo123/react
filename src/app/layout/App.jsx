import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import Sandbox from "../../features/sandbox/Sandbox";
import EventDashboard from "./../../features/events/eventDashboard/EventDashboard";

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route exact path="/sandbox" component={Sandbox} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path={["/createEvent", "/manage/:id"]} component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
