import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFlashMessage } from '../actions/flashMessages';

export default function (ComposedComponent) {
  const { isAuthenticated } = this.props;
  const { router } = this.context;
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!isAuthenticated) {
        router.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page',
        });
        router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        router.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
  };
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    };
  }

  return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}
