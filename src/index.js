const trololo = () => {
    console.log('onClick 1')

    var myBundl = () => import('./result');
    myBundl()
        .then(response => {
            response.default();
        });
}

document.getElementById('btn').addEventListener('click', trololo);
