import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
  query items($category: String!, $limit: Int!, $index: Int!) {
    items(category: $category, limit: $limit, index: $index) {
      amount
      id
      title
      category
      description
      price
      amount
      currency
      unit
    }
  }
`;

export const GET_ITEMS_AMOUNT = gql`
  query itemsAmount($category: String!) {
    itemsAmount(category: $category) {
      count
      category
    }
  }
`;
