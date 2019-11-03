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
    <View>
      <Text style={textStyle} wordWrap={true}>
        {`
          <ol>
            <li>
                Open chrome and navigate to <code>chrome://inspect</code>. You should see a target below with your app.
            </li>
            <br/>
              <li>
                  Next click on  "<code>Open dedicated DevTools for Node</code>"
              </li>
              <br/>
            <li>
                On the dedicated devtools. Click on <code> Source > Node > "Your node process" </code>
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

const textStyle = `
  padding-right: 20px;
`;

const btnStyle = `
  margin-horizontal: 20px;
  height: 40px;
`;
