import { Renderer, View, Text, Button, Window } from "@nodegui/react-desktop";
import React, { useState, useMemo } from "react";
import { QPushButtonEvents } from "@nodegui/nodegui";

const App = () => {
  const [time, setTime] = useState(`${new Date()}`);
  const buttonEventHandlers = useMemo(
    () => ({
      [QPushButtonEvents.clicked]: () => setTime(`${new Date()}`)
    }),
    []
  );
  return (
    <Window styleSheet={styleSheet}>
      <View id="container">
        <Button text="Update Time" on={buttonEventHandlers} />
        <Text id="result">{time}</Text>
      </View>
    </Window>
  );
};

const styleSheet = `
  #container {
    qproperty-flex: 1;
    qproperty-flexDirection: column;
    qproperty-minHeight: '100%';
    qproperty-alignItems: 'center';
    qproperty-justifyContent: 'center';
  }
  #opBtn {
    font-size: 20px;
  }
  #result {
    font-size: 12px;
    qproperty-flex: 1;
    color: cyan;
  }
`;

Renderer.render(<App />, () => {});
