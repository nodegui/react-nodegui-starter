import { Text, View } from "@nodegui/react-nodegui";
import React from "react";

export function StepOne() {
  return (
    <View style={containerStyle}>
      <Text wordWrap={true}>
        Edit App.tsx to make changes to this screen. Then come back to see your
        changes. Changes should reflect live thanks to Hot Reloading. 🔥
      </Text>
      <Text>
        {`
          <p style="color: #6200ee;"> 
             <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
              AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
              9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />
              You can even use <i><strong>Rich Html</strong></i> text like this if you want 😎.
          </p>
          <hr />
        `}
      </Text>
    </View>
  );
}

const containerStyle = `
    margin-horizontal: 20px;
    padding-horizontal: 10px;
`;
