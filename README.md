Iniciar o Webservice:

Execute o comando abaixo para iniciar o banco de dados MongoDB:

mongod --bind_ip=$IP --nojournal

Após executar abra outro terminal e realize consultas com o comando:

mongo

Inicie o Webservice clicando em Run.

****BANCO DE DADOS PARADO E NAO INICIA*******
**Isso pode ocorrer quando o servidor para de maneira imprópria, como hibernação, queda de energia.
**Ocorre com frequencia no C9 pq é um servidor de desenvolvimento.

Para resolver esse problema execute o comando abaixo:

mongod --dbpath /data/db --repair

Após isso inicie o banco de dados:

mongod --bind_ip=$IP --nojournal
