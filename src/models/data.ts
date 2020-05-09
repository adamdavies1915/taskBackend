import {Track} from '../types/Track'

import {tracks} from '../../tracks.json'


export function getTracksFromArtist(artist: string) : Track[] {
    return tracks.filter(track => track.artist === artist);
}

export function getTrack(trackId: number): Track | undefined {
    return tracks.find(track => track.id === trackId);
}

export function getAllTracks() : Track[] {
    return tracks;
}