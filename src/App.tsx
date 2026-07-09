import { useState } from 'react';

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

  const [novoNome, setNovoNome] = useState('');

  const [novoGenero, setNovoGenero] = useState('')

  function adicionarJogo(e: React.SubmitEvent) {
    e.preventDefault();

    if (!novoNome.trim()) return;

    const novoJogo: Jogo = {
      id: Date.now(),
      nome: novoNome,
      genero: novoGenero,
      horasJogadas: 0,
      status: 'Backlog'
    };

    setJogos([...jogos, novoJogo]);

    setNovoNome('');
    setNovoGenero('');
  }

  return (
    <>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Gerenciador de Jogos da Steam</h1>
        <form onSubmit={adicionarJogo} style={{ marginBottom: '20px' }}>
          <input
            type='text'
            placeholder='Nome do jogo da Steam...'
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type='text'
            placeholder='Gênero do jogo'
            value={novoGenero}
            onChange={(e) => setNovoGenero(e.target.value)}
            style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type='submit' style={{ padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
            Adicionar
          </button>
        </form>
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
