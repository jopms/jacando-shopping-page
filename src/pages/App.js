import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ProductItemCollection from "../components/ProductItemCollection";
import Header from "../components/Header";
import Categories from "../components/Sidebar";
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.forEach(({ message }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://jolly-hare-long-johns.cyclic.app/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

/* Handles Routing */
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className="main">
          <Categories />
          <Routes>
            <Route path="/" exact element={<Navigate to="/vegetables" />} />
            <Route
              path="vegetables"
              element={<ProductItemCollection category={"vegetables"} />}
            />
            <Route
              path="fruits"
              element={<ProductItemCollection category={"fruits"} />}
            />
            <Route
              path="cheese"
              element={<ProductItemCollection category={"cheese"} />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
