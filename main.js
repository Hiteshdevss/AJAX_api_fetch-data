let req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/users/1');

req.onload = function () {
    if (req.status == 200) {
        let details = req.responseText;
        console.log(details);
        const object = JSON.parse(details);
        document.getElementById('userInfo').innerHTML = `
            <h1>Name: ${object.name}</h1> 
            <h2>UserName: ${object.username}</h2>`
    } else {
        console.log(`Request Failed`, req.status);
    }
}

req.onerror = function () {
    console.log(`Request Failed`);
}

req.send();