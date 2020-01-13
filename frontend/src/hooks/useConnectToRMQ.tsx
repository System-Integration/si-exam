import { connect } from "mqtt";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../redux/slices/messagesSlice";
export default () => {
  const dispatch = useDispatch();
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
        dispatch(addMessage(purchaseMessage));
      setPurchaseHistory(old => [...old, purchaseMessage]);
    });

    return () => {
      client.end();
    };
  });
};
