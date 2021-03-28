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
const aldridge = importAll(
  require.context("../../assets/images/aldridge", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the ashford folder in assets/images
const ashford = importAll(
  require.context("../../assets/images/ashford", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the broadway folder in assets/images
const broadway = importAll(
  require.context("../../assets/images/broadway", false, /.(png|jpe?g|svg)$/)
);

// Where all the colours and styles will be held. Will be a pretty long array. Each colour has an images array which will hold all the styles of that colour.
// Alabaster is a good example of the functionality
const styles = [
  {
    name: "High Gloss White",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-high-gloss-white.jpg"].default,
      },
    ],
  },
  {
    name: "High Gloss Cream",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-high-gloss-cream.jpg"].default,
      },
    ],
  },
  {
    name: "High Gloss Light Grey",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-high-gloss-light-grey.jpg"].default,
      },
    ],
  },
  {
    name: "High Gloss Dust Grey",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-high-gloss-dust-grey.jpg"].default,
      },
    ],
  },
  {
    name: "High Gloss Cashmere",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-high-gloss-cashmere.png"].default,
      },
    ],
  },
  {
    name: "Porcelain White",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-porcelain-white.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-porcelain.jpg"].default,
      },
    ],
  },
  {
    name: "Satin White",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-satin-white.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-satin-white.jpg"].default,
      },
    ],
  },
  {
    name: "Super White Ash",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-super-white-ash.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-super-white-ash.png"].default,
      },
    ],
  },
  {
    name: "Alabaster",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-alabaster.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-alabaster.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-alabaster.jpg"].default,
      },
    ],
  },
  {
    name: "Ivory",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-ivory.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-ivory.jpg"].default,
      },
    ],
  },
  {
    name: "Vanilla",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-vanilla.jpg"].default,
      },
    ],
  },
  {
    name: "Opengrain White",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-opengrain-white.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-opengrain-white.png"].default,
      },
    ],
  },
  {
    name: "Oakgrain Cream",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-oakgrain-cream.png"].default,
      },
    ],
  },
  {
    name: "Oakgrain Mussel",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-oakgrain-mussel.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-oakgrain-mussel.png"].default,
      },
    ],
  },
  {
    name: "Oakgrain Cashmere",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-oakgrain-cashmere.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-oakgrain-cashmere.png"].default,
      },
    ],
  },
  {
    name: "Oakgrain Grey",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-oakgrain-grey.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-oakgrain-grey.png"].default,
      },
    ],
  },
  {
    name: "Matt Mussel",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-mussel.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-mussel.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Pebble",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-pebble.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-pebble.png"].default,
      },
    ],
  },
  {
    name: "Matt Cashmere",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-cashmere.jpg"].default,
      },
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-cashmere.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Dove Grey",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-dove-grey.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-dove-grey.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Dust Grey",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-dust-grey.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-dust-grey.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Dakkar",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-dakkar.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-dakkar.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Taupe",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-taupe.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-taupe.png"].default,
      },
    ],
  },
  {
    name: "Matt Stone Grey",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-stone-grey.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-stone-grey.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Denim",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-denim.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-denim.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Indigo Blue",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-indigo-blue.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-indigo-blue.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Kombu Green",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-kombu-green.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-kombu-green.png"].default,
      },
    ],
  },
  {
    name: "Matt Graphite",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-graphite.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-graphite.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Black",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-black.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-black.png"].default,
      },
    ],
  },
  {
    name: "London Concrete",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-london-concrete.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-london-concrete.png"].default,
      },
    ],
  },
  {
    name: "Moldau Acacia",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-moldau-acacia.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-moldau-acacia.png"].default,
      },
    ],
  },
  {
    name: "Canadian Maple",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-canadian-maple.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-canadian-maple.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-canadian-maple.png"].default,
      },
    ],
  },
  {
    name: "Halifax White Oak",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-halifax-oak-white.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-halifax-oak-white.png"].default,
      },
    ],
  },
  {
    name: "Halifax Natural Oak",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-halifax-oak-natural.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-halifax-oak-natural.png"].default,
      },
    ],
  },
  {
    name: "Lissa Oak",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-lissa-oak.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-lissa-oak.png"].default,
      },
    ],
  },
  {
    name: "Paintable",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-paintable.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-paintable-vinyl.jpg"].default,
      },
    ],
  },
];

const ChooseStyle = ({ colour, setStyle, setKey }) => {
  // this function takes in the colour that was picked on the previous tab and goes through the styles array and finds the colour. It then returns that colour and all the images relevant to that colour
  const findColour = (colour, styles) => {
    for (let i = 0; i < styles.length; i++) {
      if (colour === styles[i].name) {
        return styles[i];
      }
    }
  };

  // Find the right colour and assigns it to a variable which can be mapped through
  const relevantStyles = findColour(colour, styles);

  // If no colour picked on previous screen, the page will show nothing
  if (colour.length === 0) {
    return <div></div>;
  }

  // What is shown on the screen
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
                  <img
                    src={image.src}
                    alt={image.name}
                    style={{ width: "150px" }}
                  />
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
