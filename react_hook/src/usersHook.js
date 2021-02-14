import {useState,useEffect} from 'react'
const useUsers = () => {
    const [users, usersSet] = useState([]);
    useEffect(() => {
      async function fetchUsers() {
        const fullResponse = await fetch('https://reqres.in/api/users');
        const responseJson = await fullResponse.json();
        usersSet(responseJson.data);
      }
      fetchUsers();
    }, []);
    return [users];
  };
export default useUsers;