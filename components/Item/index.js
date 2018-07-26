import React from 'react'

const Meta = ({ reviewCreated, reviewId, productTitle, stars }) => (
  <article>
    <figure>
      <img src='#' width='80' height='80' />
    </figure>
    <div>
      <p>Date:</p>
      <p>{reviewCreated}</p>
    </div>
    <div>
      <p>Stars:</p>
      <p>{ stars }</p>
    </div>
    <div>
      <p>{ reviewId }</p>
      <p>{ productTitle }</p>
    </div>
    <style jsx>{`
      article {
        display: flex;
        border: 1px solid green;
      }
      `}</style>
  </article>
)

const Item = (props) => (
  <li>
    <section>
      <Meta {...props} />
      <h2>{ props.title }</h2>
      <p>{ props.content }</p>
    </section>
    <style jsx>{`
      li {
        border: 1px solid red;
        padding: 1rem;
        box-sizing: border-box;
      }
      `}</style>
  </li>
)

export default Item
