import React from 'react'

export default function Square({value, onClick}) {
    const style = value ? `${value} btn btn-square btn-secondary border border-3 ` : `btn btn-square btn-secondary border border-3 `;
  return (
    <button onClick={onClick} className = {style} >
        {value}
    </button>
  )
}
