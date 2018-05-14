import { Action } from 'redux';

export interface IMessage {
    message: string
}
export interface IMessages<Array> {
    messages: IMessage[]
}

export interface ISendMessageAction extends Action {
    type: '@@chat/SendMessageAction',
    payload: {
        message: IMessage;
    };
}

export interface ILoadMessagesSuccessAction extends Action {
    type: '@@chat/LoadMessagesAction/Success'
}

export type ChatActions = ISendMessageAction | ILoadMessagesSuccessAction