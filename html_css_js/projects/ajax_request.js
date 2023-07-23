const httpRequest = new XMLHttpRequest();
const url = "https://1.1.1.1/cdn-cgi/trace";
httpRequest.onreadystatechange = () => {};
httpRequest.open("GET", url, true);
httpRequest.send();

// 0 (uninitialized) or (request not initialized)
// 1 (loading) or (server connection established)
// 2 (loaded) or (request received)
// 3 (interactive) or (processing request)
// 4 (complete) or (request finished and response is ready)

if (httpRequest.readyState === XMLHttpRequest.DONE) {
  // Everything is good, the response was received.
} else {
  // Not ready yet.
}
if (httpRequest.status === 200) {
  // Perfect!
} else {
  // There was a problem with the request.
  // For example, the response may have a 404 (Not Found)
  // or 500 (Internal Server Error) response code.
}
