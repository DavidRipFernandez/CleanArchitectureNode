import { useState, useEffect } from 'react';
import { createUser, updateUser } from '../../services/authService';

function UserForm({ userToEdit, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Si estamos editando, llena el formulario
  useEffect(() => {
    if (userToEdit) {
      setFormData({
        name: userToEdit.name,
        email: userToEdit.email,
        password: '' // No mostramos la contraseña existente
      });
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userToEdit) {
        await updateUser(userToEdit.id, formData);
      } else {
        await createUser(formData);
      }
      onSuccess(); // Recarga la lista o cierra el modal
    } catch (error) {
      alert('Error al guardar');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          {userToEdit ? 'Nueva Contraseña (opcional)' : 'Contraseña'}
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
          required={!userToEdit} // Solo requerido para crear
          minLength="6"
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        {userToEdit ? 'Actualizar' : 'Crear'}
      </button>
    </form>
  );
}

export default UserForm;