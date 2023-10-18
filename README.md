# modules-common

# Otrzymujemy i wyprowadzamy całą listę kontaktów w postaci tabeli (console.table)

node index.js --action list
lub
npm run start -- -a list
Uwaga!
npm run start -a list niestety nie działa, trzeba dodać --
np:
npm run start -- -a list //odpala listę

# Otrzymujemy kontakt po id

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

# Dodajemy kontakt

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

# Usuwamy kontakt

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH

Print screeny pokazujące jak działa aplikacja wzięte z terminala VSC można znaleźć pod linkiem:
https://magdalena-mielni.imgbb.com
