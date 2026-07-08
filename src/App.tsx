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

  const [jogos, setJogos] = useState<jogo[]>([
    { id: 1, nome: 'Dying Light', genero: 'Terror', horasJogadas: 50, status: 'Zerado' },
    { id: 2, nome: 'Forza Horizon 5', genero: 'Corrida', horasJogadas: 20, status: 'Jogando' },
    { id: 3, nome: 'EA Sports FC 25', genero: 'Esportes', horasJogadas: 1205, status: 'Zerado' }

  ]);

  return (
    <>
    </>
  )
}

export default App
