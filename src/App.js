import { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

import ChooseColour from "./components/ChooseColour/ChooseColour";

function App() {
  const [key, setKey] = useState("colour");

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
          <ChooseColour setKey={setKey} />
        </Tab>
        <Tab eventKey="style" title="Style">
          Style
        </Tab>
        <Tab eventKey="size" title="Size">
          Size
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
