import express from 'express'
import { getTrack, getTracksFromArtist } from '../models/data';
import { isString, isNumber } from '../utils/utils';

export const trackRouter = express.Router();

trackRouter.get('/:id', (req, res, next) => {
    const trackId =  Number(req.params.id);
    if (isNumber(trackId) && !isNaN(trackId)) {
        res.send(getTrack(trackId));
    }
    else {
        throw new Error('trackId must be a number');
    }
});

trackRouter.get('/',  (req, res, next) => {
    const artist = req.query.artist;
    if (isString(artist) && artist !== '') {
        res.send(getTracksFromArtist(artist));
    }
    else {
        throw new Error('artist query must be a single string');
    }
});

