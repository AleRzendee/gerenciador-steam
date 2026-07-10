interface CardJogoProps {
    jogo: {
        id: number;
        nome: string;
        genero: string;
        horasJogadas: number;
        status: 'Backlog' | 'Jogando' | 'Zerado';
    }
    onAdicionarHora: (id: number) => void;
}

export function CardJogo({ jogo, onAdicionarHora }: CardJogoProps) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', minWidth: '200px' }}>
            <h3>{jogo.nome}</h3>
            <p>Gênero: {jogo.genero}</p>
            <p>Horas: {jogo.horasJogadas}</p>
            <p>Status: <strong>{jogo.status}</strong></p>
            <button
                onClick={() => onAdicionarHora(jogo.id)}
                style={{ padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
            >
                Adicionar 1 Hora Jogada 🎮
            </button>
        </div>
    )
}