import React from "react";
import { Card } from "react-bootstrap";

const highGloss = [
  {
    name: "High Gloss White",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-high-gloss-white.jpg",
  },
  {
    name: "High Gloss Cream",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-high-gloss-cream.jpg",
  },
  {
    name: "Super White Ash",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-super-white-ash.jpg",
  },
];

const textured = [
  {
    name: "London Concrete",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-london-concrete.jpg",
  },
  {
    name: "Opengrain White",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-opengrain-white.jpg",
  },
  {
    name: "Oakgrain Cream",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-oakgrain-cream.jpg",
  },
  {
    name: "Oakgrain Grey",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-oakgrain-grey.jpg",
  },
  {
    name: "Oakgrain Cashmere",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-oakgrain-cashmere.jpg",
  },
  {
    name: "Oakgrain Mussel",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-oakgrain-mussel.jpg",
  },
];

const satinMatt = [
  {
    name: "Satin White",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-satin-white.jpg",
  },
  {
    name: "Porcelain White",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-porcelain-white.jpg",
  },
  {
    name: "Alabaster",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-alabaster.jpg",
  },
  {
    name: "Vanilla",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-vanilla.jpg",
  },
  {
    name: "Ivory",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-ivory.jpg",
  },
  {
    name: "Matt Denim",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-matt-denim.jpg",
  },
  {
    name: "Matt Mussel",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-matt-mussel.jpg",
  },
  {
    name: "Matt Dove Grey",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-matt-dove-grey.jpg",
  },
  {
    name: "Matt Cashmere",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-matt-cashmere.jpg",
  },
  {
    name: "Matt Dakkar",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-matt-dakkar.jpg",
  },
  {
    name: "Matt Stone Grey",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-matt-stone-grey.jpg",
  },
  {
    name: "Matt Graphite",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-matt-graphite.jpg",
  },
  {
    name: "Moldau Acacia",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-moldau-acacia.jpg",
  },
  {
    name: "Canadian Maple",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-canadian-maple.jpg",
  },
  {
    name: "Lissa Oak",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-lissa-oak.jpg",
  },
  {
    name: "Paintable Vinyl",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-paintable-vinyl.jpg",
  },
  {
    name: "Matt Dust Grey",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-matt-dust-grey.jpg",
  },
  {
    name: "Matt Indigo Blue",
    src:
      "https://www.kitchendoorworkshop.co.uk/public/images/doors/bella/swatches/thumb/bella-matt-indigo-blue.jpg",
  },
];

const ChooseColour = ({ setKey }) => {
  return (
    <Card>
      <Card.Header>
        <h1>Choose your door colour:</h1>
      </Card.Header>
      <Card.Body>
        <div>
          <div>
            <h4>High Gloss</h4>
            <hr />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {highGloss.map((colour) => {
              return (
                <Card
                  style={{ margin: "10px", cursor: "pointer" }}
                  onClick={(e) => setKey("style")}
                >
                  <Card.Header>
                    <h5>{colour.name}</h5>
                  </Card.Header>
                  <Card.Body>
                    <img src={colour.src} alt={colour.name} />
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <h4>Textured</h4>
            <hr />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {textured.map((colour) => {
              return (
                <Card style={{ margin: "10px" }}>
                  <Card.Header>
                    <h5>{colour.name}</h5>
                  </Card.Header>
                  <Card.Body>
                    <img src={colour.src} alt={colour.name} />
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <h4>Satin - Matt</h4>
            <hr />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {satinMatt.map((colour) => {
              return (
                <Card style={{ margin: "10px" }}>
                  <Card.Header>
                    <h5>{colour.name}</h5>
                  </Card.Header>
                  <Card.Body>
                    <img src={colour.src} alt={colour.name} />
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
