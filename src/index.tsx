import {
  Renderer,
  View,
  Text,
  Button,
  Window,
  Image,
  useEventHandler
} from "@nodegui/react-nodegui";
import React, { useState } from "react";
import path from "path";
import { AspectRatioMode } from "@nodegui/nodegui";

const imageUrl = path.resolve(__dirname, "../assets/sample.jpg");
const fixedSize = { width: 500, height: 500 };
const App = () => {
  const [time, setTime] = useState(new Date());
  const btnHandler = useEventHandler(
    { clicked: () => setTime(new Date()) },
    []
  );
  return (
    <Window minSize={fixedSize} maxSize={fixedSize} styleSheet={styleSheet}>
      <View id="container">
        <Button text="Update Time" on={btnHandler} />
        <Text id="result">{`${time}`}</Text>
        <Text id="result">{`Time in epoc: ${time.getTime()}`}</Text>
        <Image
          style={imageStyle}
          src={imageUrl}
          aspectRatioMode={AspectRatioMode.KeepAspectRatio}
        />
      </View>
    </Window>
  );
};

const imageStyle = `
  height: "70%";
`;

const styleSheet = `
  #container {
    flex: 1;
    flex-direction: column;
    min-height: '100%';
    align-items: 'center';
    justify-content: 'center';
    background-color: black;
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
