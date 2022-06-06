import React, { useState, useEffect } from 'react'

const url = 'https://hn.algolia.com/api/v1/search?query='

function Search() {
  const [searchTxt, setSearchTxt] = useState('')
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const timerId = setTimeout(() => {
      fetch(url + searchTxt)
        .then((rs) => rs.json())
        .then((rs) => {
          setArticles(rs.hits)
        })
    }, 1000)

    return () => clearTimeout(timerId)
  }, [searchTxt])

  return (
    <div
      style={{
        padding: '40px',
      }}
    >
      <input
        type="text"
        value={searchTxt}
        onChange={(e) => setSearchTxt(e.target.value)}
      />
      <ul
        style={{
          listStyle: 'revert',
        }}
      >
        {articles.map((article) => (
          <li key={article.objectID}>{article.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Search
