import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('black pink')
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  const [results, setResults] = useState([])

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term)
    }, 1000)
    return () => {
      clearTimeout(timerId)
    }
  }, [term])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };

    if(debouncedTerm) {
      search()
    }

  }, [debouncedTerm]);

  const renderedResults = results.map(result => {
    const pageUrl = `https://en.wikipedia.org?curid=${result.pageid}`;

    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={pageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term for Wikipedia</label>
          <input
            className="input"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
}

export default Search
