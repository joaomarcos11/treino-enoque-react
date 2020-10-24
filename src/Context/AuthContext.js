import React, { createContext, useState, useContext} from 'react';
import api from '../services/api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);
  // const [,] = useState(() => {

  // })
  return (
    <AuthContext.Provider value={{ signed, setSigned }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}