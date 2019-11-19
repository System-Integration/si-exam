import React from "react";
import FetchFacade from "../FetchFacade";
import { Computer, Monitor } from "../interfaces/types";
import { useWebSocketConnection } from "../WebSocketConnection";

interface Props {}

export const ComputerPage: React.FC<Props> = () => {
  const [computers, setComputers] = React.useState<Computer[]>([]);
  const [monitors, setMonitors] = React.useState<Monitor[]>([]);
  const [computerList, setComputerList] = React.useState<Computer[]>([]);
  const [monitorList, setMonitorList] = React.useState<Monitor[]>([]);
  const [toggle, setToggle] = React.useState(false);

  useWebSocketConnection(
    "connect",
    "aggregator",
    JSON.stringify({ computers: computerList, monitors: monitorList }),
    "aggregatorResult",
    toggle
  );
  React.useEffect(() => {
    const fetchComputers = () => FetchFacade.getAllComputers();

    const fetchMonitors = () => FetchFacade.getAllMonitors();
    fetchComputers().then(computers => setComputers(computers));
    fetchMonitors().then(monitors => setMonitors(monitors));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {computers.length !== 0 && monitors.length !== 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
                <th>Cpu</th>
                <th>Ram</th>
                <th>Gpu</th>
                <th>Hard drive</th>
                <th>Computer type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {computers.map(computer => (
                <tr>
                  <td>
                    <input
                      type="submit"
                      value="Select"
                      onClick={() =>
                        setComputerList(state => {
                          return [...state, computer];
                        })
                      }
                    />
                  </td>
                  <td>{computer.id}</td>
                  <td>{computer.computerName}</td>
                  <td>{computer.cpu}</td>
                  <td>{computer.ram}</td>
                  <td>{computer.gpu}</td>
                  <td>{computer.hardDrive}</td>
                  <td>{computer.computerType}</td>
                  <td>{computer.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
                <th>Resolution</th>
                <th>Aspect ratio</th>
                <th>Screen size</th>
                <th>Response time</th>
                <th>Refresh rate</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {monitors.map(monitor => (
                <tr>
                  <td>
                    <input
                      type="submit"
                      value="Select"
                      onClick={() =>
                        setMonitorList(state => {
                          return [...state, monitor];
                        })
                      }
                    />
                  </td>
                  <td>{monitor.id}</td>
                  <td>{monitor.monitorName}</td>
                  <td>{monitor.resolution}</td>
                  <td>{monitor.aspectRatio}</td>
                  <td>{monitor.screenSize}</td>
                  <td>{monitor.responseTime}</td>
                  <td>{monitor.refreshRate}</td>
                  <td>{monitor.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      <div style={{ margin: "auto" }}>
        {computerList.length !== 0 && <h3>Selected computers: </h3>}
        <ul>
          {computerList.map((computer: any, index: any) => (
            <li
              onClick={() =>
                setComputerList(state => {
                  return state.filter((ele, ix) => ix !== index);
                })
              }
            >
              {computer.computerName}
            </li>
          ))}
        </ul>
        {monitorList.length !== 0 && <h3>Selected monitors: </h3>}
        <ul>
          {monitorList.map((monitor: any, index: any) => (
            <li
              onClick={() =>
                setMonitorList(state => {
                  return state.filter((ele, ix) => ix !== index);
                })
              }
            >
              {monitor.monitorName}
            </li>
          ))}
        </ul>
        <input
          type="submit"
          value="Create order"
          onClick={() => setToggle(true)}
        />
      </div>
    </div>
  );
};
