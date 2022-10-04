import React, { useEffect, useState } from 'react';
import { deleteUser, getAllUsers } from '../service/api';

export default function UserList() {
  const [userList, setUserList] = useState([]);

  // const dataTestId = (info) => `admin_manage__element-user-table-item-${info}`;

  useEffect(() => {
    const fetchUsers = async () => {
      const allUsers = await getAllUsers();
      setUserList(allUsers);
    };
    fetchUsers();
  }, [userList]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Exluir</th>
          </tr>
        </thead>
        <tbody>
          {
            userList.length > 0
            && userList.map((user, index) => (
              <tr key={ index }>
                <td
                  data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-name-${index}` }
                >
                  {user.name}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-email-${index}` }
                >
                  {user.email}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-role-${index}` }
                >
                  {user.role}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                >
                  <button
                    type="button"
                    onClick={ async () => {
                      deleteUser(user.id);
                      const allUsers = await getAllUsers();
                      setUserList(allUsers);
                    } }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
