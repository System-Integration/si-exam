import { connect, MqttClient } from "mqtt";
import React, { useEffect } from "react";

export default (): MqttClient => {
  const client = connect("/mqttsocket", {
    protocol: "ws",
    clientId: "Client"
  });
  useEffect(() => {
    client.on("connect", function() {
      client.subscribe("admin-dashboard");
    });

    client.on("message", (topic, message) => {});

    return () => {
      client.end();
    };
  }, []);

  return client;
};
