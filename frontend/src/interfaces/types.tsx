export interface Monitor {
  id: number;
  monitorName: string;
  resolution: string;
  aspectRatio: string;
  screenSize: string;
  responseTime: string;
  refreshRate: string;
  price: number;
}

export interface Computer {
  id: number;
  computerName: string;
  cpu: string;
  ram: string;
  gpu: string;
  hardDrive: string;
  computerType: string;
  price: number;
}
