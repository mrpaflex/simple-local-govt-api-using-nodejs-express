

document.querySelector('#clickme').addEventListener('click', runthis);

  async function runthis(){
    const choice = document.querySelector('#choice').value;

const url = `/api/${choice}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        document.querySelector('#popu').innerText = data.populution;

        document.querySelector('#headquarter').innerText = data.headquarter;

        document.querySelector('#landmark').innerText = data.landmark;

        document.querySelector('#nov').innerText = data.numberofvillages;

        document.querySelector('#yoc').innerText = data.yearofcreation;

        document.querySelector('#chairman').innerText = `the current chairman is ${data.chairman}`;

        //document.querySelector('#show').innerText = data.['number of villages']; not working
    }catch(error){
        document.querySelector('#show').textContent = error;
    }

    
  }