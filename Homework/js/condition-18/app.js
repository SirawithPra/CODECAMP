let login = prompt('Enter username');
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' :
              '';
