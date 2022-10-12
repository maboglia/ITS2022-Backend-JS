const URL = "http://localhost/webservice/aggiungi.php";
fetch(URL, {

    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        product: 'iphone'
    })
})
    .then((res) => res.json())
    .then((res) => {

        console.log('prova ' + res.product);
    });

