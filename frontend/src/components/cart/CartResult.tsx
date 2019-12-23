import React from "react";
import { Result, Button } from "antd";
import { useDispatch } from "react-redux";
import { PDFDownloadButton } from "./PDFDownloadButton";
import { ResponseState, initialResponseState } from "./Cart";
import { removeAllItems } from "../../redux/slices/cartSlice";

interface Props {
  setResponse: React.Dispatch<React.SetStateAction<ResponseState>>;
  response: ResponseState;
}

export const CartResult: React.FC<Props> = ({ setResponse, response }) => {
  const dispatch = useDispatch();
  return (
    <Result
      status="success"
      title={response.message}
      subTitle={`Order number: ${response.resultId}.`}
      extra={[
        <PDFDownloadButton />,
        <Button
          key="ok"
          type="primary"
          onClick={() => {
            dispatch(removeAllItems());
            setResponse(initialResponseState);
          }}
        >
          Ok
        </Button>
      ]}
    />
  );
};
