import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../graphQl/Queries";

import { updateItems } from "../features/items/itemsSlicer";
import { setTriggerGetItems } from "../features/items/itemsSlicer";
import Spinner from "./Spinner";

const GetItems = ({ category, pagination }) => {
  const dispatch = useDispatch();
  const triggerGetItems = useSelector((state) => state.items.triggerGetItems);

  const { error, loading, data, refetch } = useQuery(
    GET_ITEMS,
    {
      skip: false,
      variables: { category, limit: 5, index: pagination },
      fetchPolicy: "network-only",
    },

    {
      onCompleted: () => {
        dispatch(triggerGetItems(false));
      },
    }
  );

  useEffect(() => {
    error && window.alert("Error! Could not get items!");
  }, [error]);

  useEffect(() => {
    if (data) {
      if (data.items.length === 5) {
        dispatch(updateItems(data.items));
      } else {
        if (data.items.length > 0) {
          const missingItems = 5 - data.items.length;
          const items = [...data.items];
          for (let i = 0; i < missingItems; i++) {
            items.push({});
          }
          dispatch(updateItems(items));
        } else {
          dispatch(updateItems([])); //User buys last item of current page
        }
      }
    }
  }, [data, dispatch]);

  useEffect(() => {
    triggerGetItems && refetch();
    dispatch(setTriggerGetItems(false));
  }, [triggerGetItems, dispatch, refetch]);

  return <Spinner loading={loading} />;
};

export default GetItems;
