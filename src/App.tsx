import { useState } from 'react';
import './App.css'

interface Jogo {
  id: number;
  nome: string;
  genero: string;
  horasJogadas: number;
  status: 'Backlog' | 'Jogando' | 'Zerado';
}

function App() {

  const [jogos, setJogos] = useState<Jogo[]>([
    { id: 1, nome: 'Dying Light', genero: 'Terror', horasJogadas: 50, status: 'Zerado' },
    { id: 2, nome: 'Forza Horizon 5', genero: 'Corrida', horasJogadas: 20, status: 'Jogando' },
    { id: 3, nome: 'EA Sports FC 25', genero: 'Esportes', horasJogadas: 1205, status: 'Zerado' }

  ]);

  return (
    <>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Gerenciador de Jogos da Steam</h1>
        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
          {jogos.map((jogo) => (
            <div key={jogo.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
              <h3>{jogo.nome}</h3>
              <p>Gênero: {jogo.genero}</p>
              <p>Horas: {jogo.horasJogadas}h</p>
              <p>Status: <strong>{jogo.status}</strong></p>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default App
