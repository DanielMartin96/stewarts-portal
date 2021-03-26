import { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

import "./App.css";
import ChooseColour from "./components/ChooseColour/ChooseColour";
import ChooseStyle from "./components/ChooseStyle/ChooseStyle";
import PriceCalculator from "./components/PriceCalculator/PriceCalculator";

function App() {
  const [key, setKey] = useState("colour");
  const [colour, setColour] = useState("");
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
