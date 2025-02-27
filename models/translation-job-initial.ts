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
 * @interface TranslationJobInitial
 */
export interface TranslationJobInitial {
    /**
     * A unique identifier for the translation job.
     * @type {string}
     * @memberof TranslationJobInitial
     */
    'id': string;
    /**
     * A URL which can be used to download the video.
     * @type {string}
     * @memberof TranslationJobInitial
     */
    'video_url'?: string;
    /**
     * The original URL of the video that was submitted.
     * @type {string}
     * @memberof TranslationJobInitial
     */
    'original_video_url': string;
    /**
     * The language into which the video is being translated.
     * @type {string}
     * @memberof TranslationJobInitial
     */
    'target_language'?: string;
    /**
     * The status of the translation job.
     * @type {string}
     * @memberof TranslationJobInitial
     */
    'status': string;
    /**
     * The step of the translation job.
     * @type {string}
     * @memberof TranslationJobInitial
     */
    'step': string;
}

