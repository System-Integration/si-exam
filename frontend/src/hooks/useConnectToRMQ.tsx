import { connect, MqttClient } from "mqtt";
import React, { useEffect } from "react";

export default (): MqttClient => {
  const client = connect("/socket", {
    protocol: "ws",
    clientId: "Client"
  });
  useEffect(() => {
    client.on("connect", function() {
      client.subscribe("aggregator");
      client.subscribe("result");
    });

    client.on("message", (topic, message) => {
      if (topic === "result") {
      }
      console.log(topic);
      console.log(message.toString());
    });

    return () => {
      client.end();
    };
  }, []);

  return client;
};
