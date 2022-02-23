import {useState} from 'react';
import cn from 'classnames';
import classes from './Paginator.module.css';

let Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
    
  let pages = [];

  for(let i = 1; i <= pagesCount; i++){
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.paginator}>
          {portionNumber > 1 && 
          <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Previous</button>}
          {pages
          .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
          .map((page) => {
            return <span className = { cn ({
              [classes.selectedPage] : currentPage === page
            }, classes.pageNumber)}
              key={page}
              onClick={() => {onPageChanged(page)}}>{page}</span>
          })}
          {portionCount > portionNumber && 
          <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>
              );
        }

export default Paginator;