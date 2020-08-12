import React, { useState } from 'react'

import Convert from './Convert'
import Dropdown from '../Dropdown'

import languageOptions from '../../data/languageOptions'

const Translate = () => {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [text, setText] = useState('')

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={languageOptions}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
}

export default Translate
