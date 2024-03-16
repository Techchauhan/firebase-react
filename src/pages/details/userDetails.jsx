import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function UserDetails({ collectionName, documentId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const db = getFirestore();
      const userRef = doc(db, collectionName, documentId);
      
      try {
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchUserData();
  }, [collectionName, documentId]);

  return (
    <div>
      <h2>User Details</h2>
      {userData ? (
        <div>
          <p>Name: {userData.fullName}</p>
          <p>Email: {userData.email}</p>
          {/* Add other fields as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
