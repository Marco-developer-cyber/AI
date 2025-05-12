import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';
import './/Styles/profile.css';

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [photoURL, setPhotoURL] = useState('https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) {
        setUser(currentUser);
        
        // Проверяем наличие фото пользователя
        if (currentUser.photoURL) {
          setPhotoURL(currentUser.photoURL);
        } else {
          // Пробуем загрузить дефолтный аватар из Storage
          const storage = getStorage();
          const defaultAvatarRef = ref(storage, 'defaults/avatar.png');
          
          getDownloadURL(defaultAvatarRef)
            .then(url => setPhotoURL(url))
            .catch(() => {
              // Если аватар не найден, используем fallback
              console.log('Используется fallback аватар');
            });
        }
      }
    });

    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return <div className="loading-screen">Loading user data...</div>;
  }

  if (!user) {
    return (
      <div className="not-authorized">
        <h2>Not Authorized</h2>
        <p>Please <Link to="/login">login</Link> to view your profile</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>USER PROFILE</h1>
      </div>

      <div className="profile-content">
        <div className="avatar-section">
          <div className="avatar-wrapper">
            <img 
              src={photoURL} 
              alt="User Avatar"
              className="user-avatar"
              onError={() => setPhotoURL('https://cdn-icons-png.flaticon.com/512/3135/3135715.png')}
            />
          </div>
        </div>

        <div className="user-details">
          <div className="detail-row">
            <span className="detail-label">Username:</span>
            <span className="detail-value">{user.displayName || 'Not set'}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{user.email || 'Not provided'}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">User ID:</span>
            <span className="detail-value uid">{user.uid}</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="edit-button">Edit Profile</button>
          <Link to="/logout" className="logout-link">Sign Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;