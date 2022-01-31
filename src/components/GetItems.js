import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../graphQl/Queries";

import { updateItems } from "../features/items/itemsSlicer";
import { setTriggerGetItems } from "../features/items/itemsSlicer";

const GetItems = ({ category, pagination }) => {
  const dispatch = useDispatch();
  const triggerGetItems = useSelector((state) => state.items.triggerGetItems);

  const { error, loading, data, refetch } = useQuery(
    GET_ITEMS,
    {
      skip: false,
      variables: { category, limit: 5, index: pagination },
    },

    {
      onCompleted: () => {
        dispatch(triggerGetItems(false));
      },
    }
  );

  useEffect(() => {
    loading && console.log("LOADING GET ITEMS!");
  }, [loading]);

  useEffect(() => {
    error && window.alert("Error! Could not get items!");
  }, [error]);

  useEffect(() => {
    if (data) {
      if (data.items.length === 5) {
        dispatch(updateItems(data.items));
      } else {
        console.log(data.items);
        const missingItems = 5 - data.items.length;
        const items = [...data.items];
        for (let i = 0; i < missingItems; i++) {
          items.push({});
        }
        dispatch(updateItems(items));
      }
    }
  }, [data]);

  useEffect(() => {
    triggerGetItems && refetch();
    dispatch(setTriggerGetItems(false));
  }, [triggerGetItems]);

  return <></>;
};

export default GetItems;
