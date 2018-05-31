import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/App'

const theme = {
  background: "#f7df1e",
  color: "#24292e"
}

document.addEventListener('DOMContentLoaded', () => {
  render((
      <App />
    ), document.getElementById('id')
  )
})