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
      createdAt
      user {
        _id
        firstname
        lastname
      }
      category {
        _id
        name
      }
      tags {
        _id
        name
      }
    }
  }
`;

export const GET_ALL_TAGS = gql`
  query($filters: JSON, $options: JSON) {
    tags(filters: $filters, options: $options) {
      _id
      name
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query($filters: JSON, $options: JSON) {
    postCategories(filters: $filters, options: $options) {
      _id
      name
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query($filters: JSON, $options: JSON) {
    posts(filters: $filters, options: $options) {
      _id
      title
      description
      createdAt
      categoryId
      tagIds
      comments {
        _id
        text
        createdAt
        user {
          _id
          firstname
          lastname
          email
        }
      }
      user {
        _id
        firstname
        lastname
        email
      }
      tags {
        _id
        name
      }
      category {
        _id
        name
      }
    }
  }
`;

export const GET_GROUPS = {};

export const GET_USER_BY_ID = gql`
  query($filters: JSON, $options: JSON) {
    users(filters: $filters, options: $options) {
      _id
      username
      firstname
      lastname
      email
      createdAt
      posts {
        _id
        title
        description
        createdAt
        user {
          _id
          firstname
          lastname
          email
        }
        tags {
          _id
          name
        }
        category {
          _id
          name
        }
      }
      groups {
        _id
        name
      }
    }
  }
`;
