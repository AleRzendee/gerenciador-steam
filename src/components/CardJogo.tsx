interface CardJogoProps {
    jogo: {
        nome: string;
        genero: string;
        horasJogadas: number;
        status: 'Backlog' | 'Jogando' | 'Zerado';
    }
}

export function CardJogo({ jogo }: CardJogoProps) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', minWidth: '200px' }}>
            <h3>{jogo.nome}</h3>
            <p>Gênero: {jogo.genero}</p>
            <p>Horas: {jogo.horasJogadas}</p>
            <p>Status: <strong>{jogo.status}</strong></p>
        </div>
    )
}