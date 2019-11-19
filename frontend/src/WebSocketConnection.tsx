import { connect, IClientOptions } from "mqtt";
import React, { useEffect } from "react";
import { Computer } from "./interfaces/types";

interface Props {
  event: string;
  channel: string;
  message: string;
}

export const useWebSocketConnection = (
  event: string,
  channel: string,
  message: string,
  listener: string,
  toggle: boolean,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  useEffect(() => {
    const client = connect("/socket", {
      protocol: "ws",
      clientId: "Client"
    });

    if (toggle) {
      //eg: 'connect'
      client.on(event, function() {
        client.subscribe(channel, function(err) {
          if (!err) {
            client.publish(channel, message);
            setToggle(false);
          }
        });
      });
    }

    client.on("message", (queue, msg) => {
      if (queue === listener) console.log(msg.toString());
    });

    return () => {
      client.end();
    };
  }, [toggle]);
};
