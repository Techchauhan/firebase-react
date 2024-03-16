import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {app} from "../../firebase"

export default function UserList() {
    const [userIds, setUserIds] = useState([]);
  
    useEffect(() => {
      const fetchUserIds = async () => {
        const db = getFirestore(app);
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        const userIdList = usersSnapshot.docs.map(doc => doc.id);
        setUserIds(userIdList);
      };
  
      fetchUserIds();
    }, []);
  
    return (
      <div>
        <h1>User List</h1>
        <ul>
          {userIds.map(userId => (
            <li key={userId}>{userId}</li>
          ))}
        </ul>
      </div>
    );
  }
  