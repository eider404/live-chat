function SingUp(){
    let formSingUp = document.querySelector( '#form-sing-up' )

    const obj = {}
    new FormData( formSingUp ).forEach( ( value, key ) => obj[ key ] = value )

    fetch( `http://localhost:3000/sign-up/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( obj )
            })
            .then(res => res.json())
            .then( data =>{
                document.querySelector("#respuesta").innerHTML= JSON.stringify(data.mensaje) 
                //generarMsg(data);
            })
            .catch(err => console.log(err));
}

//Sing In
function SingIn(){
    let formSingIn = document.querySelector( '#form-sing-in' )

    const obj = {}
    new FormData( formSingIn ).forEach( ( value, key ) => obj[ key ] = value )

    fetch( `http://localhost:3000/sign-in/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( obj )
            })
            .then(res => res.json())
            .then( data =>{
                document.querySelector("#respuesta").innerHTML= JSON.stringify(data.mensaje) 
                //syntax
                localStorage.setItem('token', data.token)
                //generarMsg(data);
            })
            .catch(err => console.log(err));
}


//tener los mensajes
function GetMessages(){
    fetch( `http://localhost:3000/chat/`, {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then( data =>{
                generarMsg(data);
            })
            .catch(err => console.log(err));
}
function generarMsg(data){
    
    if(data.length != valorAnterior.length){
        //return console.log("es igual");
        data.sort((user1, user2)=>{
            if(user1.date < user2.date){
                return -1;
            }
        })
        document.querySelector("#respuesta").innerHTML= ''
        for(let valor of data){
            document.querySelector("#respuesta").innerHTML += `
                <div class="message"> 
                    <p class= "user">${valor.userId_fk}</p>
                    <p class= "text">${valor.text}</p>
                </div>
            `
        }
        document.getElementById('respuesta').scrollTop=document.getElementById('respuesta').scrollHeight;
        valorAnterior = data;
    }
    
}


//Enviar mensaje
function SendMessage(){
    let formSendMessage = document.querySelector( '#form-send-message' )

    const obj = {}
    new FormData( formSendMessage ).forEach( ( value, key ) => obj[ key ] = value )

    fetch( `http://localhost:3000/chat/`, {
                method: 'POST',
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( obj )
            })
            .then(res => res.json())
            .then( data =>{
                document.querySelector("#isSended").innerHTML= JSON.stringify(data.mensaje) 
                //generarMsg(data);
            })
            .catch(err => console.log(err));
}