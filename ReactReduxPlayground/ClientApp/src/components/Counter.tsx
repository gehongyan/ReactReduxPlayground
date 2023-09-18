import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as CounterStore from '../store/Counter';

type CounterProps =
    CounterStore.CounterState &
    typeof CounterStore.actionCreators &
    RouteComponentProps<{}>;

const Counter: React.FC<CounterProps> = (props) => {
    return (
        <>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p aria-live="polite">Current count: <strong>{props.count}</strong></p>

            <button type="button"
                className="btn btn-primary btn-lg"
                onClick={() => { props.increment(); }}>
                Increment
            </button>
        </>
    );
}

export default connect(
    (state: ApplicationState) => state.counter,
    CounterStore.actionCreators
)(Counter);
