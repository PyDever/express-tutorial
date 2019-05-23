
require('dotenv').config()

const express = require('express'),
	app = express()

// these two imports help us perform server-side DOM 
const request = require('request')
const bodyParser = require('body-parser')

// these imports provide a database interface
const nosql = require('nosql') // NoSQL instead of PSQL
const db = nosql('./server/database.nosql')

/*
Objective 1-
build a GET route here and serve up the EJS file
	parse out from the URL the 'entry' variable and
	pass it into the EJS somewhere on the web-page
*/

/*
Objective 2-
build a POST route to load form data into the database
*/

/*
Objective 3-
start the server on port 3000
*/

/*
Security Settings Objectives-
Objective 4-
	Protect the GET route from XSS attacks
Objective 5-
	Protect the POST route from XSS attacks
Objective 6-
	Protect the web-server from
	cookie-stealing, cache-poisoning, clickjacking,
	and cross-site request forgery, and information-gathering
*/

