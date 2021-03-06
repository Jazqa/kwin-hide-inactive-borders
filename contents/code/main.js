workspace.clientAdded.connect(addClient);

function init() {
  var clients = workspace.clientList();
  for (var i = 0; i < clients.length; i++) {
      addClient(clients[i]);
  }
}

function addClient(client) {
  client.activeChanged.connect(client, hideBars);
  if (client == workspace.activeClient) {
      client.noBorder = false;
  } else client.noBorder = true;
}

function hideBars() {
  if (this == workspace.activeClient) {
     this.noBorder = false;
  } else this.noBorder = true;
}

init();
