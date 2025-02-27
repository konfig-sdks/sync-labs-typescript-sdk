/* tslint:disable */
/* eslint-disable */
/*
Synchronize API

Synchronize API allows you to lipsync a video to any audio in any language.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { TranslateDto } from '../models';
// @ts-ignore
import { TranslationJobExtended } from '../models';
// @ts-ignore
import { TranslationJobInitial } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TranslateApi - axios parameter creator
 * @export
 */
export const TranslateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Use the video ID from the POST request to check video status. Keep checking until status is \'completed\' and a download URL is provided.
         * @summary 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTranslation: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTranslation', 'id', id)
            const localVarPath = `/translate/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apiKey", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/translate/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Translates and synchronizes the given video to the specified target language.
         * @summary 
         * @param {TranslateDto} translateDto Required data for translating and synchronizing video. Includes video URL, target language, and optional parameters for model selection, webhook integration, and credit limits.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        translate: async (translateDto: TranslateDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'translateDto' is not null or undefined
            assertParamExists('translate', 'translateDto', translateDto)
            const localVarPath = `/translate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apiKey", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: translateDto,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/translate',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(translateDto, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} videoUrl A url to the video file to be synchronized -- must be publicly accessible
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        translationCost: async (videoUrl: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'videoUrl' is not null or undefined
            assertParamExists('translationCost', 'videoUrl', videoUrl)
            const localVarPath = `/translate/cost`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apiKey", configuration })
            if (videoUrl !== undefined) {
                localVarQueryParameter['videoUrl'] = videoUrl;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/translate/cost',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TranslateApi - functional programming interface
 * @export
 */
export const TranslateApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TranslateApiAxiosParamCreator(configuration)
    return {
        /**
         * Use the video ID from the POST request to check video status. Keep checking until status is \'completed\' and a download URL is provided.
         * @summary 
         * @param {TranslateApiGetTranslationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTranslation(requestParameters: TranslateApiGetTranslationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TranslationJobExtended>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTranslation(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Translates and synchronizes the given video to the specified target language.
         * @summary 
         * @param {TranslateApiTranslateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async translate(requestParameters: TranslateApiTranslateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TranslationJobInitial>> {
            const translateDto: TranslateDto = {
                videoUrl: requestParameters.videoUrl,
                targetLanguage: requestParameters.targetLanguage,
                maxCredits: requestParameters.maxCredits,
                webhookUrl: requestParameters.webhookUrl,
                model: requestParameters.model
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.translate(translateDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {TranslateApiTranslationCostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async translationCost(requestParameters: TranslateApiTranslationCostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.translationCost(requestParameters.videoUrl, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TranslateApi - factory interface
 * @export
 */
export const TranslateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TranslateApiFp(configuration)
    return {
        /**
         * Use the video ID from the POST request to check video status. Keep checking until status is \'completed\' and a download URL is provided.
         * @summary 
         * @param {TranslateApiGetTranslationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTranslation(requestParameters: TranslateApiGetTranslationRequest, options?: AxiosRequestConfig): AxiosPromise<TranslationJobExtended> {
            return localVarFp.getTranslation(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Translates and synchronizes the given video to the specified target language.
         * @summary 
         * @param {TranslateApiTranslateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        translate(requestParameters: TranslateApiTranslateRequest, options?: AxiosRequestConfig): AxiosPromise<TranslationJobInitial> {
            return localVarFp.translate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {TranslateApiTranslationCostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        translationCost(requestParameters: TranslateApiTranslationCostRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.translationCost(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getTranslation operation in TranslateApi.
 * @export
 * @interface TranslateApiGetTranslationRequest
 */
export type TranslateApiGetTranslationRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof TranslateApiGetTranslation
    */
    readonly id: string
    
}

/**
 * Request parameters for translate operation in TranslateApi.
 * @export
 * @interface TranslateApiTranslateRequest
 */
export type TranslateApiTranslateRequest = {
    
} & TranslateDto

/**
 * Request parameters for translationCost operation in TranslateApi.
 * @export
 * @interface TranslateApiTranslationCostRequest
 */
export type TranslateApiTranslationCostRequest = {
    
    /**
    * A url to the video file to be synchronized -- must be publicly accessible
    * @type {string}
    * @memberof TranslateApiTranslationCost
    */
    readonly videoUrl: string
    
}

/**
 * TranslateApiGenerated - object-oriented interface
 * @export
 * @class TranslateApiGenerated
 * @extends {BaseAPI}
 */
export class TranslateApiGenerated extends BaseAPI {
    /**
     * Use the video ID from the POST request to check video status. Keep checking until status is \'completed\' and a download URL is provided.
     * @summary 
     * @param {TranslateApiGetTranslationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TranslateApiGenerated
     */
    public getTranslation(requestParameters: TranslateApiGetTranslationRequest, options?: AxiosRequestConfig) {
        return TranslateApiFp(this.configuration).getTranslation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Translates and synchronizes the given video to the specified target language.
     * @summary 
     * @param {TranslateApiTranslateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TranslateApiGenerated
     */
    public translate(requestParameters: TranslateApiTranslateRequest, options?: AxiosRequestConfig) {
        return TranslateApiFp(this.configuration).translate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TranslateApiTranslationCostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TranslateApiGenerated
     */
    public translationCost(requestParameters: TranslateApiTranslationCostRequest, options?: AxiosRequestConfig) {
        return TranslateApiFp(this.configuration).translationCost(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
