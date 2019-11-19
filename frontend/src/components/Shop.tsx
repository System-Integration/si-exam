import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { addItemToCart } from "../redux/slices/cartSlice";
import { Col, Table } from "antd";

interface Props {}

const Shop: React.FC<Props> = () => {
  const { computers, monitors } = useSelector(
    (state: RootState) => state.items
  );
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "auto" }}>
      <Table
        dataSource={computers}
        columns={[
          {
            title: "",
            key: "action",
            render: (text, record) => (
              <a
                onClick={() =>
                  dispatch(addItemToCart({ id: "computers", content: record }))
                }
              >
                Select
              </a>
            )
          },
          { title: "Name", dataIndex: "computerName", key: "name" },
          { title: "Cpu", dataIndex: "cpu", key: "cpu" },
          { title: "Gpu", dataIndex: "gpu", key: "gpu" },
          { title: "Price", dataIndex: "price", key: "price" }
        ]}
      />
      <Table
        dataSource={monitors}
        columns={[
          {
            title: "",
            key: "action",
            render: (text, record) => (
              <a
                onClick={() =>
                  dispatch(addItemToCart({ id: "monitors", content: record }))
                }
              >
                Select
              </a>
            )
          },
          { title: "Name", dataIndex: "monitorName", key: "name" },
          { title: "Screen size", dataIndex: "screenSize", key: "screenSize" },
          { title: "Resolution", dataIndex: "resolution", key: "resolution" },
          { title: "Price", dataIndex: "price", key: "price" }
        ]}
      />
    </div>
  );
};

export default Shop;
