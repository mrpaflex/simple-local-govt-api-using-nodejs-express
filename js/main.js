

document.querySelector('#clickme').addEventListener('click', runthis);

  async function runthis(){
    const choice = document.querySelector('#choice').value;

const url = `/api/${choice}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        document.querySelector('#show').innerText = data;
        //document.querySelector('#show').innerText = data.['number of villages']; not working
    }catch(error){
        document.querySelector('#show').textContent = error;
    }

    
  }