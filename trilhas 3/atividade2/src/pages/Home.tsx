// src/pages/Home.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [animal, setAnimal] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (animal.trim()) {
            navigate(`/animal/${animal}`);
        }
    };

    return (
        <main style={{
            minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto",
        }}>
            <div style={{
                padding: "2rem", fontFamily: "Arial",
                backgroundColor: "#e5e5e5", maxWidth: "500px", height: "200px", margin: "0 auto", borderRadius: "20px", border: "1px solid #ccc",
                display: "flex", flexDirection: "column", alignItems: "center"
            }}>
                <h1>Digite o nome de um animal</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        style={{
                            padding: "10px", borderRadius: "5px", border: "1px solid #ccc"
                        }}
                        type="text"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                        placeholder="Ex: cachorro"
                    />
                    <button type="submit" style={{
                        marginLeft: "10px", padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px"
                    }}>
                        Enviar
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Home;
