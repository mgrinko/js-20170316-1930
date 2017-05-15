class HTTPService {
  static sendRequest(url, successHandler, method = 'GET') {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    xhr.onload = () => {
      if (xhr.status !== 200) {
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
      } else {
        successHandler(JSON.parse(xhr.responseText));
      }
    };

    xhr.send();
  }
}