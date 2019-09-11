import {
  Renderer,
  View,
  Text,
  Button,
  Window,
  Image,
  useEventHandler
} from "@nodegui/react-nodegui";
import path from "path";
import React, { useState } from "react";
import { AspectRatioMode, QPushButtonEvents } from "@nodegui/nodegui";

import styleSheet from "./index.css";
import imageUrl from "../assets/sample.jpg";
const distImgUrl = path.resolve(__dirname, imageUrl);

const fixedSize = { width: 500, height: 500 };
const App = () => {
  const [time, setTime] = useState(new Date());
  const btnHandler = useEventHandler(
    { [QPushButtonEvents.clicked]: () => setTime(new Date()) },
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
          src={distImgUrl}
          aspectRatioMode={AspectRatioMode.KeepAspectRatio}
        />
      </View>
    </Window>
  );
};

const imageStyle = `
  height: "70%";
`;

Renderer.render(<App />);
