import express from "express";
import {
  getTrack,
  getTracksFromArtist,
  getAllTracks,
} from "../controllers/trackController";
import { isString, isNumber } from "../utils/utils";

export const trackRouter = express.Router();

trackRouter.get("/:id", (req, res, next) => {
  const trackId = Number(req.params.id);
  if (isNumber(trackId) && !isNaN(trackId)) {
    res.send(getTrack(trackId));
  } else {
    res.sendStatus(400);
  }
});

trackRouter.get("/", (req, res, next) => {
  const artist = req.query.artist;
  if (artist === {} || !artist) {
    res.send(getAllTracks());
  }
  if (isString(artist) && artist !== "") {
    res.send(getTracksFromArtist(artist));
  } else {
    res.sendStatus(400);
  }
});
