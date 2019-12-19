import { connect, MqttClient } from "mqtt";
import React from "react";
import { useDispatch } from "react-redux";
import { addToPurchaseHistory } from "../redux/slices/purchaseHistorySlice";

export default (): MqttClient => {
  const dispatch = useDispatch();

  const client = connect("/mom-socket/ws", {
    protocol: "ws",
    clientId: "Client"
  });

  React.useEffect(() => {
    client.on("connect", function() {
      client.subscribe("history");
    });

    client.on("message", (topic, message) => {
      console.log(message.toString());
      dispatch(addToPurchaseHistory(message.toString()));
    });

    return () => {
      client.end();
    };
  });

  return client;
};
