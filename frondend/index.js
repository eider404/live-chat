function SingUp(){
    let formSingUp = document.querySelector( '#form-sing-up' )

    const obj = {}
    new FormData( formSingUp ).forEach( ( value, key ) => obj[ key ] = value )

    fetch( `http://localhost:3000/sing-up`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( obj )
            })
            .then(res => res.json())
            .then( data =>{
                console.log('enviado')
            })
}


