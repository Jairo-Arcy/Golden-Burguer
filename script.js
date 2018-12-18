function fotoZoom(tipo) {
    if (tipo === 1) {
        var zom = document.getElementById('picanha');
        zom.style.width = '110%';
        zom.style.height = '110%';
        zom.style.transform = 'translate(-3%, -3%)';
    }
    if (tipo === 2) {
        var zom = document.getElementById('porcao');
        zom.style.width = '110%';
        zom.style.height = '110%';
        zom.style.transform = 'translate(-1%, -1%)';
    }
    if (tipo === 3) {
        var zom = document.getElementById('doce');
        zom.style.width = '110%';
        zom.style.height = '110%';
        zom.style.transform = 'translate(-3%, -3%)';
    }
    if (tipo === 4) {
        var zom = document.getElementById('lanche');
        zom.style.width = '110%';
        zom.style.height = '110%';
        zom.style.transform = 'translate(-3%, -3%)';
    }
    if (tipo === 5) {
        var zom = document.getElementById('comida');
        zom.style.width = '110%';
        zom.style.height = '110%';
        zom.style.transform = 'translate(-3%, -3%)';
    }
    if (tipo === 6) {
        var zom = document.getElementById('bebida');
        zom.style.width = '110%';
        zom.style.height = '110%';
        zom.style.transform = 'translate(-0%, -0%)';
    }
}

function fotoNormal(tipo) {
    if (tipo === 1) {
        var normal = document.getElementById('picanha');
        normal.style.width = '100%';
        normal.style.height = '100%';
    }
    if (tipo === 2) {
        var normal = document.getElementById('porcao');
        normal.style.width = '100%';
        normal.style.height = '100%';

    }
    if (tipo === 3) {
        var normal = document.getElementById('doce');
        normal.style.width = '100%';
        normal.style.height = '100%';

    }
    if (tipo === 4) {
        var normal = document.getElementById('lanche');
        normal.style.width = '100%';
        normal.style.height = '100%';

    }
    if (tipo === 5) {
        var normal = document.getElementById('comida');
        normal.style.width = '100%';
        normal.style.height = '100%';

    }
    if (tipo === 6) {
        var normal = document.getElementById('bebida');
        normal.style.width = '100%';
        normal.style.height = '100%';

    }


}