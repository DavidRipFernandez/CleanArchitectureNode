import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getUsers } from '../../services/authService';
import UserItem from './UserItem';
import UserForm from './UserForm';

function UserList() {
  const { logout } = useAuth();
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData.data);
    } catch (error) {
      console.error('Error cargando usuarios:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestión de Usuarios</h1>
        <button onClick={logout} className="btn btn-danger">
          Cerrar Sesión
        </button>
      </div>

      <button 
        onClick={() => setShowForm(true)} 
        className="btn btn-success mb-4"
      >
        + Nuevo Usuario
      </button>

      {showForm && (
        <UserForm 
          onSuccess={() => {
            setShowForm(false);
            fetchUsers();
          }} 
        />
      )}

      <div className="row">
        {users.length > 0 ? (
          users.map(user => (
            <div key={user.id} className="col-md-6 mb-3">
              <UserItem user={user} onUpdate={fetchUsers} />
            </div>
          ))
        ) : (
          <div className="alert alert-info">
            No hay usuarios registrados
          </div>
        )}
      </div>
    </div>
  );
}

export default UserList;