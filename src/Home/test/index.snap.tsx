import React from "react";
// import { render } from "react-native-testing-library";
import { create } from 'react-test-renderer';
import {Bbb} from ".";

describe("App", () => {

  it("App", async () => {
    const tree = create(<Bbb />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});