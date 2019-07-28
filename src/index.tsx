import { Renderer, View, Text, Button, Window } from "@nodegui/react-desktop";
import React, { useState } from "react";

const App = () => {
  const [time, setTime] = useState(`${new Date()}`);
  return (
    <Window minSize={{ width: 500, height: 200 }} styleSheet={styleSheet}>
      <View id="container">
        <Button
          text="Update Time"
          on={{
            clicked: () => setTime(`${new Date()}`)
          }}
        />
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
