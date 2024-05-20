const mysql = require('mysql2/promise');
const iniparser = require('iniparser'); // pour lire des fichier ini
//Initialisation du fichier Ini
const configDB = iniparser.parseSync('./db.ini') //extrait les info de db.ini

// Création du pool de connexions pour réutiliser les connexions existantes
const pool = mysql.createPool({
  host: configDB['dev']['host'],
  user: configDB['dev']['user'],
  password: configDB['dev']['password'],
  database: configDB['dev']['database'],
  waitForConnections: configDB['dev']['waitForConnections'],
  connectionLimit: configDB['dev']['connectionLimit'],
  queueLimit: configDB['dev']['queueLimit']
});

// Exporter le pool pour une utilisation dans d'autres fichiers
module.exports = pool;