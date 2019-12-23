import React from "react";
import { Modal, Button } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { CustomerDocument } from "./CustomerDocument";

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<boolean>;
}

const CustomModal: React.FC<Props> = ({ toggle, setToggle }) => {
  const { computers, monitors } = useSelector((state: RootState) => state.cart);

  return (
    <Modal
      visible={toggle}
      title="Receipt"
      onCancel={() => setToggle(false)}
      footer={[
        <Button key="download">
          <PDFDownloadLink
            document={
              <CustomerDocument computers={computers} monitors={monitors} />
            }
            fileName="receipt.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download as pdf"
            }
          </PDFDownloadLink>
        </Button>,
        <Button key="ok" type="primary" onClick={() => setToggle(false)}>
          Ok
        </Button>
      ]}
    >
      <h3>Computers:</h3>
      {computers.map(computer => (
        <p>
          {computer.computerName}, {computer.cpu}, {computer.gpu},
          {computer.price}
        </p>
      ))}
      <h3>Monitors:</h3>
      {monitors.map(monitor => (
        <p>
          {monitor.monitorName}, {monitor.screenSize}, {monitor.resolution},
          {monitor.price}
        </p>
      ))}
    </Modal>
  );
};

export default CustomModal;
