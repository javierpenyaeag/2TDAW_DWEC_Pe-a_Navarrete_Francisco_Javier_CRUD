"use strict"

const menu=[
    {
        "nombre":"BMW Serie 3",
        "puertas":"5",
        "imagen":"https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/BMW-M340i_2020-C01.jpg?itok=9ixNUuh4",
        "descripcion":"El nuevo BMW Serie 3 arranca y deja todo atrás al instante. Esta berlina deportiva definitiva se mueve con motores aún más potentes y eficientes. Te Gusta Conducir. Concesionarios BMW. Promociones BMW. Modelos: Series, Series M, Series X, Series i, Híbridos",
        "categoria":"S",
        "precio":30500.250,
        "enlace":"https://www.bmw.es/es/informacion/promociones/ofertas/select/serie-3-berlina.html?tl=sea-gl-abus-mix-miy-.-sech-BMW_S3_Precio_BR-.-.-vn-.-.&gclid=EAIaIQobChMI-7KJ4PvV8wIVzNnVCh3nawAwEAAYASAAEgLpDvD_BwE",
        "disponibilidad": true,
        "llegada":"2023-10-23"
    },
    {
        "nombre":"BMW X1",
        "puertas":"3",
        "imagen":"https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2019/11/bmw-x1.jpg",
        "descripcion":"Elegancia, amplitud y versatilidad se combinan para formar el BMW X1. Elige entre nuestras distintas gamas de acabados y disfruta del auténtico rendimiento. Calidad y diseño. Comodidad y funcionalidad. BMW Connected Drive. Elevación en los asientos",
        "categoria":"W",
        "precio":48000.525,
        "enlace":"https://www.bmw.es/es/coches-bmw/x-series/X1/2019/presentacion.html?tl=sea-gl-abus-mix-miy-.-sech-BMW_X1_Marca_EX-.-.-vn-.-.&gclid=EAIaIQobChMInMmpzvzV8wIVV4XVCh14uQ7kEAAYASAAEgLJB_D_BwE",
        "disponibilidad": false,
        "llegada":"2021-11-10"  
    },
    {
        "nombre":"BMW X3",
        "puertas":"5",
        "imagen":"https://i.blogs.es/614975/bmw-x3-xdrive30e_/1366_2000.jpg",
        "descripcion":"Lo mejor de un SUV con su aspecto deportivo y su experiencia de conducción única. Hace patente que existe una gran diferencia en cómo llegas a tu destino. Promociones BMW. Concesionarios BMW. Te Gusta Conducir. Modelos: Series, Series M, Series X, Series i.",
        "categoria":"X",
        "precio":51000.550,
        "enlace":"https://www.bmw.es/es/coches-bmw/x/X3/2021/presentacion.html",
        "disponibilidad":false,
        "llegada":"2021-11-01"
    },
    {
        "nombre":"BMW X4",
        "puertas":"3",
        "imagen":"https://www.diariomotor.com/imagenes/picscache/375x250c/bmw-x4-2021-0621-006_375x250c.jpg",
        "descripcion":"El BMW perfecto para el mundo de aquellos que nunca dejan de buscar. El BMW X4 Combina la robustez de un vehículo X con la fuerza atlética de un deportivo. Te Gusta Conducir. Concesionarios BMW. Promociones BMW. Modelos: Deportivos, Lujo, Familiares.",
        "categoria":"X",
        "precio":53000.800,
        "enlace":"https://www.bmw.es/es/coches-bmw/x/X4/2021/vision-general-bmw-X4.html",
        "disponibilidad": true,
        "llegada":"2021-09-25"
    },
    {
        "nombre":"BMW X5",
        "puertas":"5",
        "imagen":"https://www.diariomotor.com/imagenes/picscache/1920x1600c/bmw-x5-2019-2_1920x1600c.jpg",
        "descripcion":"Elige la oferta que mejor se adapte a ti y personaliza la cuota, ¡con la Garantía de BMW! Mantente Perfectamente Conectado con las Últimas Tecnologías de Conectividad de BMW. Te Gusta Conducir. Promociones BMW. Concesionarios BMW. Modelos: Series, Series M.",
        "categoria":"X",
        "precio":51000.300,
        "enlace":"https://www.bmw.es/es/coches-bmw/x/X5/2021/presentacion.html",
        "disponibilidad": true,
        "llegada":"2021-09-15"
    },
    {
        "nombre":"BMW X6",
        "puertas":"5",
        "imagen":"https://noticias.coches.com/wp-content/uploads/2019/07/BMW-X6-2020-dinamicas-13.jpg",
        "descripcion":"El BMW perfecto para el mundo de aquellos que siempre se superan. El BMW X6 presenta más que nunca un carácter independiente y seguro de sí mismo. Te Gusta Conducir. Concesionarios BMW. Promociones BMW. Modelos: Series, Series M, Series X, Series i.",
        "categoria":"X",
        "precio":55000.900,
        "enlace":"https://www.bmw.es/es/coches-bmw/x/X6/2021/presentacion.html",
        "disponibilidad": false ,
        "llegada":"2021-11-27"
    },
    {
        "nombre":"BMW Z4",
        "puertas":"2",
        "imagen":"https://www.autonocion.com/wp-content/uploads/2019/05/BMW-Z4-M40i-por-D%C3%A4hler-27-930x622.jpg",
        "descripcion":"10 segundos. Es lo rápido que se abre y se cierra la capota del BMW Z4 Roadster. Vive emocionantes experiencias de conducción a cielo abierto. Promociones BMW. Concesionarios BMW. Te Gusta Conducir. Modelos: Deportivos, Lujo, Familiares.",
        "categoria":"Z",
        "precio":48000.320,
        "enlace":"https://www.bmw.es/es/coches-bmw/z/roadster/2018/presentacion.html?tl=sea-gl-abus-mix-miy-.-sech-BMW_Z4_Marca_EX-.-.-vn-.-.&gclid=EAIaIQobChMI4p2K4f_V8wIVCdtRCh3NvQ1IEAAYASAAEgKwXvD_BwE",
        "disponibilidad": true,
        "llegada":"2021-10-10"
    },
    {
        "nombre":"BMW i3",
        "puertas":"2",
        "imagen":"https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/BMW_i3_003.jpg?itok=it_hmcTS",
        "descripcion":"Descubre un diseño innovador y un dinamismo de conducción electrizante. Descubre todos los detalles del BMW i3 en nuestra web oficial BMW. Te Gusta Conducir. Promociones BMW. Concesionarios BMW. Modelos: Series, Series M, Series X, Series i, Híbridos.",
        "categoria":"i",
        "precio":20000.120,
        "enlace":"https://www.bmw.es/es/coches-bmw/bmw-i/i3/2021/presentacion.html",
        "disponibilidad": true ,
        "llegada":"2021-10-10"
    },
    {
        "nombre":"BMW Serie 8",
        "puertas":"3",
        "imagen":"https://www.diariomotor.com/imagenes/2018/06/bmw-serie-8-filtrado-1.jpg",
        "descripcion":"Empuje. Control. Comodidad. Diseño único, excepcional agilidad e impresionantes motores. Único hasta en el último detalle. Rendimiento espectacular con la más elevada exclusividad. Te Gusta Conducir. Concesionarios BMW. Promociones BMW.",
        "categoria":"S",
        "precio":55000.220,
        "enlace":"https://www.bmw.es/es/coches-bmw/serie-8/coupe/2019/presentacion.html?tl=sea-gl-abus-mix-miy-.-sech-BMW_S8_Marca_EX-.-.-vn-.-.&gclid=EAIaIQobChMIztOy4IHW8wIVSYXVCh1j9Q28EAAYASAAEgKyKPD_BwE",
        "disponibilidad": false,
        "llegada":"2021-11-27"
    },
    {
        "nombre":"BMW Serie 4",
        "puertas":"5",
        "imagen":"https://www.km77.com/images/medium/6/1/9/5/bmw-430i-gran-coupe-2022-frontal-lateral.356195.jpg",
        "descripcion":"Con avanzandos sistemas de asistencia al conductor e innovadores servicios digitales. Disfruta de una experiencia de conducción con una conectividad excepcional con BMW. Te Gusta Conducir. Promociones BMW. Concesionarios BMW. Modelos: Series, Series M.",
        "categoria":"H",
        "precio":57000.290,
        "enlace":"https://www.bmw.es/es/coches-bmw/serie-4/coupe/2021/presentacion.html",
        "disponibilidad": false,
        "llegada":"2021-11-27"
    }
]