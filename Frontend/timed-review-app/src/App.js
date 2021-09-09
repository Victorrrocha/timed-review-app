import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header';
import DailyReviews from './components/DailyReviews';
import AddNew from './components/AddNew';
import ReviewPage from './components/ReviewPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DailyReviews />
          </Route>
          <Route exact path="/new">
            <AddNew />
          </Route>
          <Route exact path="/review/:id">
            <ReviewPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
