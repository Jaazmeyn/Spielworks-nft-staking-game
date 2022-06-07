import './App.css';
import React from "react";
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Data from './components/data'

function App() {
  // name and image.
  // maby need to use oracle??
  const api = 'https://eos.api.atomicassets.io/atomicassets/v1/assets?collection_name=womplayextra&page=1&limit=100&order=desc&sort=asset_id';
  // ho can I get the nfts owend by that accunt???? with this api
  // with the router I need to swich case but not
  // ts pattern instead swich case.
  // get accounts which hold nfts
  // https://eos.api.atomicassets.io/docs/#/accounts/get_atomicassets_v1_accounts
  // https://eos.api.atomicassets.io/docs/#/accounts/get_atomicassets_v1_accounts__account___collection_name_

  return (
    <Router>

      <div className="App">
        <Switch>
          <Route exact path="/">
            {/* nft collection 1 */}
            <p>Our NFTs!!!</p>
            {/* nft collection 2 */}
            <Button variant="contained">Login</Button>
            <h3>Results</h3>
      <p>Womplay Extra</p>
      <p>Tasty Tale</p>
          </Route>  
          {/* if user is signed in he sees his own collection and can start */}
          <Route exact path="/data"></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
