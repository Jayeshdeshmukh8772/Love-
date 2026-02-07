import { useState } from 'react';
import { AdminLogin } from '../components/AdminLogin';
import { AdminDashboard } from '../components/AdminDashboard';

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return <AdminDashboard onLogout={() => setIsAuthenticated(false)} />;
}
