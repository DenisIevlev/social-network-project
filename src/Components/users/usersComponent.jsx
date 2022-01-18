import Paginator from '../common/Paginator/Paginator';
import User from './user';

let UsersComponent = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress, follow, unfollow, ...props}) => {
  
    return (
      <div>
      <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
      <div>
        {
          users.map(user => <User user={user} key={user.id} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow}/>
        )
          }
      </div>
      </div>
          )

}

export default UsersComponent;