import { tracks } from "../../tracks.json"; //JSON loaded synchronously at program start - not good to scale with large files

export function getTracksFromFile() {
  return tracks;
}
