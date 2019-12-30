/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.18.565 on 2019-12-30 03:19:11.

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

export interface Feedback {
    id: number;
    answer1: number;
    answer2: number;
    answer3: number;
    answer4: number;
    answer5: number;
}

export interface Order {
    id: number;
    computers: Computer[];
    monitors: Monitor[];
    createdDate: Date;
}

export interface AjaxResponse {
    status: boolean;
    message: string;
}

export interface OrderResponse extends AjaxResponse {
    resultId: number;
}
