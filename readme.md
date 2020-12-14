# Installation

Télécharger Lando: https://github.com/lando/lando/releases/tag/v3.0.23

Pour installer les certificats SSL : https://docs.lando.dev/config/security.html#trusting-the-ca

Placez vous dans le projet : 

`cp .env.example .env`

`lando start`

Les commandes :


```
lando composer          Runs composer commands
lando console           Runs console commands
lando db-export [file]  Exports database from a service into a file
lando db-import <file>  Imports a dump file into database service
lando php               Runs php commands

lando redis-cli
lando yarn
```

