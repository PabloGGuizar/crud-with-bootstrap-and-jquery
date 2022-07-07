import { getData } from './data.js';
import { readClients } from './readClients.js'; 

export function createClient(){

  let clients = getData();

  const postData = {
    id: $('#id').val() == '' ? Date.now() : $('#id').val(),
    name: $('#name').val(),
    phone: $('#phone').val(),
    email: $('#email').val()
  };

  if (clients.length > 0) {

    let index = -1;

    clients.forEach(client => {
      if (client.id == postData.id) {
        index = clients.indexOf(client);
      }
    });

    if (index >= 0) {
      clients.splice(index, 1, postData);
      $('#id').val('');
    } else {
      clients.push(postData);
    }

  } else {
    clients.push(postData);
  }

  let jsonstring = JSON.stringify(clients);
  sessionStorage.setItem('clients', jsonstring);

  $('#client-form').trigger( "reset");
  event.preventDefault();

}