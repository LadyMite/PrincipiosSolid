// Función de ejemplo que realizac una petición HTTP
function makeRequest(url, errorHandler) {
    fetch(url)
        .then(response => response.json())
        .catch(error => errorHandler.handle(error))
    }

// Podemos tener varias funciones para manejar errores
const consoleErrorHandler = function handle(error){
    console.log(error)
}

const externalErrorHandler = function handle(error){
    sendErrorToExternalService(error)
}
// Usando el principio de sustitución de Liskov, 
// podríamos pasar cualquier función manejadora de
// errores durante una request.
makeRequest(url, consoleErrorHandler);
makeRequest(url, externalErrorHandler);