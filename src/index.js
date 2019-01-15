const onClickLazyLoading = () => {
    console.log('onClickLazyLoading')

    var myBundl = () => import('./result');
    myBundl()
        .then(response => {
            response.default();
        });
}

document.getElementById('btn-lazy-loading').addEventListener('click', onClickLazyLoading);
