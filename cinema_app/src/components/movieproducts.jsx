import React from 'react'

function movieproducts({ results }) {
    return (
      <section className="results">
          {results.map(result => (
              <Result result= {result} />
          ))}
      </section>
    )
}

export default movieproducts
