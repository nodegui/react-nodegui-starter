import {
  Renderer,
  View,
  Text,
  Window,
  Image,
} from "@nodegui/react-nodegui";
import path from "path";
import React from "react";
import { AspectRatioMode } from "@nodegui/nodegui";

import imageUrl from "../assets/nodegui.jpg";
const distImgUrl = path.resolve(__dirname, imageUrl);
const minSize = {width: 500, height: 400};

const App = () => {
  return (
    <Window minSize={minSize} styleSheet={styleSheet}>
      <View id="container">
        <Text style="font-size: 15px; font-weight: bold; margin-bottom: 20px;">Hello World</Text>
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
  height: "100px";
  width: "100px";
  qproperty-alignment: 'AlignHCenter';
`;

const styleSheet = `
  #container {
    flex: 1;
    flex-direction: column;
    min-height: '100%';
    align-items: 'center';
    justify-content: 'center';
  }
`;

Renderer.render(<App />);
