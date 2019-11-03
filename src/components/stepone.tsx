import { Text, View } from "@nodegui/react-nodegui";
import React from "react";
const dogImg = require("./dog");

export function StepOne() {
  return (
    <View style={containerStyle}>
      <Text wordWrap={true}>
        Edit App.tsx to make changes to this screen. Then come back to see your
        changes. Changes should reflect live thanks to Hot Reloading. 🔥
      </Text>
      <Text>
        {`
          <p style="color: rgb(255,72,38);"> 
            <center>
              <img src="${dogImg}" alt="doggy" />  
            </center>
            <center>You can even use <i><strong>Rich Html</strong></i> text like this if you want 😎.</center>
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
