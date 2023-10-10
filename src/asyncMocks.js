const products=[
    {
        id: 1,
        category: "books",
        name: "This Changes Everything: Capitalism vs. The Climate",
        price: 15.99,
        description: "This book explores the relationship between capitalism and climate change, arguing that economic systems need to change to effectively address the climate crisis.",
        image: "https://m.media-amazon.com/images/I/71JCKqKd6YL._AC_UF1000,1000_QL80_.jpg",
        stock: 20
    },
    {
        id: 2,
        category: "books",
        name: "The Sixth Extinction: An Unnatural History",
        price: 14.95,
        description: "This book discusses the history of life on Earth and the ongoing biodiversity crisis, exploring how human activity is causing a mass extinction event.",
        image: "https://m.media-amazon.com/images/I/815oY6IDdpL._AC_UF1000,1000_QL80_.jpg",
        stock: 20
    },
    {
        id: 3,
        category: "books",
        name: "This Is The Way the World Ends",
        price: 18.99,
        description: "The book examines the potential future scenarios of climate change impact on America, discussing the intersection of climate science, politics, and economics.",
        image: "https://m.media-amazon.com/images/I/91OcY6ppo5L._AC_UF1000,1000_QL80_.jpg",
        stock: 20
    },
    {
        id: 4,
        category: "books",
        name: "The Uninhabitable Earth: Life After Warming",
        price: 22.50,
        description: "This book explores the possible future consequences of climate change, painting a vivid picture of the potential challenges humanity might face due to global warming.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_5pOsBhLHT4oX4msTQ-hXPFV7fgIjDZAMA&usqp=CAU",
        stock: 20
    },
    {
        id: 5,
        category: "bikes",
        name: "EcoRide Commuter Bike",
        price: 599.99,
        description: "La EcoRide Commuter Bike es una bicicleta diseñada para minimizar su impacto en el medio ambiente. Hecha de materiales reciclados y energía renovable, es una opción sostenible para los viajes diarios.",
        image: "https://admin.ecoride.se/wp-content/uploads/2023/05/thumbnails/ambassadorwebb600x600-800x800.png",
        stock: 20
    },
    {
        id: 6,
        category: "bikes",
        name: "GreenCycle Hybrid Bicycle",
        price: 699.95,
        description: "La GreenCycle Hybrid Bicycle es una bicicleta híbrida que combina la potencia del pedaleo con la asistencia eléctrica. Con una batería recargable y componentes respetuosos con el medio ambiente, es perfecta para quienes buscan una alternativa ecológica para los desplazamientos urbanos. Su diseño es ergonómico.",
        image: "https://cdn.trendhunterstatic.com/thumbs/greencycle-2.jpeg?auto=webp",
        stock: 20
    },
    {
        id: 7,
        category: "bikes",
        name: "EnviroPedal Eco-Friendly Mountain Bike",
        price: 899.00,
        description: "La EnviroPedal Eco-Friendly Mountain Bike es una bicicleta de montaña diseñada con la naturaleza en mente. Sus neumáticos de bajo impacto ambiental y su estructura de aluminio reciclado la convierten en una opción ecológica para los entusiastas del ciclismo de montaña. Con un sistema de suspensión suave, ofrece un viaje cómodo.",
        image: "https://cdn-apeka.nitrocdn.com/xKltwSUnXEmUnpFfLKhCPoBNktqaOXPr/assets/images/optimized/rev-293e035/discerningcyclist.com/wp-content/uploads/2023/04/1.-Bamboocycles-Texcoco-GRAVEL-1-678x450.jpg",
        stock: 20
    },
    {
        id: 8,
        category: "bikes",
        name: "SolarCycle Electric Cargo Bike",
        price: 1299.99,
        description: "La SolarCycle Electric Cargo Bike es una bicicleta de carga eléctrica alimentada por energía solar. Con capacidad para transportar cargas pesadas y un motor eléctrico eficiente, es una opción práctica y ecológica para las necesidades de transporte diario. Su estructura duradera y su sistema de frenos potentes garantizan seguridad.",
        image: "https://electricbikereport.com/wp-content/uploads/2014/11/solar-electric-bike3.jpg",
        stock: 20
    },
    {
        id: 9,
        category: "gadgets",
        name: "EcoCharge Solar Power Bank",
        price: 49.99,
        description: "Este power bank utiliza energía solar para cargar dispositivos móviles. Hecho de materiales reciclados, cuenta con una batería de larga duración y es resistente al agua, siendo perfecto para viajeros y entusiastas del aire libre.",
        image: "https://evolveelevate.store/cdn/shop/files/Screenshot_20230511_143740_AliExpress.jpg?v=1683780112&width=713",
        stock: 20
    },
    {
        id: 10,
        category: "gadgets",
        name: "GreenTech Smart Thermostat",
        price: 129.95,
        description: "Este termostato inteligente se conecta a tu hogar a través de Wi-Fi y utiliza algoritmos avanzados para optimizar el uso de la calefacción y el aire acondicionado, reduciendo así el consumo de energía y las emisiones de CO2.",
        image: "https://assets.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/NestE_ConsumersEnergy_store_XL_721_420_80_s_c1.jpg",
        stock: 20
    },
    {
        id: 11,
        category: "gadgets",
        name: "EnviroPod Recycled Bluetooth Speaker",
        price: 79.99,
        description: "Este altavoz Bluetooth está fabricado con plástico reciclado y ofrece un sonido de alta calidad. Es portátil, resistente al agua y cuenta con una batería recargable, siendo ideal para actividades al aire libre.",
        image: "https://cdn.trendhunterstatic.com/thumbs/501/recycled-plastic-portable-speakers.jpeg?auto=webp",
        stock: 20
    },
    {
        id: 12,
        category: "gadgets",
        name: "SolarView Eco-Friendly E-Reader",
        price: 149.00,
        description: "Este lector de libros utiliza tecnología de tinta electrónica para reducir el consumo de energía. Además, tiene una carcasa hecha de materiales biodegradables.",
        image: "https://assets.goodereader.com/blog/uploads/images/2023/04/14151300/Image.jpeg.webp",
        stock: 20
    },
    {
        id: 13,
        category: "clothing",
        name: "EarthThreads Organic Cotton T-Shirt",
        price: 29.99,
        description: "Esta camiseta está hecha de algodón orgánico, cultivado sin pesticidas ni productos químicos dañinos para el medio ambiente. Es suave, transpirable y está disponible en varios colores, siendo una opción ecológica.",
        image: "https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwa4dd0c6a/images/hi-res/62254_SANW.jpg?sw=768&sh=768&sfrm=png&q=95&bgcolor=f5f5f5",
        stock: 20
    },
    {
        id: 14,
        category: "clothing",
        name: "GreenStep Recycled Polyester Jacket",
        price: 79.95,
        description: "Esta chaqueta está fabricada con poliéster reciclado, contribuyendo a reducir la demanda de plásticos vírgenes. Es resistente al agua y al viento, siendo ideal para actividades al aire libre en climas variables.",
        image: "https://www.cmpsport.com/media/catalog/product/cache/dde5c6f0a08275b7f48abf4f38d896f7/3/2/32M1797_N950_A_FOT_ECO_2.png",
        stock: 20
    },
    {
        id: 15,
        category: "clothing",
        name: "PureHike Bamboo Fiber Socks",
        price: 12.99,
        description: "Estos calcetines están hechos de fibras de bambú, un material renovable y biodegradable. Son suaves, absorbentes y resistentes al olor, proporcionando comodidad durante todo el día mientras reducen la huella de carbono.",
        image: "https://m.media-amazon.com/images/I/81ZJt5jkW+L._AC_UY350_.jpg",
        stock: 20
    },
    {
        id: 16,
        category: "clothing",
        name: "EcoFit Recyclable Athletic Shoes",
        price: 99.99,
        description: "Estos zapatos deportivos están fabricados con materiales reciclables y son completamente desmontables para facilitar el reciclaje al final de su vida útil. Son ligeros, cómodos y están diseñados para reducir el desperdicio.",
        image: "https://images.squarespace-cdn.com/content/v1/58163c29197aea6c5f166b6f/1622153034192-BA3JV1XWV4L8FF9BHGTC/Sustainable+Sneakers+from+Saola",
        stock: 20
    }
]

export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(() => resolve(products), 500);
        }
    )
}

export const getProductById=(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.find(product => product.id === parseInt(productId)))
        }, 500);
    })
}

export const getProductsByCategory=(categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.filter(product=>product.category===categoryId))
        }, 500);
    })
}
