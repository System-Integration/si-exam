// @ts-ignore
import { Computer, Monitor, OrderReponse, AjaxResponse } from "../global-types";
import { Answers } from "../redux/slices/drawerSlice";

class FetchFacade {
  postOrder = (
    computers: Computer[],
    monitors: Monitor[]
  ): Promise<OrderReponse> =>
    fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ computers, monitors })
    }).then(res => res.json());

  postFeedback = (answers: Answers): Promise<AjaxResponse> =>
    fetch("/api/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(answers)
    }).then(res => res.json());
  getAllComputers = (): Promise<Computer[]> =>
    fetch("/api/computers").then(res => res.json());

  getAllMonitors = (): Promise<Monitor[]> =>
    fetch("/api/monitors").then(res => res.json());
}

export default new FetchFacade();
