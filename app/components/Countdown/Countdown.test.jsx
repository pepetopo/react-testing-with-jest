import React from 'react';
import { render, mount } from 'enzyme';

import Countdown from './Countdown';

describe('Countdown', () => {
  it('Renders without crashing', () => {
    render(<Countdown />);
  });

  describe('handleSetCountdownTime', () => {
    const countdown = mount(<Countdown />);
    const countdownInstance = countdown.instance();

    it('Should set countdown time and start countdown', done => {
      countdownInstance.handleSetCountdownTime(10);

      expect(countdown.state('count')).toBe(10);
      expect(countdown.state('countdownStatus')).toBe(1);

      setTimeout(() => {
        expect(countdown.state('count')).toBe(9);
        done();
      }, 1001);
    });

    it('Should never set state.count to < 0', done => {
      countdownInstance.handleSetCountdownTime(1);

      setTimeout(() => {
        expect(countdown.state('count')).toBe(0);
        done();
      }, 3000);
    });
  });
});
