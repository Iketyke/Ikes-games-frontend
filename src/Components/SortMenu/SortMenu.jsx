import React from 'react'
import "./SortMenu.css"


const SortMenu = ({setSort, setOrder, searchParams, setSearchParams}) => {
    const handleSort = (sort) => {
        
        setSort(sort)
        const newSearchParams = {...searchParams}
        
        newSearchParams.sort_by = sort
        setSearchParams(newSearchParams)
    }
    const handleOrder = (order) => {
        
        setOrder(order);
        const newSearchParams = {...searchParams}
        newSearchParams.order = order
        setSearchParams(newSearchParams)
    }
  return (
    <div className='App__SortMenu'>
        <h3>Sort By:</h3>
        <ul>
            <li>
                <p onClick={() => {handleSort("created_at")}}>Date</p>
            </li>
            <li>
                <p onClick={() => {handleSort("comment_count")}}>Comment Count</p>
            </li>
            <li>
                <p onClick={() => {handleSort("votes")}}>Votes</p>
            </li>
        </ul>
        <h3>Order:</h3>
        <p onClick={() => {handleOrder("asc")}}>Ascending</p>
        <p onClick={() => {handleOrder("desc")}}>Descending</p>
    </div>
  )
}

export default SortMenu