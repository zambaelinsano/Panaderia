function validar(form){
    let CP=form.CP.value.trim();
    if (CP === "" || isNaN(CP) || CP <= 0) {
        alert("Ingrese un valor valido en orejas");
        return false;
    }
    if(CP>10){
        alert("Error, no puedes ingresar mas de 10 piezas por pan, si requieres una mayor cantidad visita una de nuestras sucursales")
    }
    let N=form.N.value.trim();
    if (N === "" || isNaN(N) || N <= 0) {
        alert("Ingrese un valor valido en orejas");
        return false;
    }
    if(N>10){
        alert("Error, no puedes ingresar mas de 10 piezas por pan, si requieres una mayor cantidad visita una de nuestras sucursales")
    }
    let cn=form.cn.value.trim();
    if (cn === "" || isNaN(cn) || cn <= 0) {
        alert("Ingrese un valor valido en orejas");
        return false;
    }
    if(cn>10){
        alert("Error, no puedes ingresar mas de 10 piezas por pan, si requieres una mayor cantidad visita una de nuestras sucursales")
    }
    let DC=form.DC.value.trim();
    if (DC === "" || isNaN(DC) || DC <= 0) {
        alert("Ingrese un valor valido en orejas");
        return false;
    }
    if(DC>10){
        alert("Error, no puedes ingresar mas de 10 piezas por pan, si requieres una mayor cantidad visita una de nuestras sucursales")
    }
    let Muer=form.Muer.value.trim();
    if (Muer === "" || isNaN(Muer) || Muer <= 0) {
        alert("Ingrese un valor valido en orejas");
        return false;
    }
    if(Muer>10){
        alert("Error, no puedes ingresar mas de 10 piezas por pan, si requieres una mayor cantidad visita una de nuestras sucursales")
    }
}