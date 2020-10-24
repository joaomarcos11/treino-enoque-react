import React, {useState} from 'react';
import api from '../../services/api';
import { useAuth } from '../../Context/AuthContext';

export default function Login() {
  const { setSigned } = useAuth();
  const [emailValue, setEmailValue] = useState('');
  const [senhaValue, setSenhaValue] = useState('');
  
  function handleSubmit(email, senha) {
    setSigned(true);

    // api.post('/sessions', {
    //   email, senha
    // }).then(res => {
    //   const { usuario, token } = res.data;
      
    //   api.defaults.headers.Authorization = `Bearer ${token}`
    //   localStorage.setItem('@EasyCajup:User', usuario)
    //   localStorage.setItem('@EasyCajup:Token', `Bearer ${token}`)
    //   setSigned(true);

    // }).catch(err => console.log(`Login inválido, error: ${err}`))
  }

  return (
    <div style={{display:'flex', flexDirection: 'column'}}>
      <h1>Login</h1>
      <input 
        type="text" 
        placeholder="Insira seu email" 
        onChange={e => setEmailValue(e.target.value)} 
      />
      <br/>
      <input 
        type="password" 
        placeholder="Insira sua senha" 
        onChange={e => setSenhaValue(e.target.value)}
      />
      <br/>
      <button onClick={() => handleSubmit(emailValue, senhaValue)}>
        Logar
      </button>
    </div>
  )
}