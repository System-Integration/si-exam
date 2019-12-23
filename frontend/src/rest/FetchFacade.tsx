// @ts-ignore
import { Computer, Monitor, OrderReponse } from "../interfaces/types";

class FetchFacade {
  postOrder = (
    computers: Computer[],
    monitors: Monitor[]
  ): Promise<OrderReponse> =>
    fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ computers, monitors })
    }).then(res => res.json());
  getAllComputers = (): Promise<Computer[]> =>
    fetch("/api/computers").then(res => res.json());

  getAllMonitors = (): Promise<Monitor[]> =>
    fetch("/api/monitors").then(res => res.json());
}

export default new FetchFacade();
