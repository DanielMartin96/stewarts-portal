import React from "react";
import { Card } from "react-bootstrap";

// function that imports all necessary images
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

// imports all the images from the aldridge folder in assets/images
const colours = importAll(
  require.context("../../assets/images/colours", false, /.(png|jpe?g|svg)$/)
);

// These arrays are where you would add new colours
const highGloss = [
  {
    name: "High Gloss White",
    src: "",
  },
  {
    name: "High Gloss Cream",
    src: "",
  },
  {
    name: "High Gloss Ivory",
    src: "",
  },
  {
    name: "Super White Ash",
    src: "",
  },
];

const textured = [
  {
    name: "London Concrete",
    src: "",
  },
  {
    name: "Opengrain White",
    src: "",
  },
  {
    name: "Oakgrain Cream",
    src: "",
  },
  {
    name: "Oakgrain Grey",
    src: "",
  },
  {
    name: "Oakgrain Cashmere",
    src: "",
  },
  {
    name: "Oakgrain Mussel",
    src: "",
  },
];

const satinMatt = [
  {
    name: "Satin White",
    src: "",
  },
  {
    name: "Porcelain White",
    src: "",
  },
  {
    name: "Alabaster",
    src: colours["Alabaster.jpg"].default,
  },
  {
    name: "Vanilla",
    src: "",
  },
  {
    name: "Ivory",
    src: "",
  },
  {
    name: "Matt Denim",
    src: "",
  },
  {
    name: "Matt Mussel",
    src: "",
  },
  {
    name: "Matt Dove Grey",
    src: "",
  },
  {
    name: "Matt Cashmere",
    src: "",
  },
  {
    name: "Matt Dakkar",
    src: "",
  },
  {
    name: "Matt Stone Grey",
    src: "",
  },
  {
    name: "Matt Graphite",
    src: "",
  },
  {
    name: "Moldau Acacia",
    src: "",
  },
  {
    name: "Canadian Maple",
    src: "",
  },
  {
    name: "Lissa Oak",
    src: "",
  },
  {
    name: "Paintable",
    src: "",
  },
  {
    name: "Matt Dust Grey",
    src: colours["Halifax White Oak.jpg"].default,
  },
  {
    name: "Matt Indigo Blue",
    src: "",
  },
];

// What is shown in the colour tab. Whatever is returned is shown on the screen. Normal HTML and CSS works here
// highGloss.map() is what maps through the highGloss array. It returns a new card with the neccessary information. So when you add new colours to each array it is automatically added
const ChooseColour = ({ setKey, setColour }) => {
  return (
    <Card>
      <Card.Header>
        <h1>
          <b>Choose your door colour:</b>
        </h1>
      </Card.Header>
      <Card.Body>
        <div>
          <div>
            <h4>
              <b>High Gloss</b>
            </h4>
            <hr />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {highGloss.map((colour, idx) => {
              return (
                <Card
                  style={{ margin: "10px", cursor: "pointer" }}
                  onClick={(e) => {
                    setKey("style");
                    setColour(colour.name);
                  }}
                  key={idx}
                >
                  <Card.Header>
                    <h5 style={{ textAlign: "center" }}>{colour.name}</h5>
                  </Card.Header>
                  <Card.Body
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src={colour.src}
                      alt={colour.name}
                      style={{ width: "100px" }}
                    />
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <h4>
              <b>Textured</b>
            </h4>
            <hr />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {textured.map((colour, idx) => {
              return (
                <Card
                  style={{ margin: "10px", cursor: "pointer" }}
                  onClick={(e) => {
                    setKey("style");
                    setColour(colour.name);
                  }}
                  key={idx}
                >
                  <Card.Header>
                    <h5 style={{ textAlign: "center" }}>{colour.name}</h5>
                  </Card.Header>
                  <Card.Body
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img src={colour.src} alt={colour.name} />
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <h4>
              <b>Satin - Matt</b>
            </h4>
            <hr />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {satinMatt.map((colour, idx) => {
              return (
                <Card
                  style={{ margin: "10px", cursor: "pointer" }}
                  onClick={(e) => {
                    setKey("style");
                    setColour(colour.name);
                  }}
                  key={idx}
                >
                  <Card.Header>
                    <h5 style={{ textAlign: "center" }}>{colour.name}</h5>
                  </Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={colour.src}
                      alt={colour.name}
                      style={{ margin: "0px" }}
                    />
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ChooseColour;
