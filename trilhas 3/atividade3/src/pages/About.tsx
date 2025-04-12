import { useNavigate } from "react-router-dom";

function About() {

    const navigate = useNavigate();

    return (
        <main style={{
            minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto',
        }}>
            <h1 style={{
                textAlign: 'center', fontSize: '5rem'
            }}>About</h1>
            <button onClick={() => navigate('/')}
                style={{
                    padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px',
                }}
            >Home</button>
        </ main>
    );
}

export default About;