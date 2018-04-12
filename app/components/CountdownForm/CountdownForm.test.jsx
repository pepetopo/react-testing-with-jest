import React from 'react';
import { render, mount } from 'enzyme';

import CountdownForm from './CountdownForm';

describe('CountdownForm', () => {
  it('renders without crashing', () => {
    render(<CountdownForm />);
  });

  let spy;
  let countdownForm;
  let form;

  beforeEach(() => {
    spy = jest.fn();
    countdownForm = mount(<CountdownForm onSetCountdownTime={spy} />);
    form = countdownForm.find('form');
  });

  it('should call onSetCountdownTime if valid seconds entered', () => {
    countdownForm.ref('seconds').value = '109';
    form.simulate('submit');

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdownTime if invalid seconds entered', () => {
    countdownForm.ref('seconds').value = '1H63';
    form.simulate('submit');

    countdownForm.ref('seconds').value = -21;
    form.simulate('submit');

    expect(spy).not.toHaveBeenCalled();
  });
});
