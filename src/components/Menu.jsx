import { Link } from 'react-router-dom';

function Menu() 
{
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/bio">Bio</Link>
                <Link to="/known-pictures">Known Picture</Link>
                <Link to="/gallery">Gallery</Link>
            </nav>
        </>
    )
}

export default Menu;