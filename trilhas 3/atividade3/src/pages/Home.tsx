import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <main onClick={() => navigate("/about")} style={{
            minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "0 auto",
        }}>
            <h1 style={{
                textAlign: "center", fontSize: "5rem"
            }}>Home</h1>

            <button style={{
                padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px",
            }}>About</button>
        </main>
    );
}

export default Home