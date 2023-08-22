const expressfile = require('express');

const app = expressfile();//the app is just express in this case
const cors = require('cors')
app.use(cors());

const port = 2000;
///set a server to hear request and send a response


const aks ={
    'oruk anam':{
        'populution': 349000,
        'headquarter': 'ikot ibratam',
        'landmark': '498008 hectare',
        'numberofvillages': 71,
        'yearofcreation': 1857,
        'chairman': 'Dr. Felix'
    },
    'ikot abasi':{
        'populution': 352010,
        'headquarter': 'ikot abasi',
        'landmark': '490108 hectare',
        'numberofvillages': 41,
        'yearofcreation': 3237,
        'chairman': 'Gabrie Inyang'
    },

    'abak':{
        'populution': 49086,
        'headquarter': 'ediene abak',
        'landmark': '578002 hectare',
        'numberofvillages': 36,
        'yearofcreation': 1937,
        'chairman': 'Mr. Joseph Edem'
    },

    'not':{
        'populution': 'unknown',
        'headquarter': 'can\'t find',
        'landmark': 'unknown',
        'numberofvillages': 'unknown',
        'yearofcreation': 'no year found',
        'chairman': 'unknown'
    }

}
app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/:choice', (request, response)=>{
    const lga = request.params.choice.toLowerCase()
    if (aks[lga]) {
        response.json(aks[lga])
    }else{
        response.json(aks['not']);
    }
    
    //response.json(aks);
})

app.listen( process.env.port || port, ()=>{
    console.log(`this server is running  on port ${port}`);
})

