import { getTracksFromArtist, getTrack } from "../controllers/trackController";

test("Test complete artist string search", () => {
  expect(getTracksFromArtist("12 Stone Toddler").sort()).toMatchObject([
    {
      artist: "12 Stone Toddler",
      title: "Piranha",
      id: 1,
    },
    {
      artist: "12 Stone Toddler",
      title: "Runaway Train",
      id: 2,
    },
  ]);
});

test("Test fuzzy search from part of artist string", () => {
  expect(getTracksFromArtist("Adrian").sort()).toMatchObject([
    {
      artist: "Aria Ohlsson",
      id: 333,
      title: "Heaven",
    },
    {
      artist: "Adrian Collier",
      id: 107,
      title: "MQ Mobo (Vocoded Voc)",
    },
    {
      artist: "Adrian T Bell",
      id: 109,
      title: "Blood On My Hands",
    },
    {
      artist: "Aria Ohlsson",
      id: 330,
      title: "Another Guy",
    },
    {
      artist: "Aria Ohlsson",
      id: 331,
      title: "Babysitter",
    },
    {
      artist: "Aria Ohlsson",
      id: 332,
      title: "Drive",
    },
    {
      artist: "Adrian Collier",
      id: 108,
      title: "MQ Out Here (Vocoded Voc)",
    },
    {
      artist: "Bad Mannequins",
      id: 448,
      title: "This Is My House (JUMP)",
    },
    {
      artist: "Bad Mannequins",
      id: 449,
      title: "Buzz Killer Skinny Gene",
    },
    {
      artist: "Bad Mannequins",
      id: 450,
      title: "I Hate You",
    },
    {
      artist: "Bad Mannequins",
      id: 451,
      title: "T-Shirt Collection",
    },
    {
      artist: "Bad Mannequins",
      id: 452,
      title: "Under The Glass",
    },
  ]);
});

test("Test track retrieval with ID", () => {
  expect(getTrack(5)).toMatchObject({
    artist: "3AM",
    title: "Cold Harbour Woman",
    id: 5,
  });
});
