import React from "react";
import { Button } from "antd";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { CustomerDocument } from "../CustomerDocument";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";

interface Props {}

export const PDFDownloadButton: React.FC<Props> = () => {
  const { computers, monitors } = useSelector((state: RootState) => state.cart);
  return (
    <Button key="download">
      <PDFDownloadLink
        document={
          <CustomerDocument computers={computers} monitors={monitors} />
        }
        fileName="receipt.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download receipt as pdf"
        }
      </PDFDownloadLink>
    </Button>
  );
};
