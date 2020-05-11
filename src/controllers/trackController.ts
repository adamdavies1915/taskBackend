import { Track } from "../types/Track";
import { getTracksFromFile } from "../models/trackData";
import Fuse from "fuse.js";

export function getTracksFromArtist(artist: string): Track[] {
  const tracks = getTracksFromFile();
  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.4,
    // distance: 100,
    // useExtendedSearch: false,
    keys: ["artist"],
  };
  const fuse = new Fuse(tracks, options);
  const results = fuse.search(artist);
  return results.map((result) => result.item);
}

export function getTrack(trackId: number): Track | undefined {
  const tracks = getTracksFromFile();
  return tracks[trackId - 1]; // Assuming JSON list is ordered by id (currently is)
}

export function getAllTracks(): Track[] {
  const tracks = getTracksFromFile();
  return tracks;
}
