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