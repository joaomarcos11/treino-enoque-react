import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import { Card } from './styles';

export default function Info() {
  const [ users, setUsers ] = useState([]);
  const [ input, setInput ] = useState("");

  useEffect(() => {
    api.get('/?results=20&nat=us,fr').then((res) => {
      console.log(res.data.results);
      setUsers(res.data.results);
    });
  }, []);

  useEffect(() => {
    console.log('Renderizado');
    console.log(input);
  }, [input])

  return (
    <div>
      <h1>Page Info</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <p>{input}</p>
        {users.length > 0 && users.map((user) => (
          <Card key={user.id.value} genero={user.gender}>
            <h1>{user.name.first}</h1>
          </Card>
        ))}
    </div>
  );
}
