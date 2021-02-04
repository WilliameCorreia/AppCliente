export default function verificaDistancia(distancias) {
    var lat1 = distancias.coor1.latitude;
    var lon1 = distancias.coor1.longitude;
    var lat2 = distancias.coor2.latitude;
    var lon2 = distancias.coor2.longitude;
    let distancia;

    function Dist(lat1, lon1, lat2, lon2) {
        function rad(x) {
            return x * Math.PI / 180;
        }

        var R = 6378.137;//Radio de la tierra en km
        var dLat = rad(lat2 - lat1);
        var dLong = rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d.toFixed(0);
        // return d.toFixed(3);//Retorna tres decimales
    }

    distancia = Dist(lat1, lon1, lat2, lon2);//Retorna numero en Km
    return(+distancia);
}