'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect to login page if token is not present
      router.push('/login');
    }
  }, [router]);

  return children;
};

export default ProtectedRoute;

