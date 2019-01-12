import { Action, ActionCreator } from "redux";

interface IDefaultAction {
    type: string,
    payload: any
}

export default function makeAction(
    type: string
    ): ActionCreator<IDefaultAction> {
        return (payload: any) => ({
            type,
            payload
        });
}