import { gql } from "@apollo/client";

export const CREATE_ITEM = gql`
  mutation createItem(
    $description: String!
    $category: String!
    $amount: Int!
    $price: Int
  ) {
    createItem(
      description: $description
      category: $category
      amount: $amount
      price: $price
    ) {
      id
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation updateItem($id: ID, $amount: Int) {
    updateItem(id: $id, item: { amount: $amount }) {
      id
    }
  }
`;

export const CREATER_ORDER = gql`
  mutation createOrder($items: [String]!) {
    createOrder(order: { items: $items }) {
      id
    }
  }
`;
