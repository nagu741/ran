import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { dispatchers } from '../AuthFields/index.data';
import createUserGql from '../../gql/createUser.gql';

function createUserWrapper(AuthForm) {
  const createUserWithData = graphql(createUserGql, {
    props: ({ mutate }) => ({
      createUser: ({ firstName, lastName, email, password }) =>
        mutate({
          variables: { firstName, lastName, email, password }
        })
    })
  })(AuthForm);

  const mapDispatchToProps = dispatch => ({
    signIn(token) {
      dispatch(dispatchers.signIn(token));
    }
  });

  const createUserWithDataAndDispatch = connect(null, mapDispatchToProps)(
    createUserWithData
  );

  return createUserWithDataAndDispatch;
}

export default createUserWrapper;
