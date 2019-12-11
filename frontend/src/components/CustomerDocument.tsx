import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";
import { Computer, Monitor } from "../interfaces/types";
interface Props {
  computers: Computer[];
  monitors: Monitor[];
}

export const CustomerDocument: React.FC<Props> = ({ computers, monitors }) => {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          flexDirection: "column",
          backgroundColor: "#E4E4E4"
        }}
      >
        <View
          style={{
            margin: 10,
            padding: 10
          }}
        >
          <Text>Receipt</Text>
        </View>
        {computers.length !== 0 && (
          <View
            style={{
              margin: 10,
              padding: 10
            }}
          >
            <View>
              <Text>Computers</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text>ID</Text>
              <Text>Name</Text>
              <Text>Price</Text>
            </View>
            {computers.map(computer => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>{computer.id}</Text>
                <Text>{computer.computerName}</Text>
                <Text>{computer.price}</Text>
              </View>
            ))}
          </View>
        )}
        {monitors.length !== 0 && (
          <View
            style={{
              margin: 10,
              padding: 10
            }}
          >
            <View>
              <Text>Monitors</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text>ID</Text>
              <Text>Name</Text>
              <Text>Price</Text>
            </View>
            {monitors.map(monitor => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>{monitor.id}</Text>
                <Text>{monitor.monitorName}</Text>
                <Text>{monitor.price}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};
