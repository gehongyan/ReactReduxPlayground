import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Link } from 'react-router-dom';
import { ApplicationState } from "../store";
import * as PaymentStore from '../store/Payment';
import { useState } from "react";

type PaymentProps =
    PaymentStore.PaymentState
    & typeof PaymentStore.actionCreators
    & RouteComponentProps<{ id: string }>;

const Payment: React.FC<PaymentProps> = (props) => {

    const [id, setId] = useState(props.match.params.id || "");

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
            <Link className="btn btn-primary" to={`/payment/${id}`}>
                Submit
            </Link>
        </>
    );
};

export default connect(
    (state: ApplicationState) => state.payment,
    PaymentStore.actionCreators
)(Payment as any);
