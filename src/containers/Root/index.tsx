import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';

import { fetchInfo, incrementCounter } from '../../redux/app/actions';
import { ActionType, Dispatch, RootStateType } from '../../constants/types';
import LoadingSpinner from '../../components/LoadingSpinner';
import { wrapped } from '../Wrapper';

import './styles.css';

interface Props {
  counter: number;
  loading: boolean;
}

interface DispatchProps extends ActionCreatorsMapObject {
  incrementCounter(): ActionType<never>;
  fetchInfo(): ActionType<string>;
}

const mapStateToProps = (state: RootStateType, ownProps: {}) => {
  return {
    counter: state.app.counter,
    loading: state.app.loading
  };
};

const actions: DispatchProps = {
  incrementCounter,
  fetchInfo
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export class Root extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    // this.props.fetchInfo();
  }

  render() {
    return (
      <div>
        <LoadingSpinner visible={this.props.loading} />
        <h1 className="title">
          <FormattedMessage id="root.heading" />
        </h1>
        <h2>{this.props.counter}</h2>
        <button onClick={this.props.incrementCounter}>
          Increment Counter
        </button>
      </div>
    );
  }

}

export default wrapped(connect(mapStateToProps, mapDispatchToProps)(Root));
