import React from 'react';
import { useAuth } from '../../../Context/AuthContext';

export default function DefaultLayouts({ children }) {
  const { setSigned } = useAuth();
  return (
    <div>
      <h1>Default</h1>
      <button onClick={() => {setSigned(false);}}>Sair</button>
      {children}
    </div>
  );
}