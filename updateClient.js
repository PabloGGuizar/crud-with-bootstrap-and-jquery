import { getData } from './data.js';

export function updateClient(client) {

      const clients = getData();
      const clientId = $(client).val();
      clients.filter(client => {
        if (client.id == clientId) {
          $('#id').val(client.id);
          $('#name').val(client.name); 
          $('#phone').val(client.phone); 
          $('#email').val(client.email); 
        }
      });
      
}