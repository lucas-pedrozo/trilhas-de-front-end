import { useState } from "react";
import "./Saudacao.css";

interface SaudacaoProps {
    nameInicial: string;
}

function Saudacao({ nameInicial }: SaudacaoProps) {
    const [nome, setNome] = useState<string>(nameInicial);

    return (
        <div>
            <h1>Olá, {nome}!</h1>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
            />
        </div>
    );
}

export default Saudacao;