export var typeDefs: {};
/**
 * JSON-parsed Object from socket client
 */
export type socketMsgData = {
    message?: string;
    meta?: string;
    room: string;
};
/**
 * Example of using nested object
 */
export type nestedExample = {
    message: string;
    meta: {
        text: string;
        callback: Function;
    };
    room: string;
};
export type broadCastMessage = (room: string, message: string) => any;
export type handleRoom = (room: string) => any;
export type leaveSocket = (room: string) => any;
/**
 * Type of exchange data between client - server
 */
export type exchangeData = string;
