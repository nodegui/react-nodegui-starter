import { Text, View, Button } from "@nodegui/react-nodegui";
import { QPushButtonEvents } from "@nodegui/nodegui";
import React from "react";
import open from "open";

const buttonEventHandler = {
  [QPushButtonEvents.clicked]: () => {
    open("https://react.nodegui.org").catch(console.log);
  }
};

export function StepTwo() {
  return (
    <View style={containerStyle}>
      <Text style={textStyle} wordWrap={true}>
        {`
          <ol>
            <li>
                Open chrome and navigate to chrome://inspect. You should see a target below with your app.
            </li>
            <br/>
              <li>
                  Next click on  "Open dedicated DevTools for Node"
              </li>
              <br/>
            <li>
                On the dedicated devtools. Click on Source > Node > "Your node process"
            </li>
          </ol>
        `}
      </Text>
      <Button
        style={btnStyle}
        on={buttonEventHandler}
        text={`Open React NodeGui docs`}
      ></Button>
    </View>
  );
}

const containerStyle = `
  flex: 1;
  justify-content: 'space-around';
`;

const textStyle = `
  padding-right: 20px;
`;

const btnStyle = `
  margin-horizontal: 20px;
  height: 40px;
`;
