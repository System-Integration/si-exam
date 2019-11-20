import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { addItemToCart } from "../redux/slices/cartSlice";
import { Table, Button } from "antd";

interface Props {}

const Shop: React.FC<Props> = () => {
  const { computers, monitors } = useSelector(
    (state: RootState) => state.items
  );
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "auto" }}>
      <Table
        dataSource={computers.map(computer => {
          return { ...computer, key: computer.computerName };
        })}
        columns={[
          {
            title: "",
            key: "action",
            render: (_, record) => {
              const { key, ...computer } = record;
              return (
                <Button
                  onClick={() =>
                    dispatch(
                      addItemToCart({
                        id: "computers",
                        content: computer
                      })
                    )
                  }
                >
                  Select
                </Button>
              );
            }
          },
          { title: "Name", dataIndex: "computerName", key: "name" },
          { title: "Cpu", dataIndex: "cpu", key: "cpu" },
          { title: "Gpu", dataIndex: "gpu", key: "gpu" },
          { title: "Price", dataIndex: "price", key: "price" }
        ]}
      />
      <Table
        dataSource={monitors.map(monitor => {
          return { ...monitor, key: monitor.monitorName };
        })}
        columns={[
          {
            title: "",
            key: "action",
            render: (_, record) => {
              const { key, ...monitor } = record;
              return (
                <Button
                  onClick={() =>
                    dispatch(
                      addItemToCart({
                        id: "monitors",
                        content: monitor
                      })
                    )
                  }
                >
                  Select
                </Button>
              );
            }
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
