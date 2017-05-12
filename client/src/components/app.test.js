import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { observer } from 'mobx-react';

import App from './app';
import AppState from "./../stores/appState"

const appState = new AppState();

describe('App', () => {
  it("App renders Dashboard component", () => {
    const app = shallow(<App appState={appState} />);
    expect(app.find('Dashboard').exists()).toBe(true);

  });

  it("App renders ForceDirectedDiagram component", () => {
    const app = shallow(<App appState={appState} />);
    expect(app.find('ForceDirectedDiagram').exists()).toBe(true);
  });

});

