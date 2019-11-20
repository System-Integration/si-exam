import React from "react";
import { Modal, Button } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<boolean>;
}

const CustomModal: React.FC<Props> = ({ toggle, setToggle }) => {
  const { computers, monitors } = useSelector((state: RootState) => state.cart);

  const createCsvFormat = <T extends any>(items: T[]) => {
    const result = items
      .map(item =>
        Object.values(item).reduce((prev, curr, index) => {
          if (index === 1) {
            return prev + ",";
          }
          return (prev += curr + ",");
        })
      )
      .map(itemSpecs => itemSpecs.slice(0, -1));
    return result;
  };

  return (
    <Modal
      visible={toggle}
      title="Receipt"
      onCancel={() => setToggle(false)}
      footer={[
        <Button
          key="download"
          onClick={() => {
            const computerCsv = createCsvFormat(computers);
            const monitorCsv = createCsvFormat(monitors);
            const csvComputer =
              "data:text/csv;charset=utf-8," +
              "ID,CPU,RAM,GPU,HDD,TYPE,PRICE\r\n" +
              computerCsv.join("\r\n");
            const csvMonitor =
              "data:text/csv;charset=utf-8," +
              "ID,RESOLUTION,ASPECT RATIO,SCREEN SIZE,RESPONSE TIME,REFRESH RATE,PRICE\r\n" +
              monitorCsv.join("\r\n");
            window.open(encodeURI(csvComputer));
            window.open(encodeURI(csvMonitor));
          }}
        >
          Download
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
