import React from 'react';
import { render, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Clock from '../Clock/Clock';

describe('Clock', () => {
  it('Renders correctly', () => {
    const seconds = 63;
    const rendered = renderer.create(<Clock timeInSeconds={seconds} />);

    expect(rendered.toJSON()).toMatchSnapshot();
  });

  describe('formatTime', () => {
    const clock = shallow(<Clock />);
    const assertion = (seconds, expected) =>
      expect(clock.instance().formatTime(seconds)).toEqual(expected);

    it('Should format seconds when needed', () => {
      assertion(635, '10:35');
      assertion(20, '00:20');
    });

    it('Should format time correctly when minutes and / or seconds are < 10', () => {
      assertion(65, '01:05');
    });

    it('Should format numerical strings', () => {
      assertion('45', '00:45');
      assertion('0x11', '00:17');
    });
  });
});
