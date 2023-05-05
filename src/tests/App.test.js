import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../Redux/store';

describe('App component', () => {
  test('Should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
