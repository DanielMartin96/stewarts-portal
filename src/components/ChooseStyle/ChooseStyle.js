import React from "react";
import { Card } from "react-bootstrap";

const styles = [
  {
    name: "High Gloss White",
    images: [
      {
        name: "Lewes",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/lewes-high-gloss-white.jpg",
      },
      {
        name: "Newick",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/newick-high-gloss-white.jpg",
      },
      {
        name: "Brighton",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/brighton-high-gloss-white.jpg",
      },
      {
        name: "Ringmer",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/ringmer-high-gloss-white.jpg",
      },
      {
        name: "Petworth",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/petworth-high-gloss-white.jpg",
      },
      {
        name: "Durrington",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/durrington-high-gloss-white.jpg",
      },
      {
        name: "Chichester",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/chichester-high-gloss-white.jpg",
      },
      {
        name: "Washington",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/washington-high-gloss-white.jpg",
      },
      {
        name: "Arlington",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/arlington-high-gloss-white.jpg",
      },
      {
        name: "Buxted",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/buxted-high-gloss-white.jpg",
      },
      {
        name: "Westfield",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/westfield-high-gloss-white.jpg",
      },
      {
        name: "Fontwell",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/fontwell-high-gloss-white.jpg",
      },
      {
        name: "Amberley",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/amberley-high-gloss-white.jpg",
      },
    ],
  },
  {
    name: "High Gloss Cream",
    images: [
      {
        name: "Lewes",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/lewes-high-gloss-cream.jpg",
      },
      {
        name: "Newick",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/newick-high-gloss-cream.jpg",
      },
      {
        name: "Brighton",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/brighton-high-gloss-cream.jpg",
      },
      {
        name: "Ringmer",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/ringmer-high-gloss-cream.jpg",
      },
      {
        name: "Petworth",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/petworth-high-gloss-cream.jpg",
      },
      {
        name: "Durrington",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/durrington-high-gloss-cream.jpg",
      },
      {
        name: "Chichester",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/chichester-high-gloss-cream.jpg",
      },
      {
        name: "Washington",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/washington-high-gloss-cream.jpg",
      },
      {
        name: "Arlington",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/arlington-high-gloss-cream.jpg",
      },
      {
        name: "Buxted",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/buxted-high-gloss-cream.jpg",
      },
      {
        name: "Westfield",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/westfield-high-gloss-cream.jpg",
      },
      {
        name: "Fontwell",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/fontwell-high-gloss-cream.jpg",
      },
      {
        name: "Amberley",
        src:
          "https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/amberley-high-gloss-cream.jpg",
      },
    ],
  },
];

const ChooseStyle = ({ colour, setStyle, setKey }) => {
  const findColour = (colour, styles) => {
    for (let i = 0; i < styles.length; i++) {
      if (colour === styles[i].name) {
        return styles[i];
      }
    }
  };

  const relevantStyles = findColour(colour, styles);

  if (colour.length === 0) {
    return <div></div>;
  }

  return (
    <Card>
      <Card.Header>
        <h1>
          <b>Choose your door style:</b>
        </h1>
      </Card.Header>
      <Card.Body>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {relevantStyles.images.map((image, idx) => {
            return (
              <Card
                style={{ margin: "10px", cursor: "pointer" }}
                onClick={(e) => {
                  setStyle(image.name);
                  setKey("size");
                }}
                key={idx}
              >
                <Card.Header>
                  <h5 style={{ textAlign: "center" }}>{image.name}</h5>
                </Card.Header>
                <Card.Body
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img src={image.src} alt={image.name} />
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ChooseStyle;
