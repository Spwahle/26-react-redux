import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import DashboardContainer from '../dashboard-container';
import {Provider} from 'react-redux';
import createAppStore from '../../lib/store';

const store = createAppStore();

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  //creatting my entire app with a console log
  componentDidMount() {
    store.subscribe(() => {
      console.log('__STATE__', store.getState());
      console.log(this.props);

    });

    store.dispatch({ type: null });
  }

  render() {
    return(
      <section className="budget-tracker">
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path="/" component={DashboardContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    );
  }
}

export default App;
