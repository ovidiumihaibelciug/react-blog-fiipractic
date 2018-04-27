import gql from "graphql-tag";

export const GET_POSTS = gql`
  {
    posts {
      _id
      title
      description
      user {
        _id
        firstname
        lastname
      }
    }
  }
`;
