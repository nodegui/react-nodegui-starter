import { Renderer, View, Text, Button, Window } from "@nodegui/react-desktop";
import React, { useState } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());
  return (
    <Window minSize={{ width: 500, height: 200 }} styleSheet={styleSheet}>
      <View id="container">
        <Button
          text="Update Time"
          on={{
            clicked: () => setTime(new Date())
          }}
        />
        <Text id="result">{`${time}`}</Text>
        <Text id="result">{`Time in epoc: ${time.getTime()}`}</Text>
      </View>
    </Window>
  );
};

const styleSheet = `
  #container {
    flex: 1;
    flex-direction: column;
    min-height: '100%';
    align-items: 'center';
    justify-content: 'center';
  }
  #opBtn {
    font-size: 20px;
  }
  #result {
    font-size: 12px;
    flex: 1;
    color: cyan;
  }
`;

Renderer.render(<App />);
