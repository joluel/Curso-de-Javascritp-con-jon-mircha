                                                                console.warn('EJERCICIO N° 1');

//Funcion aninima auto - ejecutable.
(function(){
     console.log("Mi primer IIFE");   
})();

(function(d, w, c){
    console.log('Mi segunda IIFE');        
    console.log(d);
    console.log(w);
    c.log("Este es un console.log");
})(document, window, console);

//Version Crockford
((function () {
    console.log("Version crockford");
})());

//Version Unaria.
+function() {
    console.log("Version Unaria");
}();

//Version Facebook
!function(){
    console.log("Version Facebook");
}();

