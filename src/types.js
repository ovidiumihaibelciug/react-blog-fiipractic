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

export const GET_POSTS_PAGINATE = gql`
  query($filters: JSON, $options: JSON) {
    posts(filters: $filters, options: $options) {
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
