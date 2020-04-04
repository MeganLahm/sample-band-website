import React from "react";
import Music from "./SubPages/Music";
import Merch from "./SubPages/Merch";
import Tour from "./SubPages/Tour";
import PicPage from "./SubPages/PicPage";
import HomePage from "./HomeStuff/HomePage";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route exact path="/Music" component={() => <Music />} />
        <Route exact path="/Merch" component={() => <Merch />} />
        <Route exact path="/Tour" component={() => <Tour />} />
        <Route exact path="/Pics" component={() => <PicPage />} />
      </Switch>
    </div>
  );
}
export default App;
