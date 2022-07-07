import { createClient } from './createClient.js';
import { readClients } from './readClients.js';
import { updateClient } from './updateClient.js';
import { deleteClient } from './deleteClient.js';

$(function() {
  
  readClients();

  $('#client-form').submit(function(event) {
    createClient();
    readClients();
  });  
  
  $(document).on('click', '.btn-edit', function () {
    updateClient($(this));
  });

  $(document).on('click', '.btn-delete', function() {
    deleteClient($(this));
    readClients();
  });
});