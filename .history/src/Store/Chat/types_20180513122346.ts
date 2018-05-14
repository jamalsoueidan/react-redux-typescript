import { Action } from 'redux';

export interface IMessage {
    message: string
}
export interface IMessages {
    messages: IMessage[]
}

export interface ISendMessageAction extends Action {
    type: '@@chat/SendMessageAction',
    payload: {
        message: IMessage;
    };
}

export interface ILoadMessagesAction extends Action {
    type: '@@chat/LoadMessagesAction'
}
  
export type ChatActions = ISendMessageAction | ILoadMessagesAction