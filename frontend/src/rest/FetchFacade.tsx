// @ts-ignore
import { Computer, Monitor } from "../interfaces/types";

class FetchFacade {
  getAllComputers = (): Promise<Computer[]> =>
    fetch("/api/computers").then(res => res.json());

  getAllMonitors = (): Promise<Monitor[]> =>
    fetch("/api/monitors").then(res => res.json());
}

export default new FetchFacade();
