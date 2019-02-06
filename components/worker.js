import Papa from 'papaparse';

onmessage = function(e) {
  Papa.parse(e.data, {
    header: true,
    error: (error, file) => {

    },
    complete: (results) => {
      postMessage(results);
    }
  });
}
