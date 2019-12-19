import React from "react";
import { List, Typography, Row } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import useConnectToRMQ from "../hooks/useConnectToRMQ";

interface Props {}

export const PurchaseHistory: React.FC<Props> = () => {
  const messages = useSelector((state: RootState) => state.purchaseHistory);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3 style={{ margin: 8, textAlign: "center" }}>Purchase History</h3>
      <List
        header={<div>Orders</div>}
        footer={<div>Latest Purchase...</div>}
        bordered
        dataSource={messages}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ORDER]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};
