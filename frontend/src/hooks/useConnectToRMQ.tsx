import { connect } from "mqtt";
import React, { useEffect } from "react";

export default (
  channel: string,
  returnChannel: string,
  message: string,
  toggle: boolean,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  useEffect(() => {
    const client = connect("/socket", {
      protocol: "ws",
      clientId: "Client"
    });

    if (toggle) {
      client.on("connect", function() {
        client.subscribe(channel, function(err) {
          if (!err) {
            client.publish(channel, message);
            setToggle(false);
          }
        });
      });
    }

    client.on("message", (queue, msg) => {
      if (queue === returnChannel) console.log(msg.toString());
    });

    return () => {
      client.end();
    };
  }, [toggle, channel, message, returnChannel, setToggle]);
};
