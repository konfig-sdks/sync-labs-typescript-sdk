/*
Synchronize API

Synchronize API allows you to lipsync a video to any audio in any language.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface AnimateExtended
 */
export interface AnimateExtended {
    /**
     * A unique identifier for the video.
     * @type {string}
     * @memberof AnimateExtended
     */
    'id': string;
    /**
     * A URL which can be used to download the audio.
     * @type {string}
     * @memberof AnimateExtended
     */
    'video_url'?: string;
    /**
     * A URL which can be used to download the audio.
     * @type {string}
     * @memberof AnimateExtended
     */
    'audio_url'?: string;
    /**
     * A URL to a file containing the input transcript.
     * @type {string}
     * @memberof AnimateExtended
     */
    'transcript_url': string;
    /**
     * The status of the audio.
     * @type {string}
     * @memberof AnimateExtended
     */
    'status': string;
    /**
     * The number of credits deducted for the audio.
     * @type {number}
     * @memberof AnimateExtended
     */
    'credits_deducted': number;
}

