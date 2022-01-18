import classes from './Paginator.module.css';

let Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize) / 300;
    
  let pages = [];

  for(let i = 1; i <= pagesCount; i++){
    pages.push(i);
  }
    return (
        <div>
          {pages.map(page => {
            return <span className={currentPage === page && classes.selectedPage}
              onClick={() => {onPageChanged(page)}}>{page}</span>
          })}
        </div>
              );
        }

export default Paginator;