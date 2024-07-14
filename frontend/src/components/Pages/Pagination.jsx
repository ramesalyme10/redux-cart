import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({postPerPage,totalPrice,PageNate}) => {
   
    const pageNumber = []
   for(let i = 1; i <= Math.ceil(totalPrice / postPerPage); i++){
      pageNumber.push(i)
   }

  return (
    <ul  className="pagination">
       {pageNumber.map((number) =>(
         <li key={number} className='page-item '>
          <Link onClick={() => PageNate(number)} className='page-link text-dark '>{number}</Link>
         </li>
       ))}
    </ul>
  )
}

export default Pagination