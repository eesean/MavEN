import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRouteProps {
  allowedRoles: string[];
  // Add any additional props you need for your private route
}

// Use Outlet for nested routes or pass a specific element/component for rendering
const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const { currentUser, userRole } = useAuth();

  return currentUser && userRole && allowedRoles.includes(userRole) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};
