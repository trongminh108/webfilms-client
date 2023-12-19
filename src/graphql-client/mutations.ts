import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
    mutation LoginMutation($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            access_token
            user {
                username
                gmail
                role
            }
        }
    }
`;
