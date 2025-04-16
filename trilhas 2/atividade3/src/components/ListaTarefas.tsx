import { useState } from "react";
import "./Lista.css";

interface ListaTarefasProps {
    tarefasIniciais: string[];
}

function ListaTarefas({ tarefasIniciais }: ListaTarefasProps) {
    const [tarefas, setTarefas] = useState<string[]>(tarefasIniciais);
    const [novaTarefa, setNovaTarefa] = useState<string>("");

    const adicionarTarefa = () => {
        if (novaTarefa.trim()) {
            setTarefas([...tarefas, novaTarefa]);
            setNovaTarefa("");
        }
    };

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
            <input
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Adicione uma nova tarefa"
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
        </div>
    );
}

export default ListaTarefas;