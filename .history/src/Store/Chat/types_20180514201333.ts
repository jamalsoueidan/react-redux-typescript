import { Action } from 'redux';

export interface IMessage {
    message: string,
    id: number
}
export interface IMessages {
    messages: IMessage[]
    status: string
}

export const SEND_MESSSAGE = '@@chat/SendMessage';
export type SEND_MESSSAGE = typeof SEND_MESSSAGE;

export interface ISendMessageAction extends Action {
    type: SEND_MESSSAGE,
    payload: {
        message: IMessage;
    };
}


export const LOAD_MESSAGE_SUCCESS = '@@chat/LoadMessagesAction/Success';
export type LOAD_MESSAGE_SUCCESS = typeof LOAD_MESSAGE_SUCCESS;

export interface ILoadMessagesSuccessAction extends Action {
    type: LOAD_MESSAGE_SUCCESS
}

export type ChatActions = ISendMessageAction | ILoadMessagesSuccessAction