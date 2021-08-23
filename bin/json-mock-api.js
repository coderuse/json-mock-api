require('dotenv').config();
const jsonMockApi = require('../index');

const options = {
	port: process.env.PORT,
	directory: process.env.DIRECTORY,
	middleware: process.env.MIDDLEWARE.split(',')
};

jsonMockApi(options.port, options.directory || '', options.middleware || [])