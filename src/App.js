import React, { useState } from 'react'

import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Header from './components/menu/Header'
import Route from './components/menu/Route'
import Search from './components/Search'
import Translate from './components/translate/Translate'
import Video from './components/videos/Video'
import colorOptions from './data/colorOptions'
import items from './data/items'
import "./App.css";

const randomOption = Math.floor(Math.random() * colorOptions.length)
const App = () => {
  const [selected, setSelected] = useState(colorOptions[randomOption]);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/video">
        <Video />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={colorOptions}
          onSelectedChange={setSelected}
          selected={selected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App
