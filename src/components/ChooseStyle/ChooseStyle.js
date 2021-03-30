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

// imports all the images from the cambridge folder in assets/images
const cambridge = importAll(
  require.context("../../assets/images/cambridge", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the cambridge folder in assets/images
const canterbury = importAll(
  require.context("../../assets/images/canterbury", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the elland folder in assets/images
const elland = importAll(
  require.context("../../assets/images/elland", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const euroline = importAll(
  require.context("../../assets/images/euroline", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const gothic = importAll(
  require.context("../../assets/images/gothic", false, /.(png|jpe?g|svg)$/)
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
      {
        name: "Cambridge",
        src: cambridge["Cambridge High Gloss White.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury high gloss white.jpg"].default,
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
      {
        name: "Cambridge",
        src: cambridge["Cambridge High-Gloss-Cream.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury high gloss cream.jpg"].default,
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
      {
        name: "Cambridge",
        src: cambridge["Cambridge High Gloss Light Grey.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury High Gloss Light Grey.jpg"].default,
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
      {
        name: "Cambridge",
        src: cambridge["Cambridge High Gloss Dust Grey.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury High Gloss Dust Grey.jpg"].default,
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
      {
        name: "Cambridge",
        src: cambridge["cambridge high_gloss_cashmere.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury high gloss cashmere.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-porcelain.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Porcelain.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Porcelain.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Porcelain White.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Porcelain white.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-satin-white.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge satin-white.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury satin-white.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Satin White.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Satin white.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-super-white-ash.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Super White Ash.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Super White Ash.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Super White Ash.png"].default,
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
      {
        name: "Cambridge",
        src: cambridge["cambridge alabaster.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury alabaster.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Alabaster.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline alabaster.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-ivory.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge Ivory.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury ivory.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Ivory.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline Ivory.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-vanilla.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge vanilla.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury vanilla.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Vanilla.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline vanilla.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-opengrain-white.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Opengrain White.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Opengrain White.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Opengrain White.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Opengrain White.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-oakgrain-cream.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Oakgrain Cream.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Oakgrain Cream.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Oakgrain Cream.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Oakgrain Cream.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-oakgrain-mussel.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Oakgrain Mussel.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Oakgrain Mussel.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Oakgrain Mussel.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Oakgrain Mussel.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-oakgrain-cashmere.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Oakgrain Cashmere.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Oakgrain Cashmere.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Oakgrain Cashmere.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-oakgrain-grey.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Oakgrain Grey.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Oakgrain Grey.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Oakgrain Grey.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Oakgrain Grey.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-mussel.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt Mussel.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt Mussel.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Mussel.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt Mussel.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-pebble.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge matt_pebble.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury matt_pebble.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt_pebble.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline matt_pebble.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-cashmere.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt-Cashmere.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Cashmere.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt-Cashmere.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-dove-grey.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Dove Grey.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt-Dove-Grey.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-dust-grey.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt Dust Grey.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt Dust Grey.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Dust Grey.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt Dust Grey.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-dakkar.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt Dakkar.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt Dakkar.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Dakkar.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt Dakkar.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-taupe.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge matt_taupe.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury matt_taupe.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt_taupe.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline matt taupe.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-stone.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt Stone.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt Stone Grey.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Stone Grey.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt Stone Grey.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-denim.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge matt-denim.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Denim.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline matt-denim.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-indigo-blue.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt Indigo Blue.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-kombu-green.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge matt_kombu_green.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury matt_kombu_green.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt_kombu_green.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline matt kombu_green.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-graphite.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt Graphite.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt-Graphite.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Graphite.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt-Graphite.jpg"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-matt-black.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge matt_black.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury matt_black.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt_black.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline Matt black.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-london-concrete.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge London Concrete.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury London Concrete.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland London Concrete.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline London Concrete.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-moldau-acacia.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Moldau Acacia.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Moldau Acacia.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Moldau Acacia.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Moldau Acacia.png"].default,
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
      {
        name: "Cambridge",
        src: cambridge["Cambridge Canadian Maple.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Canadian Maple.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Canadian Maple.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Canadian Maple.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-halifax-oak-white.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge halifax_oak_white.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury Halifax_oak_white.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Halifax Oak white.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline halifax_oak_white.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-halifax-oak-natural.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge halifax_oak_natural.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Halifax_oak_natural.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Halifax Oak natural.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline halifax_oak_natural.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-lissa-oak.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Lissa Oak.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Lissa Oak.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Lissa Oak.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Lissa Oak.png"].default,
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
      {
        name: "Broadway",
        src: broadway["broadway-paintable.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Paintable.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Paintable.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Paintable.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Paintable.jpg"].default,
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
