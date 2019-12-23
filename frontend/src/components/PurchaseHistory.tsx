import React from "react";
import { List, Typography } from "antd";

interface Props {
  messages: string[];
}

export const PurchaseHistory: React.FC<Props> = ({ messages }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3 style={{ margin: 8, textAlign: "center" }}>Purchase History</h3>
      <List
        header={<div>Orders</div>}
        footer={
          messages.length !== 0 && (
            <div>{messages[messages.length - 1].split("|")[1]}</div>
          )
        }
        bordered
        dataSource={messages}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ORDER]</Typography.Text> Order has been
            created with id of: {item.split("|")[0]}
          </List.Item>
        )}
      />
    </div>
  );
};
