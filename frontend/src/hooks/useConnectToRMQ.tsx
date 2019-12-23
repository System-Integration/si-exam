import { connect } from "mqtt";
import React, { useState } from "react";
export default (): string[] => {
  const [purchaseHistory, setPurchaseHistory] = useState<string[]>([]);

  const client = connect("/mom-socket/ws", {
    protocol: "ws",
    clientId: "Client"
  });

  React.useEffect(() => {
    client.on("connect", () => {
      client.subscribe("history");
    });

    client.on("message", (topic, message) => {
      const purchaseMessage = message.toString();
      if (
        purchaseHistory.filter(message => message === purchaseMessage)
          .length === 0
      )
        setPurchaseHistory(old => [...old, purchaseMessage]);
    });

    return () => {
      client.end();
    };
  });

  return purchaseHistory;
};
