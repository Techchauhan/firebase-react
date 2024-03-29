import React, { useState } from 'react';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../../firebase';

export default function FetchSpecificDocument() {
    const [documentData, setDocumentData] = useState(null);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            const docRef = doc(db, "city", 'new');
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                setDocumentData(docSnap.data());
                setError(null); // Clear error if data is found
            } else {
                setError("No Data found.");
            }
        } catch (error) {
            console.error("Error Fetching document", error);
            setError("Error Fetching Document");
        }
    }
 
    return (
        <div>
            <h1>Fetch Specific Documents</h1>
            <button onClick={fetchData}>Fetch Data</button>

            {error && <p>{error}</p>}

            {documentData && (
                <div>
                    <h2>Document Data</h2>
                    <ul>
                        {Object.keys(documentData).map((key) => (
                            <li key={key}>
                                <strong>{key}:</strong> {documentData[key]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
