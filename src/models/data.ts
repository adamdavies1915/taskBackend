import {Track} from "../types/Track"

export function getTracksFromArtist(artist: String) : Track[] {
    return [{
        "artist": "Foo",
        "title": "bar",
        "id": 2
    }]; 
}

export function getTrack(trackId: String): Track {
    return {
        "artist": "Foo",
        "title": "bar",
        "id": 2
    }
}