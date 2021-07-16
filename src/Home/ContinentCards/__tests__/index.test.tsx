import { continents } from "config/config";
import React from "react";
import { create } from "react-test-renderer";
import { ContinentCards } from "..";

jest.mock('config/config', () => continents) // TODO add correct 
describe("App", () => {

    it("App", async () => {
      const tree = create(<ContinentCards />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });