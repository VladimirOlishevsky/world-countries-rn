import React from "react";
import { FlagDescription } from "..";
import renderer from 'react-test-renderer';

describe('FlagDescription', () => {
    test('render flagsDescription.cia_description', () => {
      const tree = renderer.create(<FlagDescription alpha2Code='AF'/>).toJSON();
      expect(tree).toMatchSnapshot();
    })
    test('render flagsDescription.jmpesc_description', () => {
      const tree = renderer.create(<FlagDescription alpha2Code='AX'/>).toJSON();
      expect(tree).toMatchSnapshot();
    })
  });