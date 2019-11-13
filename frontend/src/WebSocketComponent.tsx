import { connect } from "mqtt";
import React, { useEffect } from "react";
interface Props {}

export const WebSocketComponent: React.FC<Props> = () => {
  useEffect(() => {
    const client = connect("ws://localhost:15675/ws");
    client.on("connect", function() {
      client.subscribe("dasdsadsa", function(err) {
        if (!err) {
          client.publish("dasdsadsa", "Hello mqtt");
          client.publish("presence", "Hello mqtt");
          client.publish("presence", "Hello mqtt");
          client.publish("presence", "Hello mqtt");
        }
      });
    });

    client.on("message", (queue, msg) => {
      console.log(msg.toString());
    });
  });
  return <div>hi</div>;
};
