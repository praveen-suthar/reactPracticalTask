import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/apiSlice';
import styles from '../styles/Tab2.module.scss';

const Tab2 = ({ setActiveTab }) => {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.api);

  const handleNavigateToTab3 = () => {
    dispatch(fetchUserData());
    setActiveTab('tab3');
  };

  // useEffect for dispatch 
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserData());
    }
  }, [dispatch, status]);

  return (
    <div className={styles['tab2-container']}>
      <Button onClick={handleNavigateToTab3}>Go to Tab 3</Button>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <div className={styles['user-list']}>
          {users.map((user) => (
            <div key={user.id} className={styles['user-item']}>
              <img
                src={user.avatar}
                alt={user.first_name}
                className={styles['user-avatar']}
              />
              <div className={styles['user-details']}>
                <p>{user.first_name} {user.last_name}</p>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tab2;
