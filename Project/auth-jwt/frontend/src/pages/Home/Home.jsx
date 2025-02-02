import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const Home = () => {
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);
      setRole(decoded.role);
      setEmail(decoded.email);
    } else {
      window.location.href = '/auth/login';
    }
  }, []);

  const renderContent = () => {
    if (role === 'USER') {
      return (
        <div>
          <h2>Welcome {email}</h2>
          <div>Block 1</div>
          <div>Block 3</div>
        </div>
      );
    }
    if (role === 'ADMIN') {
      return (
        <div>
          <h2>Welcome {email}</h2>
          <div>Block 1</div>
          <div>Block 2</div>
          <div>Block 3</div>
        </div>
      );
    }
    return null;
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/auth/login';
  };
  
  return (
    <div className="p-4">
      {renderContent()}
      <button onClick={handleLogout} className="mt-4 p-2 bg-red-500 text-white rounded">
        Logout
      </button>
    </div>
  );
};

export default Home;
