 import {   collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase"; // Assuming firebase config is in firebaseConfig.js

// Define a function to fetch document IDs
const fetchCollectionName = async (collectionPath) => {
  const querySnapshot = await getDocs(collection(db, collectionPath));
  const documentIds = [];
  querySnapshot.forEach((doc) => {
    documentIds.push(doc.id );
  });
  return documentIds;
};

// Your component
function FetchDocumentIds() {
  const [documentIds, setDocumentIds] = useState([]);

  useEffect(() => {
    const fetchIds = async () => {
      const ids = await fetchCollectionName("city");
      setDocumentIds(ids);
    };
    fetchIds();
  }, []);

  return (
    <div>
      <h1>Document IDs:</h1>
      <ul>
        {documentIds.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchDocumentIds;
