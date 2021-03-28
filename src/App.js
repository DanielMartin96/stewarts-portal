import { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

import "./App.css";
// Importing of the functions that will be shown on the screen
import ChooseColour from "./components/ChooseColour/ChooseColour";
import ChooseStyle from "./components/ChooseStyle/ChooseStyle";
import PriceCalculator from "./components/PriceCalculator/PriceCalculator";

// The container function that is shown on the screen
function App() {
  // The apps state. When one of these changes, the content on the page is changed
  // key and setKey are used for the tab system
  const [key, setKey] = useState("colour");
  // colour is passed to the ChooseStyle component so it can find the right colour to show on screen. setColour is used on each card with an onClick event which will set the colour to that cards colour
  const [colour, setColour] = useState("");
  // style will be used in the payment function so it can tell what min and max height is possible. setStyle is used on each card. Same as setColour
  const [style, setStyle] = useState("");

  return (
    <Container
      style={{
        backgroundColor: "white",
        marginTop: "10px",
        borderRadius: "5px",
        padding: "0px",
      }}
    >
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="colour" title="Colour">
          <ChooseColour setKey={setKey} setColour={setColour} />
        </Tab>
        <Tab
          eventKey="style"
          title="Style"
          disabled={colour.length === 0 ? true : false}
        >
          <ChooseStyle setKey={setKey} colour={colour} setStyle={setStyle} />
        </Tab>
        <Tab
          eventKey="size"
          title="Size"
          disabled={style.length === 0 ? true : false}
        >
          <PriceCalculator style={style} />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
