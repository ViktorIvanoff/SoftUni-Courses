function solve( {method, uri, version, message} ) {

    // Write a function that validates an HTTP request object. The object has the properties method, uri, version, and message. Your function will receive the object as a parameter and has to verify that each property meets the following requirements:
    // •	method - can be GET, POST, DELETE or CONNECT
    // •	uri - must be a valid resource address or an asterisk (*); a resource address is a combination of alphanumeric characters and periods; all letters are Latin; the URI cannot be an empty string
    // •	version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
    // •	message - may contain any number of non-special characters (special characters are <, >, \, &, ', ")
    // If a request is valid, return it unchanged. 
    // If any part fails the check, throw an Error with the message "Invalid request header: Invalid {Method/URI/Version/Message}". 
    // Replace the part in curly braces with the relevant word. Note that some of the properties may be missing, in which case the request is invalid. Check the properties in the order in which they are listed above. If more than one property is invalid, throw an error for the first encountered.
    
// save methods in an array
const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
// save version in an array
const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

// save uri regex
const uriRegex = /(^[\w.]+$)/;
// save message regex
const messageRegex = /([<>\\&'"])/;

// check if input method is in methods array
if(!method || !methods.includes(method)) {
    // if its not, throw error
    throw new Error('Invalid request header: Invalid Method');
}

// check if uri is valid
else if(!uri || uri === '' || !uriRegex.test(uri) || !uri === '*') {
    // if its not, throw error
    throw new Error('Invalid request header: Invalid URI');
}

else if (!versions.includes(version)) {
    throw new Error('Invalid request header: Invalid Version');
}

else if(message === undefined || messageRegex.test(message)) {
    // if its not, throw error
    throw new Error('Invalid request header: Invalid Message');
}

else 

    return {
        method,
        uri,
        version,
        message
    }

}
// solve(
//     {
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
//   }
//   );

//   console.log(solve({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }
//   )); 


  solve({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }
  );