document.querySelector('#get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', ` https://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function (e) {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';

      if (response.type === 'success') {
        response.value.forEach(function(jokes) {
          output += `<li>${jokes.joke}</li>`
        });
      }else{
        output += '<li>Something Went Wrong';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }
  xhr.send();
  document.querySelector('.loading').style.display = 'block';
  document.querySelector('.jokes').style.display = 'none';

  setTimeout(results, 2000);
  e.preventDefault();
 
  
}

function results() {
  document.querySelector('.loading').style.display = 'none';

  document.querySelector('.jokes').style.display = 'block';
};