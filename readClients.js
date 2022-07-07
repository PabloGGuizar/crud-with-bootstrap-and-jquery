import { getData } from './data.js';

export function readClients() {
  let clients =  getData();

  if (clients.length > 0) {
    let template = '';
    clients.forEach(client => {
      template += `
        <tr>
          <td>${client.id}</td>
          <td>${client.name}</td>
          <td>${client.phone}</td>
          <td>${client.email}</td>
          <td>
            <button class="btn-edit btn btn-secondary" value="${client.id}">
              <span class="material-icons">edit</span>
            </button>
            <button class="btn-delete btn btn-warning" value="${client.id}">
              <span class="material-icons">delete</span>
            </button>
          </td>
        </tr>
      `;
    });

    $('#clients').html(template);
  }
}