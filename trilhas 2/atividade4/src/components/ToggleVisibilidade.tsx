import { useState } from "react";
import "./style.css";

interface ToggleVisibilidadeProps {
    texto: string;
}

function ToggleVisibilidade({ texto }: ToggleVisibilidadeProps) {
    const [visivel, setVisivel] = useState<boolean>(true);

    return (
        <div>
            <button onClick={() => setVisivel(!visivel)}>
                {visivel ? "Ocultar" : "Mostrar"}
            </button>
            {visivel && <p>{texto}</p>}
        </div>
    );
}

export default ToggleVisibilidade;