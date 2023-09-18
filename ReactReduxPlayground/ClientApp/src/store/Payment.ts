import { AppThunkAction } from "./index";
import { Action } from "redux";

export interface PaymentState {
    id: string;
    amount?: number;
    isBusy: boolean;
    subject?: string;
}

export interface PaymentInfo {
    id: string;
    amount: number;
    subject: string;
}

interface RequestPaymentAction {
    type: 'REQUEST_PAYMENT';
    id: string;
}

interface ReceivePaymentAction {
    type: 'RECEIVE_PAYMENT';
    id: string;
    amount: number;
    subject: string;
}

type KnownAction = RequestPaymentAction | ReceivePaymentAction;

export const actionCreators = {
    requestPayment: (id: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
        const appState = getState();
        if (appState?.payment && id !== appState.payment.id) {
            fetch(`payment/${id}`)
                .then(response => response.json() as Promise<PaymentInfo>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_PAYMENT', id: data.id, amount: data.amount, subject: data.subject });
                });

            dispatch({ type: 'REQUEST_PAYMENT', id: id });
        }
    }
}

const unloadedState: PaymentState = { id: "", isBusy: false };

export const reducer = (state: PaymentState | undefined, incomingAction: Action): PaymentState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_PAYMENT':
            return {
                id: action.id,
                isBusy: true
            };
        case 'RECEIVE_PAYMENT':
            return {
                id: action.id,
                isBusy: false,
                amount: action.amount,
                subject: action.subject
            };
        default:
            return state;
    }
}
