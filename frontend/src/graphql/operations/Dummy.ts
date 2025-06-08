import { gql } from '@apollo/client';

// DUMMY_MUTATION helps ensure React Hooks are called in the correct order → no SonarQube warnings
// Check uploadFileMutation and deleteFileMutation when used → don't crash backend when not transmitting
export const DUMMY_MUTATION = gql`
  mutation DummyMutation {
    dummyMutation
  }
`;