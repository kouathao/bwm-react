import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// imported components
// 1) Provider redux is a component and must wrap around all component
import { Provider } from "react-redux";
import { Header } from "./shared/Header";
import RentalListing from "./components/rental/rental-listing/RentalListing";
import RentalDetail from "./components/rental/rental-detail/RentalDetail";

// store
const store = require("./reducers").init();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              {/* render = redirect  */}
              <Route
                exact
                path="/"
                render={() => {
                  return <Redirect to="/rentals" />;
                }}
              />
              <Route exact path="/rentals" component={RentalListing} />
              <Route exact path="/rentals/:id" component={RentalDetail} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
