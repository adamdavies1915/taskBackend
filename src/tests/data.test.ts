const {getTracksFromArtist, getTrack} = require('../models/data');

test('Test track retrieval with ID', () => {
  expect(getTracksFromArtist("12 Stone Toddler").sort()).toMatchObject(
    [{
        "artist": "12 Stone Toddler",
        "title": "Piranha",
        "id": 1
    },
    {
        "artist": "12 Stone Toddler",
        "title": "Runaway Train",
        "id": 2
    }].sort());
});

test('Get all Artist tracks', () => {
    expect(getTrack(5)).toMatchObject( {
        "artist": "3AM",
        "title": "Cold Harbour Woman",
        "id": 5
      });
  });