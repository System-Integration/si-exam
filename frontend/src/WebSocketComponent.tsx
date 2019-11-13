import { connect, IClientOptions } from "mqtt";
import React, { useEffect } from "react";
interface Props {}
export const WebSocketComponent: React.FC<Props> = () => {
  useEffect(() => {
    const client = connect("/socket", {
      protocol: "ws",
      clientId: "Client"
    });
    client.on("connect", function() {
      client.subscribe("test", function(err) {
        if (!err) {
          client.publish("test", "Hello mqtt");
        }
      });
    });

    client.on("message", (queue, msg) => {
      console.log(msg.toString());
    });
  });
  return <div>hi</div>;
};
