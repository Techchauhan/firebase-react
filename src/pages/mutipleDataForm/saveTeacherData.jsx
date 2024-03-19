import { getFirestore, doc, setDoc } from 'firebase/firestore';

export async function saveTeacherData(documentId, userData) {
  const db = getFirestore();
  const userDocRef = doc(db, "student", documentId);

  try {
    await setDoc(userDocRef, userData);
    return true; // Indicate successful save
  } catch (error) {
    console.error('Error setting document: ', error);
    return false; // Indicate error
  }
}
