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
 * @interface LipsyncDto
 */
export interface LipsyncDto {
    /**
     * A url to the audio file to be synchronized -- must be publicly accessible
     * @type {string}
     * @memberof LipsyncDto
     */
    'audioUrl': string;
    /**
     * A url to the video file to be synchronized -- must be publicly accessible
     * @type {string}
     * @memberof LipsyncDto
     */
    'videoUrl': string;
    /**
     * A flag to enable / disable post-processing
     * @type {boolean}
     * @memberof LipsyncDto
     */
    'synergize': boolean;
    /**
     * Maximum number of credits to use for video generation. If job exceeds this value, the job will be aborted
     * @type {number}
     * @memberof LipsyncDto
     */
    'maxCredits'?: number;
    /**
     * A url to send a notification to upon completion of video generation
     * @type {string}
     * @memberof LipsyncDto
     */
    'webhookUrl'?: string;
    /**
     * The model to use for video generation
     * @type {string}
     * @memberof LipsyncDto
     */
    'model'?: string;
}

