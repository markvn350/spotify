export interface TrackModel {
    _id: number,
    name : string,
    album: string,
    cover: string,
    artist?: string,
    duration: number,
    url: string
}