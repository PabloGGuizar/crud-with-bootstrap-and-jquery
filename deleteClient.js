import { getData } from './data.js';
import { readClients } from './readClients.js';

export function deleteClient(client) {

    const clients = getData();
    const clientId = $(client).val();

    clients.filter((client, index) => {
      if (client.id == clientId) {
        clients.splice(index, 1);
      }
    });

    let jsonstring = JSON.stringify(clients);

    sessionStorage.setItem('clients', jsonstring);

}