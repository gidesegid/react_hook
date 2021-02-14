import React from 'react';
import './App.css';
import ReducerSample from './ReducerSample'
import ErrorHandeling from './ErrorHandeling'
import useUsers from './usersHook';
function App() {
  const [users] = useUsers();
  return (
    <div className="container">
         <div className="usersList">
             <strong><h1>Sample users list</h1></strong>
             <div>
                <ul>
                    {users.map((user) => (
                      <li key={user.id}>
                        <h3>
                          {user.first_name} {user.last_name}
                        </h3>
                        <p>{user.email}</p>
                      </li>
                    ))}
                  </ul>
              </div>
         </div>
          <ReducerSample/>
          <ErrorHandeling/>
    </div>
  );
}
export default App;
