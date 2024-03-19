import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Function to save admission data to Firestore
export const saveAdmissionData = async (admissionData) => {
  const db = getFirestore();
  const admissionCollection = collection(db, 'admissions');
  try {
    await addDoc(admissionCollection, admissionData);
    return true; // Return true indicating successful data save
  } catch (error) {
    console.error('Error saving admission data:', error);
    return false; // Return false indicating error in saving data
  }
};
