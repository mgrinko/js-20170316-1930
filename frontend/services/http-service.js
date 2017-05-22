export class HttpService {
  static getJSON(url) {
    return new Promise(
      (resolve, reject) => {


        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onload = () => {
          if (xhr.status !== 200) {
            reject( xhr.status + ': ' + xhr.statusText );
          } else {
            let data = JSON.parse(xhr.responseText);

            resolve(data);
          }
        };

        xhr.onerror = (error) => {
          reject(error)
        };

        xhr.send();


      }
    );
  }
}
