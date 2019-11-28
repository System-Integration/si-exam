import { connect, MqttClient } from "mqtt";
import React from "react";

export default (): MqttClient => {
  const client = connect("/mom-socket/ws", {
    protocol: "ws",
    clientId: "Client"
  });
  React.useEffect(() => {
    client.on("connect", function() {
      client.subscribe("admin-dashboard");
    });

    client.on("message", (topic, message) => {});

    return () => {
      client.end();
    };
  });

  return client;
};
