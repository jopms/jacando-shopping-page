import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

/**
 * Spinner component to use while fetching querys
 */
const Spinner = ({ loading }) => {
  const override = css`
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-width: 5px;
  `;
  return (
    <ClipLoader css={override} color={"#ffc244"} loading={loading} size={70} />
  );
};

export default Spinner;
