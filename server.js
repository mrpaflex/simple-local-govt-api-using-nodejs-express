const expressfile = require('express');

const app = expressfile();//the app is just express in this case
const cors = require('cors')
app.use(cors());

const port = 2000;
///set a server to hear request and send a response


const aks ={
    'oruk anam':{
        'polution': 349000,
        'head quarter': 'ikot ibratam',
        'landmark': '498008 hectare',
        'number of villages': 71,
        'year of creation': 1857,
        'chairman': 'Dr. Felix'
    },
    'ikot abasi':{
        'polution': 352010,
        'head quarter': 'ikot abasi',
        'landmark': '490108 hectare',
        'number of villages': 41,
        'year of creation': 3237,
        'chairman': 'Gabrie Inyang'
    },

    'abak':{
        'polution': 49086,
        'head quarter': 'ediene abak',
        'landmark': '578002 hectare',
        'number of villages': 36,
        'year of creation': 1937,
        'chairman': 'Mr. Joseph Edem'
    },

    'not':{
        'polution': 'there no such local government in akwa ibom state, do you mean abak?'

    }

}
app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:choice', (request, response)=>{
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

