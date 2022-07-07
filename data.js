export function getData() {  
  let data = sessionStorage.getItem('clients');
  let clients = [];

  if (!data) {
    return clients;
  }
  
  clients = JSON.parse(data);
  return clients;
}