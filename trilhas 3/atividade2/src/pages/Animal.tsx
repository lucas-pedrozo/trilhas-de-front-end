// src/pages/Animal.tsx
import { useNavigate, useParams } from "react-router-dom";

const Animal = () => {
    const { name } = useParams<{ name: string }>();
    const navigate = useNavigate();

    return (
        <main
            style={{
                minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto',
            }}
        >
            <div style={{
                padding: '2rem', fontFamily: 'Arial', backgroundColor: '#e5e5e5', maxWidth: '500px', height: '200px', margin: '0 auto', borderRadius: '20px',
            }}>
                <h1>Animal</h1>
                <p>O nome do animal é: <strong>{name}</strong></p>

                <div style={{ marginTop: '20px' }}>
                    <button style={{
                        padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px',
                    }}
                        onClick={() => navigate('/')}>Home</button>
                </div>
            </div >
        </main>
    );
};

export default Animal;
