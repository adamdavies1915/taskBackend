import {Track} from '../types/Track'
import { getTracksFromFile } from '../models/trackData';


export function getTracksFromArtist(artist: string) : Track[] {
    const tracks = getTracksFromFile();
    return tracks.filter(track => track.artist === artist);
}

export function getTrack(trackId: number): Track | undefined {
    const tracks = getTracksFromFile();
    return tracks.find(track => track.id === trackId);
}

export function getAllTracks() : Track[] {
    const tracks = getTracksFromFile()
    return tracks;
}