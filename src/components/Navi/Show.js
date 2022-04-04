import React from 'react'

function Show({ show }) {
  return (
    <div className='Show'>
        {show.map((show, index) => {
            return (
                <article className='Show_item' key={show.name + index}>
                    <h3>{show.name}</h3>
                    <span className='Show_year'>{show.date}</span>
                    <p>{show.where}</p>
                </article>
            )
        })}
        </div>
  )
}

export default Show