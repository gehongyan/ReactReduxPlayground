import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { ApplicationState } from "../store";
import * as PaymentStore from '../store/Payment';
import { useEffect, useState } from "react";

type PaymentProps =
    PaymentStore.PaymentState
    & typeof PaymentStore.actionCreators
    & RouteComponentProps<{ id: string }>;

const Payment: React.FC<PaymentProps> = (props) => {

    const [id, setId] = useState(props.match.params.id || "");

    const handleClick = async () => {
        props.requestPayment(id);
    };

    useEffect(() => {
        handleClick();
    }, []);

    return (
        <>
            <h3>Payment info</h3>
            <input
                type="text"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <p>Amount: {props.amount}</p>
            <button className="btn btn-primary" onClick={handleClick}>Submit</button>
        </>
    );
};

export default connect(
    (state: ApplicationState) => state.payment,
    PaymentStore.actionCreators
)(Payment as any);
