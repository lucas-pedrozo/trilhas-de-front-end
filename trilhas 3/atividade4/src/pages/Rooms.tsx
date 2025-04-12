import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const Rooms = () => {

    const rooms = [
        { id: 1, name: 'Quarto Luxo' },
        { id: 2, name: 'Quarto Simples' },
        { id: 3, name: 'Suíte Master' }
    ];

    return (
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Quartos Disponíveis</h2>
            <ul style={{
                listStyleType: 'none',
                display: 'flex',
                justifyContent: 'space-around',
                margin: '0',
                padding: '0'
            }}>

                {rooms.map(room => (
                    <li key={room.id} style={{

                    }}>
                        <Link id='linkRooms'
                            to={`/rooms/${room.id}`}>
                            {room.name}
                        </Link>
                    </li>
                ))}

            </ul>
        </div >
    )
}

export default Rooms;
