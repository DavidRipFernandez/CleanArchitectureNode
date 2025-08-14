import { useState } from 'react';
import { deleteUser } from '../../services/authService';
import UserForm from './UserForm';

function UserItem({ user, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    if (window.confirm(`¿Eliminar a ${user.name}?`)) {
      await deleteUser(user.id);
      onUpdate(); // Notifica al padre para actualizar la lista
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {isEditing ? (
          <UserForm 
            userToEdit={user} 
            onSuccess={() => {
              setIsEditing(false);
              onUpdate();
            }} 
          />
        ) : (
          <>
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.email}</p>
            <div className="d-flex gap-2">
              <button 
                onClick={() => setIsEditing(true)} 
                className="btn btn-sm btn-warning"
              >
                Editar
              </button>
              <button 
                onClick={handleDelete} 
                className="btn btn-sm btn-danger"
              >
                Eliminar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UserItem;