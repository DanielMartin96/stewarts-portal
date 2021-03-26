import React from "react";
import { Card, InputGroup, FormControl, Form } from "react-bootstrap";

const styles = [
  {
    name: "Aldridge",
    minDrawerHeight: 160,
    minDrawerWidth: 230,
    minDoorWidth: 230,
  },
  {
    name: "Ashford",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 198,
  },
  {
    name: "Broadway",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 230,
  },
  {
    name: "Cambridge",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 275,
  },
  {
    name: "Canterbury",
    minDrawerHeight: 132,
    minDrawerWidth: 230,
    minDoorWidth: 260,
  },
  {
    name: "Elland",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 200,
  },
  {
    name: "Euroline",
    minDrawerHeight: 108,
    minDrawerWidth: 108,
    minDoorWidth: 108,
  },
  {
    name: "Gothic",
    minDrawerHeight: 100,
    minDrawerWidth: 160,
    minDoorWidth: 220,
  },
  {
    name: "Integra",
    minDrawerHeight: 60,
    minDrawerWidth: 240,
    minDoorWidth: 240,
  },
  {
    name: "Knebworth",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 100,
  },
  {
    name: "Lazio",
    minDrawerHeight: 120,
    minDrawerWidth: 240,
    minDoorWidth: 240,
  },
  {
    name: "Lincoln",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 100,
  },
  {
    name: "Milano",
    minDrawerHeight: 140,
    minDrawerWidth: 218,
    minDoorWidth: 218,
  },
  {
    name: "Newport",
    minDrawerHeight: 100,
    minDrawerWidth: 240,
    minDoorWidth: 240,
  },
  {
    name: "Oxford",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 290,
  },
  {
    name: "Palermo",
    minDrawerHeight: 132,
    minDrawerWidth: 230,
    minDoorWidth: 246,
  },
  {
    name: "Pisa",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 100,
  },
  {
    name: "Richmond",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 210,
  },
  {
    name: "Segreto",
    minDrawerHeight: 90,
    minDrawerWidth: 250,
    minDoorWidth: 250,
  },
  {
    name: "Shaker",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 220,
  },
  {
    name: "Surrey",
    minDrawerHeight: 100,
    minDrawerWidth: 242,
    minDoorWidth: 242,
  },
  {
    name: "Tullymore",
    minDrawerHeight: 100,
    minDrawerWidth: 100,
    minDoorWidth: 240,
  },
  {
    name: "Tuscany",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 250,
  },
  {
    name: "Venice",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 100,
  },
  {
    name: "Verona",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 246,
  },
  {
    name: "Warwick",
    minDrawerHeight: 100,
    minDrawerWidth: 260,
    minDoorWidth: 260,
  },
  {
    name: "Westbury",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 240,
  },
];

const PriceCalculator = ({ style }) => {
  const findStyle = (style, styles) => {
    for (let i = 0; i < styles.length; i++) {
      if (style === styles[i].name) {
        return styles[i];
      }
    }
  };

  const customerStyle = findStyle(style, styles);

  if (style.length === 0) {
    return <div></div>;
  }

  return (
    <Card>
      <Card.Header>
        <h1>
          <b>Choose your door size:</b>
        </h1>
      </Card.Header>
      <Card.Body
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            width: "500px",
          }}
        >
          <label htmlFor="basic-url">Height:</label>
          <InputGroup className="mb-3">
            <FormControl
              id="basic-url"
              aria-describedby="basic-addon3"
              type="number"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon3">mm</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Form.Text className="text-muted">
            Min drawer height: {customerStyle.minDrawerHeight}mm
          </Form.Text>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            width: "500px",
          }}
        >
          <label htmlFor="basic-url">Width:</label>
          <InputGroup className="mb-3">
            <FormControl
              id="basic-url"
              aria-describedby="basic-addon3"
              type="number"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon3">mm</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PriceCalculator;
