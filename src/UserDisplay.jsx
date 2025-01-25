import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';

const UserDisplay = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        return () => unsubscribe();  // Unsubscribe when closed
    }, []);

    if (!user) {
        return <li className="nav-item"><Link to="login" className="nav-link">Login</Link></li>;
    }

    return (
        <Link to="login" className='nav-user'>
            <div className='user-outer-container'>
                <span className='sub'>User: </span>
                <div className='user-inner-container'>
                    <span className='white'>{user.displayName}</span>
                    <img src={user.photoURL} alt={user.displayName} style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }} />
                </div>
            </div>
        </Link>
    );
};

export default UserDisplay;
