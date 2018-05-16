import { Action } from 'redux';

export interface IMessage {
    message: string,
    id: number
}
export interface IMessages {
    messages: IMessage[]
    status: string
}

export const LOAD_MESSAGE_REQUEST = '@@chat/LoadMessagesAction/Request';
export type LOAD_MESSAGE_REQUEST = typeof LOAD_MESSAGE_REQUEST;

export const LOAD_MESSAGE_SUCCESS = '@@chat/LoadMessagesAction/Success';
export type LOAD_MESSAGE_SUCCESS = typeof LOAD_MESSAGE_SUCCESS;

export const LOAD_MESSAGE_FAILURE = '@@chat/LoadMessagesAction/Failure';
export type LOAD_MESSAGE_FAILURE = typeof LOAD_MESSAGE_FAILURE;

export interface ILoadMessagesSuccessAction extends Action {
    type: LOAD_MESSAGE_SUCCESS, 
    payload: IMessage[]
}

export type ChatActions = ILoadMessagesSuccessAction