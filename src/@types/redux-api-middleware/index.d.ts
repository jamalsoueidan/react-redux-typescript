declare module 'redux-api-middleware' {
    //https://github.com/reduxjs/redux-thunk/blob/master/index.d.ts
    import { Middleware, Action } from "redux";

    export const RSAA: string;
    export const apiMiddleware: Middleware;

    export type HTTPVerb = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';

    export interface RSAAction<R, S, F> {
        [propName: string]: { // Symbol as object key seems impossible
            endpoint: string;  // or function
            method: HTTPVerb;
            body?: any;
            headers?: { [propName: string]: string }; // or function
            credentials?: 'omit' | 'same-origin' | 'include';
            bailout?: boolean; // or function
            types: [R, S, F];
        }
    }
}