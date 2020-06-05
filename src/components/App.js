import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Albums from "./Albums"
import Gallery from "./Gallery"
import Picture from "./Picture"

export default props => (
  <Router>
    <div>
      <Route exact path="/" component={Albums} />
      <Route exact path="/gallery/:id" component={Gallery} />
      <Route exact path="/picture/:id" component={Picture} />
    </div>
  </Router>
)
