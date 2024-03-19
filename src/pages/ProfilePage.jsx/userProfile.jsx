import React from 'react';
import UserDetails from '../details/userDetails'; // Assuming UserDetails.jsx is in the same directory

export default function UserProfile() {
  return (
    <div>
      <h1>User Profile</h1>
      <UserDetails collectionName="users" documentId="your_document_id_here" />
     
    </div>
  );
}
