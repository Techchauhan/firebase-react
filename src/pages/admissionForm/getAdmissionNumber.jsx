import { getFirestore, collection, orderBy, limit, getDocs, query } from 'firebase/firestore';

// Function to get the latest admission number from Firestore
export const getLatestAdmissionNumber = async () => {
  const db = getFirestore();
  const admissionCollection = collection(db, 'admissions');
  try {
    const querySnapshot = await getDocs(
      query(admissionCollection, orderBy('admissionNumber', 'desc'), limit(1))
    );
    if (!querySnapshot.empty) {
      const latestAdmission = querySnapshot.docs[0].data();
      const admissionNumber = latestAdmission.admissionNumber;
      console.log('Latest admission number:', admissionNumber);
      return admissionNumber;
    } else {
      // If no admission records found, set admission number to 1
      console.log('No admission records found. Setting admission number to 1.');
      return 1;
    }
  } catch (error) {
    console.error('Error fetching latest admission number:', error);
    throw error; // Throw error if unable to fetch the latest admission number
  }
};
