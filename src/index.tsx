import {
  Renderer,
  View,
  Text,
  Window,
  Image,
  ScrollArea
} from "@nodegui/react-nodegui";
import path from "path";
import React from "react";
import { AspectRatioMode } from "@nodegui/nodegui";

import imageUrl from "../assets/nodegui.jpg";
const distImgUrl = path.resolve(__dirname, imageUrl);
const minSize = { width: 500, height: 400 };

const App = () => {
  return (
    <Window minSize={minSize} styleSheet={styleSheet}>
      <ScrollArea style={`height: '100%';width: '100%';`}>
        <View id="container">
          <Text style="font-size: 15px; font-weight: bold; margin-bottom: 20px;">
            Hello World
          </Text>
          <Image
            style={imageStyle}
            src={distImgUrl}
            aspectRatioMode={AspectRatioMode.KeepAspectRatio}
          />
        </View>
      </ScrollArea>
    </Window>
  );
};

const imageStyle = `
  height: "700px";
  width: "700px";
  qproperty-alignment: 'AlignHCenter';
`;

const styleSheet = `
  #container {
    flex: 1;
    min-height: 0;
    min-width: 0;
    width: '900';
    height: '900';
    flex-direction: column;
    align-items: 'center';
    justify-content: 'center';
    background-color: 'grey';
  }
`;

Renderer.render(<App />);
