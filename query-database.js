import outputLog from "./output-log.js";

export default function queryDatabase(connection, query, callback, endConnectionOnCallbackEnabled, endConnectionOnErrorEnabled) {
	connection.query(query, (error, results, fields) => {
		if (error) {
			outputLog(error, "error");
			if (endConnectionOnErrorEnabled) connection.end();
			return;
		} else {
			callback(results, fields);
			if (endConnectionOnCallbackEnabled) connection.end();
		}
	});
}