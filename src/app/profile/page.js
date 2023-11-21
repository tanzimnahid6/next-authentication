// Example usage in another component or page

// Example usage in another component or page

import ProfilesGrid from '@/components/Profile';
import React from 'react';


const UsersPage = () => {
  const users = [
    { id: 1, username: 'JohnDoe', email: 'john.doe@example.com' },
    { id: 2, username: 'JaneSmith', email: 'jane.smith@example.com' },
    { id: 3, username: 'BobJohnson', email: 'bob.johnson@example.com' },
    // Add more users as needed
  ];

  return <ProfilesGrid users={users} />;
};

export default UsersPage;
