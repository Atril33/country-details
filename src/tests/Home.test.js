 import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Home from '../components/Home/Home';

const mockStore = configureMockStore();

describe('Home component', () => {
  it('should renders the component', () => {
    const store = mockStore({
      country: {
        countryItem: [
          { name: 'Country1', population: '123' },
          { name: 'Country2', population: '456' },
        ],
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('Should filters list of countries by using Input', () => {
    const store = mockStore({
      country: {
        countryItem: [
          { name: 'Country1', population: '123' },
          { name: 'Country2', population: '456' },
        ],
      },
    });

    const { getByText, queryByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const input = getByPlaceholderText('🔍 Search Country');
    fireEvent.change(input, { target: { value: 'country2' } });
    expect(getByText('Country2')).toBeInTheDocument();
    expect(queryByText('Country1')).not.toBeInTheDocument();
  });
  
});
