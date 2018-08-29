
document.getElementsByClassName('footer__up')[0].onclick =  function () {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollTo(0, 0);
    }
};

document.getElementsByClassName('view-down')[0].onclick =  function () {
    document.location.href='#main'
};