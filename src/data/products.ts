// src/data/products.ts - Base de datos unificada con 28 productos reales para "ElegidosParaTi" (8 Categorías)


export interface Product {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  rating: number;
  reviewsCount: number;
  priceRange: '€' | '€€' | '€€€';
  priceLabel: string;
  amazonUrl: string;
  isEditorChoice?: boolean;
  isBestValue?: boolean;
  isBudgetKing?: boolean;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
}

export interface Guide {
  id: string;
  title: string;
  category: string;
  image: string;
  readTime: string;
  summary: string;
  content: string[];
}

export const products: Product[] = [
  // ==================== CATEGORÍA 1: AUDIO & SONIDO (5 Productos) ====================
  {
    id: "sony-wh1000xm5",
    title: "Auriculares Sony WH-1000XM5",
    category: "audio",
    categoryLabel: "Audio & Sonido",
    description: "Los reyes indiscutibles de la cancelación de ruido activa con una ergonomía premium.",
    longDescription: "Si buscas aislarte por completo del ruido del tráfico, de la oficina o de los aviones, los Sony WH-1000XM5 representan la cúspide de la tecnología de cancelación de ruido activa (ANC). Equipados con dos procesadores que controlan 8 micrófonos, estos auriculares adaptan el aislamiento a tu entorno en tiempo real.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    rating: 4.8,
    reviewsCount: 18400,
    priceRange: "€€€",
    priceLabel: "Premium (+250€)",
    amazonUrl: "https://amazon.es/dp/B09Y2MYL4C?tag=elegidosparati-21",
    isEditorChoice: true,
    pros: ["Cancelación de ruido adaptativa excelente", "Autonomía de 30 horas con carga rápida", "Llamadas de claridad cristalina"],
    cons: ["No tienen un diseño plegable", "La diadema puede presionar tras horas"],
    specs: { "Autonomía": "30 horas", "Conexión": "Bluetooth 5.2", "Peso": "250g", "Garantía": "3 años" }
  },
  {
    id: "airpods-pro-2",
    title: "Apple AirPods Pro (2.ª Generación)",
    category: "audio",
    categoryLabel: "Audio & Sonido",
    description: "La integración perfecta y el sonido espacial más inmersivo para usuarios de Apple.",
    longDescription: "Los AirPods Pro de segunda generación elevan la experiencia auditiva gracias al chip H2. Ofrecen una cancelación de ruido que duplica a la generación anterior y un excelente sonido ambiente adaptativo inteligente.",
    image: "https://images.unsplash.com/photo-1588449668338-d1516824a482?w=600&q=80",
    rating: 4.7,
    reviewsCount: 22100,
    priceRange: "€€€",
    priceLabel: "Premium (+200€)",
    amazonUrl: "https://amazon.es/dp/B0BDHWDR12?tag=elegidosparati-21",
    pros: ["Ecosistema Apple impecable", "Sonido espacial personalizado", "Estuche con altavoz integrado para búsqueda"],
    cons: ["Funciones limitadas en Android", "Almohadillas de silicona pueden no gustar a todos"],
    specs: { "Autonomía": "6 horas (30h con estuche)", "Conexión": "Bluetooth 5.3", "Peso": "5.3g", "Carga": "USB-C / MagSafe" }
  },
  {
    id: "soundcore-q30",
    title: "Anker Soundcore Life Q30",
    category: "audio",
    categoryLabel: "Audio & Sonido",
    description: "Los campeones indiscutibles de la gama económica con cancelación de ruido real.",
    longDescription: "No hace falta gastarse una fortuna para disfrutar de un buen aislamiento y sonido Hi-Res. Los Soundcore Life Q30 ofrecen tres modos de cancelación de ruido seleccionables por app y almohadillas de espuma ultra-cómodas.",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80",
    rating: 4.6,
    reviewsCount: 39500,
    priceRange: "€",
    priceLabel: "Económico (-80€)",
    amazonUrl: "https://amazon.es/dp/B08HMWZBXC?tag=elegidosparati-21",
    isBudgetKing: true,
    pros: ["Relación calidad-precio insuperable", "Batería monstruosa de hasta 60 horas", "Certificación Hi-Res Audio"],
    cons: ["Los materiales plásticos pueden crujir ligeramente", "Micrófono en exteriores regular"],
    specs: { "Autonomía": "40h (ANC ON) / 60h (ANC OFF)", "Conexión": "Bluetooth 5.0", "Peso": "260g", "App": "Disponible con EQ" }
  },
  {
    id: "bose-qc-ultra",
    title: "Bose QuietComfort Ultra",
    category: "audio",
    categoryLabel: "Audio & Sonido",
    description: "La comodidad de diadema legendaria combinada con el audio inmersivo de Bose.",
    longDescription: "Bose da un golpe en la mesa con su tecnología Immersive Audio, creando una escena sonora tridimensional realista, acompañada de la comodidad que siempre ha caracterizado a la gama QuietComfort.",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80",
    rating: 4.8,
    reviewsCount: 3200,
    priceRange: "€€€",
    priceLabel: "Premium (+300€)",
    amazonUrl: "https://amazon.es/dp/B0CCZ1Y8BL?tag=elegidosparati-21",
    pros: ["La comodidad más premium del mercado", "Cancelación de ruido excepcional", "Modo audio espacial inmersivo fantástico"],
    cons: ["Precio muy restrictivo", "La app puede ser inestable en ocasiones"],
    specs: { "Autonomía": "24 horas", "Conexión": "Bluetooth 5.3", "Peso": "250g", "Audio Espacial": "Sí" }
  },
  {
    id: "jbl-tune-510bt",
    title: "JBL Tune 510BT Auriculares de Diadema",
    category: "audio",
    categoryLabel: "Audio & Sonido",
    description: "Auriculares supraaurales económicos con un sonido Pure Bass potente.",
    longDescription: "Sencillos, ligeros y potentes. Los JBL Tune 510BT son perfectos para quienes buscan sonido inalámbrico diario sin complicaciones de configuración y con una gran pegada de graves.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
    rating: 4.5,
    reviewsCount: 52000,
    priceRange: "€",
    priceLabel: "Económico (-50€)",
    amazonUrl: "https://amazon.es/dp/B08VGRC29X?tag=elegidosparati-21",
    pros: ["Batería excelente de 40 horas", "Carga rápida por USB-C", "Diseño plegable súper compacto"],
    cons: ["Aislamiento pasivo limitado", "Presionan las orejas tras un uso continuado"],
    specs: { "Autonomía": "40 horas", "Conexión": "Bluetooth 5.0", "Peso": "160g", "Graves": "Tecnología Pure Bass" }
  },

  // ==================== CATEGORÍA 2: GAMING & STREAMING (5 Productos) ====================
  {
    id: "logitech-g305",
    title: "Ratón Logitech G305 LIGHTSPEED",
    category: "gaming",
    categoryLabel: "Gaming & Streaming",
    description: "El rey de la precisión inalámbrica sin latencia a un precio imbatible.",
    longDescription: "El Logitech G305 utiliza la aclamada conexión inalámbrica LIGHTSPEED, que ofrece una tasa de refresco de 1 ms, idéntica a los ratones con cable profesionales. Equipado con el sensor HERO de 12.000 DPI.",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&q=80",
    rating: 4.6,
    reviewsCount: 28400,
    priceRange: "€",
    priceLabel: "Económico (-45€)",
    amazonUrl: "https://amazon.es/dp/B07CGPZ3Y1?tag=elegidosparati-21",
    isBestValue: true,
    pros: ["Latencia inalámbrica cero", "Autonomía colosal de 250 horas", "Muy ligero (99g)"],
    cons: ["Requiere pila AA en vez de batería integrada", "Clics principales algo ruidosos"],
    specs: { "Sensor": "HERO (12.000 DPI)", "Conexión": "LIGHTSPEED Wireless", "Autonomía": "250 horas", "Peso": "99g" }
  },
  {
    id: "razer-deathadder-v3-pro",
    title: "Razer DeathAdder V3 Pro",
    category: "gaming",
    categoryLabel: "Gaming & Streaming",
    description: "El ratón ergonómico ultraligero preferido por profesionales de eSports.",
    longDescription: "Con un peso pluma de solo 63 gramos, el DeathAdder V3 Pro se ha rediseñado con la ayuda de profesionales. Cuenta con clics ópticos de última generación que eliminan problemas de doble clic.",
    image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=600&q=80",
    rating: 4.7,
    reviewsCount: 4200,
    priceRange: "€€€",
    priceLabel: "Premium (+130€)",
    amazonUrl: "https://amazon.es/dp/B0B6Y7M5D1?tag=elegidosparati-21",
    isEditorChoice: true,
    pros: ["Peso ultraligero de 63g", "Forma ergonómica icónica perfeccionada", "Sensor óptico de 30K de alta precisión"],
    cons: ["Precio muy elevado", "Receptor de 8000Hz se vende por separado"],
    specs: { "Sensor": "Focus Pro 30K Optical", "Conexión": "Razer HyperSpeed", "Peso": "63g", "Autonomía": "Hasta 90 horas" }
  },
  {
    id: "steelseries-arctis-nova-7",
    title: "Auriculares SteelSeries Arctis Nova 7",
    category: "gaming",
    categoryLabel: "Gaming & Streaming",
    description: "Audio inalámbrico simultáneo de 2.4 GHz y Bluetooth para una inmersión multiplataforma.",
    longDescription: "Los Arctis Nova 7 combinan transductores de alta fidelidad con un diseño increíblemente cómodo con de suspensión. Su conexión inalámbrica simultánea te permite jugar en PC/consola y responder llamadas a la vez.",
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=600&q=80",
    rating: 4.6,
    reviewsCount: 7100,
    priceRange: "€€",
    priceLabel: "Medio (130-180€)",
    amazonUrl: "https://amazon.es/dp/B0B168VKK9?tag=elegidosparati-21",
    pros: ["Conexión dual inalámbrica simultánea", "Almohadillas AirWeave transpirables", "Gran micrófono retráctil con IA"],
    cons: ["El rango de aislamiento de ruido pasivo es justo", "La suite de software Sonar es exclusiva de Windows"],
    specs: { "Autonomía": "38 horas", "Plataformas": "PC, PS5, Switch, Móvil", "Conexión": "2.4 GHz + Bluetooth", "Peso": "325g" }
  },
  {
    id: "corsair-k70-rgb-pro",
    title: "Teclado Corsair K70 RGB PRO",
    category: "gaming",
    categoryLabel: "Gaming & Streaming",
    description: "Un teclado mecánico legendario con switches Cherry MX y un chasis de aluminio robusto.",
    longDescription: "Construido para el rendimiento y la durabilidad, el K70 RGB PRO mantiene los elementos icónicos de la galardonada serie K70 con retroiluminación RGB dinámica por tecla.",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&q=80",
    rating: 4.7,
    reviewsCount: 2300,
    priceRange: "€€",
    priceLabel: "Medio (120-160€)",
    amazonUrl: "https://amazon.es/dp/B09R696Q48?tag=elegidosparati-21",
    pros: ["Chasis de aluminio cepillado indestructible", "Switches mecánicos Cherry MX genuinos", "Rueda de volumen metálica dedicada"],
    cons: ["Teclas de perfil alto algo ruidosas", "Cable de conexión grueso y poco flexible"],
    specs: { "Switches": "Cherry MX Red", "Layout": "Español ISO", "Frecuencia": "8000Hz Axon", "RGB": "Personalizable por tecla" }
  },
  {
    id: "razer-seiren-mini",
    title: "Micrófono Condensador Razer Seiren Mini",
    category: "gaming",
    categoryLabel: "Gaming & Streaming",
    description: "Micrófono USB ultra-compacto ideal para iniciarse en streamings y podcasts.",
    longDescription: "Con un patrón de captación supercardioide superpreciso, el Razer Seiren Mini reduce de forma sobresaliente los ruidos de fondo no deseados como clics o ventiladores.",
    image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?w=600&q=80",
    rating: 4.5,
    reviewsCount: 19800,
    priceRange: "€",
    priceLabel: "Económico (-60€)",
    amazonUrl: "https://amazon.es/dp/B08HH3FTYT?tag=elegidosparati-21",
    pros: ["Diseño ultra-compacto y transportable", "Plug and Play directo por USB", "Excelente claridad vocal de serie"],
    cons: ["Soporte de escritorio muy bajo", "Sin botón de silenciado físico (mute)"],
    specs: { "Tipo": "Condensador 14mm", "Patrón": "Supercardioide", "Conexión": "Micro-USB", "Peso": "280g" }
  },

  // ==================== CATEGORÍA 3: PRODUCTIVIDAD & OFICINA (5 Productos) ====================
  {
    id: "mx-master-3s",
    title: "Ratón Ergonómico Logitech MX Master 3S",
    category: "productividad",
    categoryLabel: "Productividad & Oficina",
    description: "El ratón definitivo para diseñadores y desarrolladores con desplazamiento ultrarrápido.",
    longDescription: "El MX Master 3S redefine el flujo de trabajo profesional. Su rueda metálica MagSpeed permite desplazarse por 1000 líneas en un solo segundo de forma totalmente silenciosa.",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&q=80",
    rating: 4.8,
    reviewsCount: 16500,
    priceRange: "€€€",
    priceLabel: "Premium (+100€)",
    amazonUrl: "https://amazon.es/dp/B09YHWN726?tag=elegidosparati-21",
    isEditorChoice: true,
    pros: ["Rueda electromagnética MagSpeed mágica", "Clics principales un 90% más silenciosos", "Compatible con Logitech Flow"],
    cons: ["Exclusivo para diestros", "Tamaño voluminoso para manos pequeñas"],
    specs: { "Sensor": "Óptico 8000 DPI", "Conexión": "Bluetooth / Logi Bolt", "Peso": "141g", "Carga": "Rápida USB-C" }
  },
  {
    id: "keychron-k2",
    title: "Teclado Mecánico Keychron K2 V2",
    category: "productividad",
    categoryLabel: "Productividad & Oficina",
    description: "La herramienta de escritura preferida por programadores y redactores.",
    longDescription: "El Keychron K2 es un teclado mecánico inalámbrico con distribución compacta del 75%. Conserva las teclas de dirección esenciales ofreciendo una experiencia táctil sobresaliente.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
    rating: 4.5,
    reviewsCount: 3800,
    priceRange: "€€",
    priceLabel: "Medio (80€-120€)",
    amazonUrl: "https://amazon.es/dp/B087611E1?tag=elegidosparati-21",
    pros: ["Conexión inalámbrica con hasta 3 dispositivos", "Layout dedicado para macOS y Windows", "Batería de larga duración de 4000 mAh"],
    cons: ["Perfil alto que puede requerir reposamuñecas", "Retroiluminación básica en el modelo base"],
    specs: { "Switches": "Gateron Red/Brown", "Distribución": "Compacta 75%", "Conectividad": "Bluetooth / Cable", "Autonomía": "Hasta 240h" }
  },
  {
    id: "logitech-mx-keys-s",
    title: "Teclado Multidispositivo Logitech MX Keys S",
    category: "productividad",
    categoryLabel: "Productividad & Oficina",
    description: "Escritura fluida y ultra-silenciosa con retroiluminación inteligente automática.",
    longDescription: "Un teclado de oficina de perfil bajo diseñado para brindar la máxima comodidad y fluidez, con teclas cóncavas adaptadas a las yemas de tus dedos.",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80",
    rating: 4.7,
    reviewsCount: 8900,
    priceRange: "€€",
    priceLabel: "Medio (100-130€)",
    amazonUrl: "https://amazon.es/dp/B0B2SBTDQX?tag=elegidosparati-21",
    pros: ["Escritura de perfil bajo extremadamente cómoda", "Retroiluminación que se activa al acercar las manos", "Emparejamiento rápido con 3 dispositivos"],
    cons: ["No incluye el reposamuñecas en la caja", "Sin patas de inclinación regulables"],
    specs: { "Perfil": "Ultra-bajo", "Batería": "10 días con luz", "Conexión": "Bluetooth / Bolt", "Peso": "810g" }
  },
  {
    id: "flexispot-eg1",
    title: "Escritorio Elevable Flexispot EG1",
    category: "productividad",
    categoryLabel: "Productividad & Oficina",
    description: "Mesa de escritorio eléctrica con ajuste de altura para trabajar alternando de pie y sentado.",
    longDescription: "Mejora drásticamente tu salud laboral con este escritorio elevable eléctrico de Flexispot, que cuenta con una estructura estable de acero y un motor silencioso de elevación suave.",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=600&q=80",
    rating: 4.6,
    reviewsCount: 5400,
    priceRange: "€€€",
    priceLabel: "Premium (+200€)",
    amazonUrl: "https://amazon.es/dp/B08HGN4VFS?tag=elegidosparati-21",
    pros: ["Elevación eléctrica motorizada suave", "Chasis muy sólido de acero", "Ayuda a evitar dolores de espalda"],
    cons: ["El modelo base no memoriza alturas", "El montaje requiere paciencia"],
    specs: { "Rango de Altura": "71 - 121 cm", "Capacidad": "70 kg", "Tablero": "120 x 60 cm", "Nivel de ruido": "<50dB" }
  },
  {
    id: "huion-kamvas-13",
    title: "Tableta Gráfica Huion Kamvas 13",
    category: "productividad",
    categoryLabel: "Productividad & Oficina",
    description: "Tableta digitalizadora de diseño gráfico con pantalla FHD de gran fidelidad cromática.",
    longDescription: "La Kamvas 13 es perfecta para ilustradores, diseñadores y retocadores de fotos que quieren dar el salto a una pantalla interactiva de gran precisión.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
    rating: 4.6,
    reviewsCount: 4300,
    priceRange: "€€€",
    priceLabel: "Premium (+200€)",
    amazonUrl: "https://amazon.es/dp/B083W8888X?tag=elegidosparati-21",
    pros: ["Pantalla totalmente laminada antideslumbrante", "Lápiz óptico muy sensible sin batería", "Compatible con Android, Mac y Windows"],
    cons: ["Requiere conexión HDMI triple si no tienes USB-C completo", "La calibración de las esquinas requiere ajuste manual"],
    specs: { "Pantalla": "13.3 pulgadas IPS", "Presión": "8192 niveles", "Teclas Rápidas": "8 personalizables", "Gama de color": "120% sRGB" }
  },

  // ==================== CATEGORÍA 4: HOGAR INTELIGENTE (5 Productos) ====================
  {
    id: "echo-dot-5",
    title: "Amazon Echo Dot (5.ª Generación)",
    category: "smarthome",
    categoryLabel: "Hogar Inteligente",
    description: "El altavoz inteligente con Alexa con mejor rendimiento acústico.",
    longDescription: "El Echo Dot de 5.ª generación ofrece voces nítidas y unos graves el doble de potentes que la generación anterior. Es el corazón ideal para controlar tu domótica mediante comandos de voz.",
    image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=600&q=80",
    rating: 4.7,
    reviewsCount: 45000,
    priceRange: "€",
    priceLabel: "Económico (-60€)",
    amazonUrl: "https://amazon.es/dp/B09B8VGRLG?tag=elegidosparati-21",
    isBestValue: true,
    pros: ["Asistente Alexa extremadamente rápido", "Sensor de temperatura integrado para rutinas", "Audio muy solvente para su tamaño"],
    cons: ["Requiere estar enchufado siempre", "Sin salida de audio Jack 3.5mm"],
    specs: { "Asistente": "Alexa integrado", "Sensores": "Temperatura y movimiento", "Conexión": "Wi-Fi + Bluetooth" }
  },
  {
    id: "kindle-paperwhite",
    title: "Kindle Paperwhite (16 GB)",
    category: "smarthome",
    categoryLabel: "Hogar Inteligente",
    description: "La mejor experiencia de lectura digital con luz cálida ajustable.",
    longDescription: "El Kindle Paperwhite combina una pantalla de alta resolución de 300 ppp sin reflejos con un diseño resistente al agua IPX8, permitiendo leer en cualquier lado sin preocupaciones.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80",
    rating: 4.8,
    reviewsCount: 18500,
    priceRange: "€€",
    priceLabel: "Medio (130€-160€)",
    amazonUrl: "https://amazon.es/dp/B09TMCYWSK?tag=elegidosparati-21",
    isEditorChoice: true,
    pros: ["Pantalla de 6.8'' antideslumbrante con luz cálida", "Resistencia al agua certificada (IPX8)", "Batería que dura semanas de uso diario"],
    cons: ["Sin ranura para tarjeta microSD", "La versión básica contiene publicidad en reposo"],
    specs: { "Pantalla": "6.8'' E-Ink", "Capacidad": "16 GB", "Autonomía": "Hasta 10 semanas", "Carga": "USB-C" }
  },
  {
    id: "tp-link-tapo-p110",
    title: "Enchufes Inteligentes TP-Link Tapo P110 (Pack de 2)",
    category: "smarthome",
    categoryLabel: "Hogar Inteligente",
    description: "Enchufes con monitorización detallada del consumo eléctrico y control por app/voz.",
    longDescription: "Controla tus electrodomésticos de forma remota, programa temporizadores personalizados y realiza un seguimiento del gasto energético de tus calefactores.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
    rating: 4.7,
    reviewsCount: 29000,
    priceRange: "€",
    priceLabel: "Económico (-25€)",
    amazonUrl: "https://amazon.es/dp/B09JV9C1W3?tag=elegidosparati-21",
    pros: ["Excelente medidor del consumo eléctrico integrado", "Diseño compacto que no obstruye otros enchufes", "Fácil configuración directa por Wi-Fi"],
    cons: ["La monitorización requiere conexión constante", "No soporta redes Wi-Fi de 5 GHz"],
    specs: { "Potencia Máxima": "3680W (16A)", "Conexión": "Wi-Fi 2.4 GHz", "Control": "Tapo App / Alexa / Google", "Pack": "2 unidades" }
  },

  // ==================== NUEVA CATEGORÍA 5: DEPORTE & FITNESS (3 Productos) ====================
  {
    id: "garmin-forerunner-55",
    title: "Reloj Deportivo Garmin Forerunner 55",
    category: "deportes",
    categoryLabel: "Deporte & Fitness",
    description: "El reloj con GPS ideal para corredores con planes de entrenamiento adaptables.",
    longDescription: "Haz un seguimiento preciso de tu tiempo, distancia y ritmo. El Forerunner 55 ofrece sugerencias de entrenamiento diarias personalizadas y funciones de bienestar avanzadas.",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80",
    rating: 4.6,
    reviewsCount: 12500,
    priceRange: "€€",
    priceLabel: "Medio (130€-180€)",
    amazonUrl: "https://amazon.es/dp/B093R37Y29?tag=elegidosparati-21",
    isEditorChoice: true,
    pros: ["GPS integrado de alta precisión", "Autonomía de hasta 2 semanas", "Planes de entrenamiento Garmin Coach"],
    cons: ["Pantalla no táctil para optimizar batería", "Estética muy deportiva para uso diario formal"],
    specs: { "Autonomía": "Hasta 14 días", "GPS": "Glonass, Galileo integrado", "Peso": "37g", "Resistencia": "5 ATM (Apto natación)" }
  },
  {
    id: "xiaomi-smart-band-8",
    title: "Xiaomi Smart Band 8 Pulsera de Actividad",
    category: "deportes",
    categoryLabel: "Deporte & Fitness",
    description: "La pulsera deportiva inteligente más vendida del mercado con pantalla AMOLED.",
    longDescription: "La Xiaomi Smart Band 8 eleva el estándar de las pulseras de actividad baratas gracias a su pantalla fluida de 60Hz, monitorización de SpO2 constante y un diseño elegante de correas de liberación rápida.",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80",
    rating: 4.7,
    reviewsCount: 34000,
    priceRange: "€",
    priceLabel: "Económico (-45€)",
    amazonUrl: "https://amazon.es/dp/B0C9J7C8F9?tag=elegidosparati-21",
    isBestValue: true,
    pros: ["Excelente pantalla AMOLED a 60Hz", "Autonomía colosal de hasta 16 días", "Más de 150 modos de entrenamiento"],
    cons: ["No cuenta con GPS integrado (usa el del móvil)", "La aplicación de sincronización Mi Fitness es básica"],
    specs: { "Pantalla": "1.62'' AMOLED 60Hz", "Batería": "Hasta 16 días", "Sensores": "Frecuencia cardíaca, SpO2, Sueño", "Peso": "27g" }
  },
  {
    id: "fitbit-charge-6",
    title: "Pulsera Deportiva Fitbit Charge 6",
    category: "deportes",
    categoryLabel: "Deporte & Fitness",
    description: "La pulsera inteligente premium con GPS integrado y herramientas avanzadas de salud.",
    longDescription: "Fitbit Charge 6 incluye una monitorización cardíaca ultra precisa y una excelente integración con Google Maps y YouTube Music para controlar tus entrenamientos con total independencia.",
    image: "https://images.unsplash.com/photo-1510017808664-1b08d7294c46?w=600&q=80",
    rating: 4.5,
    reviewsCount: 5600,
    priceRange: "€€",
    priceLabel: "Medio (120€-160€)",
    amazonUrl: "https://amazon.es/dp/B0CHWT9M5K?tag=elegidosparati-21",
    pros: ["GPS autónomo de gran precisión", "Mediciones de estrés y electrocardiograma (ECG)", "Muy ligera y pantalla nítida al sol"],
    cons: ["Requiere suscripción Fitbit Premium para algunas métricas", "Precio elevado para ser una pulsera"],
    specs: { "Autonomía": "Hasta 7 días", "GPS": "Sí, integrado", "Funciones": "ECG, SpO2, Estrés, NFC", "Resistencia": "50 metros" }
  },

  // ==================== NUEVA CATEGORÍA 6: COCINA & HOGAR (3 Productos) ====================
  {
    id: "cosori-freidora-aire",
    title: "Cosori Freidora de Aire de 5.5L",
    category: "cocina",
    categoryLabel: "Cocina & Hogar",
    description: "La freidora sin aceite líder del mercado con tecnología de circulación rápida de calor.",
    longDescription: "Prepara tus alimentos favoritos de forma saludable usando hasta un 85% menos de aceite. La Cosori de 5.5 litros es el electrodoméstico ideal para familias de 3 a 5 personas, con una cesta antiadherente libre de BPA.",
    image: "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?w=600&q=80",
    rating: 4.8,
    reviewsCount: 82000,
    priceRange: "€€",
    priceLabel: "Medio (100€-130€)",
    amazonUrl: "https://amazon.es/dp/B07N8N6C85?tag=elegidosparati-21",
    isEditorChoice: true,
    pros: ["Gran capacidad de 5.5 litros para familias", "Pantalla táctil muy intuitiva con 11 programas", "Cesta apta para lavavajillas y libre de BPA"],
    cons: ["Ocupa bastante espacio en la encimera", "El ventilador puede ser algo ruidoso en funcionamiento"],
    specs: { "Capacidad": "5.5 litros", "Potencia": "1700W", "Rango de Temp.": "75°C - 205°C", "Material": "Plástico y acero" }
  },
  {
    id: "delonghi-dedica",
    title: "Cafetera Express De'Longhi Dedica EC685",
    category: "cocina",
    categoryLabel: "Cocina & Hogar",
    description: "La cafetera de bomba espresso tradicional con un diseño de acero inoxidable ultra compacto.",
    longDescription: "Disfruta de un espresso barista o un cappuccino aterciopelado en casa. La De'Longhi Dedica cuenta con una bomba de 15 bares de presión profesional y un calentamiento rápido por Thermoblock en solo 40 segundos.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80",
    rating: 4.6,
    reviewsCount: 38500,
    priceRange: "€€€",
    priceLabel: "Premium (+160€)",
    amazonUrl: "https://amazon.es/dp/B06WGTZ874?tag=elegidosparati-21",
    isBestValue: true,
    pros: ["Diseño de metal estrecho de solo 15 cm de ancho", "Sistema Thermoblock de calentamiento en 40 segundos", "vaporizador de leche orientable de alta calidad"],
    cons: ["Filtros presurizados de fábrica (requiere maña para modificarlos)", "Viene sin jarra para espumar leche en la caja"],
    specs: { "Presión": "15 bares", "Ancho": "14.9 cm", "Capacidad depósito": "1.1 litros", "Calentador": "Thermoblock" }
  },
  {
    id: "taurus-batidora-v技術",
    title: "Batidora de Mano Taurus Bapi 1200",
    category: "cocina",
    categoryLabel: "Cocina & Hogar",
    description: "La batidora picadora súper potente de 1200W con cuchillas de doble efecto.",
    longDescription: "Bate, tritura y pica hielo con total facilidad gracias a sus 1200W de potencia y un selector de 20 velocidades con función Turbo integrada.",
    image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=600&q=80",
    rating: 4.5,
    reviewsCount: 12100,
    priceRange: "€",
    priceLabel: "Económico (-45€)",
    amazonUrl: "https://amazon.es/dp/B08HMWZBXC?tag=elegidosparati-21",
    isBudgetKing: true,
    pros: ["Potencia brutal de 1200W", "Cuchillas de acero inoxidable ultra resistentes", "Incluye set completo de accesorios"],
    cons: ["La campana de la batidora puede salpicar a máxima potencia", "El cable de alimentación es algo corto"],
    specs: { "Potencia": "1200W", "Velocidades": "20 + Turbo", "Cuchillas": "4 hojas de acero", "Accesorios": "Vaso, picador, varilla" }
  },

  // ==================== NUEVA CATEGORÍA 7: FOTOGRAFÍA & VÍDEO (3 Productos) ====================
  {
    id: "dji-osmo-pocket-3",
    title: "DJI Osmo Pocket 3 Gimbal Portátil",
    category: "fotografia",
    categoryLabel: "Fotografía & Vídeo",
    description: "Cámara de vídeo de bolsillo con estabilización física en 3 ejes y sensor de 1 pulgada.",
    longDescription: "La DJI Osmo Pocket 3 revoluciona la grabación en movimiento gracias a su impresionante sensor CMOS de 1 pulgada y una pantalla táctil rotativa de 2 pulgadas, ideal para vlogging y vídeos cinematográficos.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
    rating: 4.8,
    reviewsCount: 3900,
    priceRange: "€€€",
    priceLabel: "Premium (+500€)",
    amazonUrl: "https://amazon.es/dp/B0CHX9K5RD?tag=elegidosparati-21",
    isEditorChoice: true,
    pros: ["Sensor gigante de 1'' con gran rendimiento nocturno", "Pantalla táctil rotatoria para grabación vertical nativa", "Estabilización mecánica impecable"],
    cons: ["Precio sumamente elevado", "Carcasa no sumergible sin funda adicional"],
    specs: { "Sensor": "CMOS 1 pulgada", "Resolución": "4K a 120fps", "Estabilización": "Mecánica de 3 ejes", "Peso": "179g" }
  },
  {
    id: "gopro-hero-12",
    title: "Cámara Deportiva GoPro HERO 12 Black",
    category: "fotografia",
    categoryLabel: "Fotografía & Vídeo",
    description: "La cámara de acción definitiva con estabilización HyperSmooth 6.0 e impermeabilidad.",
    longDescription: "Diseñada para soportarlo todo, la GoPro HERO 12 ofrece vídeos espectaculares en 5.3K, audio Bluetooth mejorado para micrófonos externos y una excelente resistencia al agua sin carcasa.",
    image: "https://images.unsplash.com/photo-1565538810844-1e1194116c07?w=600&q=80",
    rating: 4.6,
    reviewsCount: 4200,
    priceRange: "€€€",
    priceLabel: "Premium (+350€)",
    amazonUrl: "https://amazon.es/dp/B0CG6LFRR7?tag=elegidosparati-21",
    isBestValue: true,
    pros: ["Estabilización HyperSmooth 6.0 increíble", "Resolución cinematográfica de 5.3K", "Sumergible a 10 metros sin carcasa"],
    cons: ["Autonomía ajustada bajo grabaciones intensas en 4K/5K", "Rendimiento regular en escenas de baja luz"],
    specs: { "Resolución": "5.3K60 / 4K120", "Estabilización": "HyperSmooth 6.0", "Sumergible": "Hasta 10m", "Batería": "Enduro recargable" }
  },
  {
    id: "tripode-kf-concept",
    title: "Trípode para Cámara K&F Concept",
    category: "fotografia",
    categoryLabel: "Fotografía & Vídeo",
    description: "Trípode ligero de aluminio profesional, convertible en monopié y de gran estabilidad.",
    longDescription: "Un trípode robusto ideal para fotógrafos de viajes. Alcanza hasta 160 cm de altura, soporta hasta 10 kg de carga y cuenta con un cabezal de bola esférico de 360 grados.",
    image: "https://images.unsplash.com/photo-1623141151601-523316d86f90?w=600&q=80",
    rating: 4.7,
    reviewsCount: 8900,
    priceRange: "€",
    priceLabel: "Económico (-80€)",
    amazonUrl: "https://amazon.es/dp/B015C4XGHW?tag=elegidosparati-21",
    isBudgetKing: true,
    pros: ["Excelente relación peso-resistencia", "Cabezal de bola panorámico con burbuja de nivel", "Se pliega de forma muy compacta para la mochila"],
    cons: ["Los cierres de rosca requieren apretarse bien", "La columna central puede vibrar con viento fuerte"],
    specs: { "Altura máx.": "162 cm", "Material": "Aluminio de aviación", "Carga Máxima": "10 kg", "Peso propio": "1.4 kg" }
  },

  // ==================== NUEVA CATEGORÍA 8: CUIDADO PERSONAL (3 Productos) ====================
  {
    id: "philips-oneblade",
    title: "Afeitadora Philips OneBlade Pro 360",
    category: "belleza",
    categoryLabel: "Cuidado Personal",
    description: "La afeitadora híbrida para recortar, perfilar y afeitar cualquier longitud de vello sin irritar.",
    longDescription: "Philips OneBlade Pro 360 combina una cuchilla de movimiento ultra rápido con un protector de piel, lo que te permite afeitarte en seco o húmedo manteniendo tu cara totalmente a salvo de irritaciones y cortes.",
    image: "https://images.unsplash.com/photo-1621607505833-61691b1df43e?w=600&q=80",
    rating: 4.7,
    reviewsCount: 55000,
    priceRange: "€",
    priceLabel: "Económico (-60€)",
    amazonUrl: "https://amazon.es/dp/B0B68C3SGP?tag=elegidosparati-21",
    isEditorChoice: true,
    pros: ["Afeitado y recorte cómodo y rápido sin irritación", "Cuchilla 360 flexible que se adapta a las curvas", "Peine de precisión con 14 longitudes ajustables"],
    cons: ["Las cuchillas de recambio tienen un coste recurrente", "No proporciona un apurado tan al ras como una cuchilla tradicional"],
    specs: { "Batería": "120 min de uso", "Carga": "1 hora rápida", "Uso": "En seco y en húmedo (Wet & Dry)", "Cuchilla": "Tecnología de seguimiento de contornos" }
  },
  {
    id: "oralb-pro-3",
    title: "Cepillo de Dientes Eléctrico Oral-B Pro 3 3000",
    category: "belleza",
    categoryLabel: "Cuidado Personal",
    description: "Cepillo eléctrico oscilante con sensor de presión inteligente visible.",
    longDescription: "Consigue una limpieza clínica profunda gracias al cabezal redondo de Oral-B que elimina hasta un 100% más de placa que un cepillo manual, protegiendo tus encías con su sensor de presión de 360°.",
    image: "https://images.unsplash.com/photo-1559592481-74153c497958?w=600&q=80",
    rating: 4.7,
    reviewsCount: 32000,
    priceRange: "€",
    priceLabel: "Económico (-65€)",
    amazonUrl: "https://amazon.es/dp/B098877YTT?tag=elegidosparati-21",
    isBestValue: true,
    pros: ["Sensor de presión visual que te avisa si aprietas demasiado", "3 modos de cepillado: Limpieza diaria, sensible y blanqueamiento", "Temporizador integrado de 2 minutos profesionales"],
    cons: ["El cargador de enchufe de dos patillas para baño es corto", "El motor puede ser algo ruidoso comparado con los sónicos"],
    specs: { "Tecnología": "Oscilante-Rotativa-Pulsátil 3D", "Modos": "3 disponibles", "Autonomía": "Más de 2 semanas", "Sensor": "Presión 360º" }
  },
  {
    id: "secador-remington-pro",
    title: "Secador de Pelo Remington Silk AC9096",
    category: "belleza",
    categoryLabel: "Cuidado Personal",
    description: "Secador iónico profesional de gran potencia con rejilla de cerámica con seda.",
    longDescription: "Un secador con calidad de peluquería que cuenta con un potente motor de corriente alterna (AC) y generador de iones para un peinado brillante sin encrespamiento.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    rating: 4.6,
    reviewsCount: 22400,
    priceRange: "€",
    priceLabel: "Económico (-45€)",
    amazonUrl: "https://amazon.es/dp/B0096L89I8?tag=elegidosparati-21",
    pros: ["Motor profesional de larga duración de 2400W", "Acondicionador iónico para evitar el frizz", "Incluye boquilla concentradora estrecha y difusor"],
    cons: ["Es un secador grande y algo pesado en mano", "El botón de chorro de aire frío está algo duro"],
    specs: { "Potencia": "2400W", "Motor": "Profesional AC", "Velocidades/Temp.": "6 configuraciones", "Cable": "3 metros" }
  }
];

export const buyingGuides: Guide[] = [
  {
    id: "guia-auriculares",
    title: "Auriculares con Cancelación de Ruido Activa (ANC): Guía Definitiva",
    category: "audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80",
    readTime: "6 min de lectura",
    summary: "Aprende a diferenciar el aislamiento real del marketing. Te explicamos los tipos de ANC y cómo elegir según tu presupuesto.",
    content: [
      "La Cancelación de Ruido Activa (ANC) funciona mediante micrófonos que captan las ondas sonoras del exterior para generar de forma inmediata una onda invertida de fase que cancela el ruido de fondo.",
      "Si viajas a menudo en tren o avión, un auricular de diadema (over-ear) con cancelación híbrida es tu mejor aliado. Para entrenar o caminar ligero por la calle, los AirPods Pro 2 ofrecen una transparencia adaptativa excelente para aislarte pero mantenerte seguro."
    ]
  },
  {
    id: "guia-setup-ergonomico",
    title: "Cómo Montar un Setup Minimalista y Ergonómico para Teletrabajar",
    category: "productividad",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&q=80",
    readTime: "8 min de lectura",
    summary: "Los mejores periféricos y accesorios de soporte en Amazon recomendados por traumatólogos para evitar dolores de espalda.",
    content: [
      "Pasar más de 8 horas diarias delante de la pantalla pasa factura. Un setup ergonómico no es solo estética, es salud. El primer pilar fundamental es la altura de tu monitor.",
      "El segundo pilar es un ratón vertical u ergonómico como el MX Master 3S, que mantiene el brazo en una posición de pronación neutra, liberando la tensión acumulada en el túnel carpiano."
    ]
  }
];