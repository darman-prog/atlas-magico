import { CountryData } from "./types";
import mascotImg from "./assets/images/duck_sailor_mascot_1784150485407.jpg";
import mapImg from "./assets/images/fantasy_world_map_1784150474859.png";
import forestImg from "./assets/images/tropical_forest_level_1784150497329.jpg";
import riverImg from "./assets/images/amazon_river_level_1784150507329.jpg";
import mountainImg from "./assets/images/mountain_trail_level_1784150518201.jpg";

// Images generated from the image-generation tool
export const MASCOT_IMAGE = mascotImg;
export const MAP_IMAGE = mapImg;
export const FOREST_IMAGE = forestImg;
export const RIVER_IMAGE = riverImg;
export const MOUNTAIN_IMAGE = mountainImg;

export const COUNTRIES: CountryData[] = [
  {
    id: "usa",
    name: "USA",
    flag: "🇺🇸",
    levelRequired: 0,
    iconType: "flag",
    coordinates: { x: 34, y: 42 },
    description: "Una vasta tierra de cañones gigantescos, bosques de secuoyas milenarias y rascacielos que tocan las nubes.",
    levels: [
      { id: "usa_1", name: "Fácil", title: "La Gran Manzana", image: FOREST_IMAGE, starsEarned: 0, status: "unlocked", description: "Explora la estatua más famosa y los grandes parques urbanos de Nueva York." },
      { id: "usa_2", name: "Medio", title: "El Gran Cañón", image: RIVER_IMAGE, starsEarned: 0, status: "locked", description: "Viaja por las profundidades de un abismo labrado por el impetuoso río Colorado." },
      { id: "usa_3", name: "Difícil", title: "El Gigante Denali", image: MOUNTAIN_IMAGE, starsEarned: 0, status: "locked", description: "Escala las laderas congeladas del monte más alto de América del Norte." }
    ]
  },
  {
    id: "brasil",
    name: "BRASIL",
    flag: "🇧🇷",
    levelRequired: 1,
    iconType: "paw",
    coordinates: { x: 39, y: 68 },
    description: "El reino de la selva tropical más inmensa, ríos de agua infinita y playas llenas de samba y sol.",
    levels: [
      { id: "brasil_1", name: "Fácil", title: "Bosque Tropical", image: FOREST_IMAGE, starsEarned: 0, status: "unlocked", description: "Encuentra tucanes cantarines y perezosos durmientes en el dosel de la selva." },
      { id: "brasil_2", name: "Medio", title: "Río Amazonas", image: RIVER_IMAGE, starsEarned: 0, status: "locked", description: "Navega las caudalosas aguas del río que le da vida al pulmón del planeta." },
      { id: "brasil_3", name: "Difícil", title: "Sendero del Corcovado", image: MOUNTAIN_IMAGE, starsEarned: 0, status: "locked", description: "Camina por la selva de Tijuca hacia el mirador de la bahía más hermosa." }
    ]
  },
  {
    id: "nigeria",
    name: "NIGERIA",
    flag: "🇳🇬",
    levelRequired: 3,
    iconType: "star",
    coordinates: { x: 52, y: 61 },
    description: "El gigante de África, lleno de sabanas repletas de baobabs, ciudades vibrantes e increíbles imperios de arte antiguo.",
    levels: [
      { id: "nigeria_1", name: "Fácil", title: "El Vuelo del Águila", image: FOREST_IMAGE, starsEarned: 0, status: "unlocked", description: "Descubre el ave nacional que habita en las cimas de las verdes colinas." },
      { id: "nigeria_2", name: "Medio", title: "El Gran Río Níger", image: RIVER_IMAGE, starsEarned: 0, status: "locked", description: "Sigue la mística silueta en media luna del tercer río más largo de África." },
      { id: "nigeria_3", name: "Difícil", title: "Arboleda Osun-Osogbo", image: MOUNTAIN_IMAGE, starsEarned: 0, status: "locked", description: "Adéntrate en los senderos sombríos donde duermen los templos sagrados de los Yoruba." }
    ]
  },
  {
    id: "india",
    name: "INDIA",
    flag: "🇮🇳",
    levelRequired: 4,
    iconType: "star",
    coordinates: { x: 61, y: 58 },
    description: "Tierra de sándalo y especias, templos tallados en roca, tigres de bengala y el místico río Ganges.",
    levels: [
      { id: "india_1", name: "Fácil", title: "Templo del Amor", image: FOREST_IMAGE, starsEarned: 0, status: "unlocked", description: "Visita el Taj Mahal, la corona de palacios de mármol blanco reluciente." },
      { id: "india_2", name: "Medio", title: "Santuario de Bengala", image: RIVER_IMAGE, starsEarned: 0, status: "locked", description: "Rastrea las huellas del majestuoso tigre real en la espesura del monzón." },
      { id: "india_3", name: "Difícil", title: "Las Aguas del Ganges", image: MOUNTAIN_IMAGE, starsEarned: 0, status: "locked", description: "Sube hasta el nacimiento del río sagrado en los gélidos glaciares del Himalaya." }
    ]
  },
  {
    id: "china",
    name: "CHINA",
    flag: "🇨🇳",
    levelRequired: 5,
    iconType: "temple",
    coordinates: { x: 67, y: 46 },
    description: "El antiguo Imperio del Centro, custodio de la Gran Muralla, osos pandas juguetones y ríos amarillos de leyenda.",
    levels: [
      { id: "china_1", name: "Fácil", title: "El Valle del Bambú", image: FOREST_IMAGE, starsEarned: 0, status: "unlocked", description: "Acompaña a los adorables pandas gigantes mientras desayunan brotes frescos." },
      { id: "china_2", name: "Medio", title: "El Dragón de Piedra", image: RIVER_IMAGE, starsEarned: 0, status: "locked", description: "Camina por la imponente Gran Muralla serpenteando sobre las verdes colinas." },
      { id: "china_3", name: "Difícil", title: "El Gran Yangtsé", image: MOUNTAIN_IMAGE, starsEarned: 0, status: "locked", description: "Navega las legendarias Tres Gargantas del río más largo de toda Asia." }
    ]
  },
  {
    id: "japon",
    name: "JAPÓN",
    flag: "🇯🇵",
    levelRequired: 6,
    iconType: "shrine",
    coordinates: { x: 75, y: 48 },
    description: "Un archipiélago donde la tecnología futurista convive con templos budistas, bosques de bambú y zorros mágicos.",
    levels: [
      { id: "japon_1", name: "Fácil", title: "La Cumbre de Fuji", image: FOREST_IMAGE, starsEarned: 0, status: "unlocked", description: "Fotografía la cumbre nevada del volcán más sagrado y perfecto del mundo." },
      { id: "japon_2", name: "Medio", title: "La Fiesta Sakura", image: RIVER_IMAGE, starsEarned: 0, status: "locked", description: "Celebra el Hanami bajo una lluvia de pétalos rosas de cerezo en flor." },
      { id: "japon_3", name: "Difícil", title: "La Isla Honshu", image: MOUNTAIN_IMAGE, starsEarned: 0, status: "locked", description: "Explora las cordilleras montañosas de la isla principal que resguarda Tokio y Kioto." }
    ]
  },
  {
    id: "rusia",
    name: "RUSIA",
    flag: "🇷🇺",
    levelRequired: 7,
    iconType: "star",
    coordinates: { x: 60, y: 32 },
    description: "El país más extenso de la Tierra, abarcando once husos horarios desde la gélida Siberia hasta los palacios de los zares.",
    levels: [
      { id: "rusia_1", name: "Fácil", title: "Cuna de Madera", image: FOREST_IMAGE, starsEarned: 0, status: "unlocked", description: "Abre los secretos de la muñeca de madera tallada que guarda a su familia dentro." },
      { id: "rusia_2", name: "Medio", title: "Taiga de Siberia", image: RIVER_IMAGE, starsEarned: 0, status: "locked", description: "Sobrevive a las bajas temperaturas bajo el abrigo del bosque templado más extenso del planeta." },
      { id: "rusia_3", name: "Difícil", title: "El Río de los Zares", image: MOUNTAIN_IMAGE, starsEarned: 0, status: "locked", description: "Sigue el curso del místico río Volga, la arteria de vida y comercio de Europa del Este." }
    ]
  },
  {
    id: "australia",
    name: "AUSTRALIA",
    flag: "🇦🇺",
    levelRequired: 8,
    iconType: "star",
    coordinates: { x: 74, y: 75 },
    description: "La tierra del fin del mundo, donde viven criaturas únicas en desiertos rojos y bajo el arrecife de coral más grande.",
    levels: [
      { id: "australia_1", name: "Fácil", title: "Tierra Saltarina", image: FOREST_IMAGE, starsEarned: 0, status: "unlocked", description: "Observa a los tiernos canguros llevando a sus bebés en sus bolsas de felpa." },
      { id: "australia_2", name: "Medio", title: "El Coral Gigante", image: RIVER_IMAGE, starsEarned: 0, status: "locked", description: "Bucea en el arrecife más colosal del planeta repleto de miles de peces de colores." },
      { id: "australia_3", name: "Difícil", title: "El Corazón Uluru", image: MOUNTAIN_IMAGE, starsEarned: 0, status: "locked", description: "Contempla la mística roca roja sagrada que brilla con el fuego del atardecer." }
    ]
  }
];

export interface LegendItem {
  countryName: string;
  flag: string;
  title: string;
  story: string;
  moral: string;
}

export const LEGENDS: Record<string, LegendItem> = {
  usa: {
    countryName: "Estados Unidos",
    flag: "🇺🇸",
    title: "El Pájaro del Trueno (Thunderbird)",
    story: "Las tribus nativas americanas hablan de un ave de tamaño gigante con alas tan grandes que cuando las bate, genera truenos que sacuden el cielo, y sus ojos parpadean rayos resplandecientes. Se le consideraba un protector sagrado de los humanos que traía lluvias para los cultivos y combatía a las temidas serpientes marinas gigantes del inframundo.",
    moral: "Enseña que los elementos naturales no deben temerse, sino respetarse, ya que la fuerza del cielo trae agua y vida a la tierra."
  },
  brasil: {
    countryName: "Brasil",
    flag: "🇧🇷",
    title: "La Leyenda de Curupira",
    story: "En el corazón profundo de la selva del Amazonas vive Curupira, un duende mágico con cabello de fuego brillante y, lo más asombroso, ¡sus pies están volteados hacia atrás! Los cazadores codiciosos que intentan dañar a los árboles o a los animales bebés son engañados por sus huellas inversas: cuando creen que lo están persiguiendo, en realidad se alejan más de él.",
    moral: "Una hermosa historia de advertencia ecológica que recuerda que debemos proteger la selva y cazar solo lo necesario para vivir."
  },
  nigeria: {
    countryName: "Nigeria",
    flag: "🇳🇬",
    title: "La Tortuga Sabia y Sifón",
    story: "En los relatos populares Yoruba de Nigeria, la tortuga 'Ijapa' es el animal más astuto. Una vez hubo una gran sequía y solo Ijapa sabía dónde encontrar comida. En lugar de guardarse el secreto, hizo un trato con las aves para que le prestaran plumas para volar hasta el reino de las nubes y traer lluvia y semillas para todo el bosque.",
    moral: "Demuestra que la astucia y la inteligencia siempre deben usarse para el bienestar colectivo y la ayuda mutua en tiempos difíciles."
  },
  india: {
    countryName: "India",
    flag: "🇮🇳",
    title: "El Puente de los Monos de Rama",
    story: "Para rescatar a su amada Sita, el héroe Rama debió cruzar el océano hacia la isla de Lanka. Un gran ejército de monos sabios liderados por Hanuman comenzó a construir un puente flotante. Escribieron el nombre de Rama en cada piedra y, mágicamente, ¡las pesadas rocas flotaron en el agua salada! Incluso una pequeña ardilla ayudó cargando granitos de arena.",
    moral: "Incluso la contribución más pequeña, como la arena de la ardilla, tiene un valor infinito cuando se hace con amor y determinación."
  },
  china: {
    countryName: "China",
    flag: "🇨🇳",
    title: "El Gran Viaje de Nian",
    story: "Hace miles de años, una temible bestia llamada Nian bajaba de las montañas cada año para asustar a las aldeas chinas. Un anciano descubrió que la bestia le temía al color rojo brillante, al fuego y a los ruidos fuertes de petardos. Las familias decoraron sus casas de rojo y golpearon tambores. Nian huyó asustado y nunca regresó, dando origen al Año Nuevo Chino.",
    moral: "La unión, la inteligencia y la valentía de una comunidad pueden superar los temores más grandes."
  },
  japon: {
    countryName: "Japón",
    flag: "🇯🇵",
    title: "La Leyenda de los Kitsune",
    story: "Los kitsune son zorros mágicos con hasta nueve colas que representan su inmensa sabiduría y poder. Pueden transformarse en humanos amables y juguetones. Son mensajeros de Inari, la deidad de la agricultura y el arroz, y cuidan los campos de cultivo de las malas energías para asegurar que toda la población tenga comida.",
    moral: "Nos recuerda que las apariencias engañan y que los guardianes de la naturaleza vigilan con discreción y bondad."
  },
  rusia: {
    countryName: "Rusia",
    flag: "🇷🇺",
    title: "El Pájaro de Fuego",
    story: "El Pájaro de Fuego es una criatura mágica cuyas plumas brillan con un fuego dorado tan intenso que una sola pluma puede iluminar un gran salón oscuro de un castillo. El valiente Iván es enviado por el Zar a capturarlo. Con ayuda de un lobo sabio, aprende que la belleza del pájaro no debe ser enjaulada por codicia, sino contemplada libre en los cielos nocturnos.",
    moral: "La belleza de la naturaleza y del arte pertenece a todos y pierde su brillo cuando intentamos poseerla de forma egoísta."
  },
  australia: {
    countryName: "Australia",
    flag: "🇦🇺",
    title: "La Serpiente del Arco Iris",
    story: "Los aborígenes australianos cuentan que en el 'Tiempo del Sueño' (la creación del mundo), la gigantesca Serpiente del Arco Iris despertó y viajó por la tierra vacía. Donde se arrastró, formó los valles de los ríos; donde se enroscó, creó las lagunas. Al final, se elevó al cielo brillando con hermosos colores y se convirtió en el arco iris para guiar la lluvia de la fertilidad.",
    moral: "Representa el agua como la dadora primordial de vida y la conexión mística entre el cielo y la tierra árida de Australia."
  }
};

export interface BeastItem {
  name: string;
  description: string;
  habitat: string;
  power: string;
  imageSeed: string;
}

export const BEASTS: Record<string, BeastItem[]> = {
  usa: [
    { name: "Jackalope", description: "Un conejo con astas de ciervo, veloz como el viento y capaz de imitar perfectamente las voces de los vaqueros del desierto.", habitat: "Praderas y desiertos secos de Wyoming", power: "Mimetismo vocal y velocidad supersónica", imageSeed: "jackalope" },
    { name: "Pie Grande (Sasquatch)", description: "Un gigante pacífico cubierto de pelaje marrón que camina en dos patas por bosques frondosos evitando todo contacto humano.", habitat: "Bosques templados del Pacífico Noroeste", power: "Sigilo absoluto y fuerza de la naturaleza", imageSeed: "sasquatch" }
  ],
  brasil: [
    { name: "Boitatá", description: "Una gigantesca serpiente de fuego con ojos ardientes que protege los campos de los incendios provocados por destructores del bosque.", habitat: "Zonas pantanosas del Pantanal y Amazonas", power: "Fuego frío que quema solo a destructores", imageSeed: "boitata" },
    { name: "Saci Pererê", description: "Un niño juguetón de una sola pierna con un gorro rojo mágico que vuela en torbellinos de hojas haciendo travesuras en las cocinas.", habitat: "Bosques abiertos y haciendas del sur", power: "Control sobre torbellinos de viento y desaparición", imageSeed: "saci" }
  ],
  nigeria: [
    { name: "Mami Wata", description: "Un espíritu de las aguas con forma de hermosa sirena con una gran serpiente enroscada que protege los ríos y otorga riqueza a los generosos.", habitat: "Río Níger y costas del Atlántico", power: "Control de las corrientes marinas y curación mística", imageSeed: "mamiwata" },
    { name: "El Leopardo de Bronce", description: "Una estatua real de bronce sagrado que cobra vida por las noches para patrullar los muros del palacio del Oba de Benín.", habitat: "Antiguos templos del Reino de Benín", power: "Piel impenetrable y visión nocturna mágica", imageSeed: "leopardobronze" }
  ],
  india: [
    { name: "Airavata", description: "El majestuoso elefante blanco de diez colmillos y múltiples cabezas que vuela entre las nubes y extrae agua del inframundo para enviarla como lluvia.", habitat: "Los palacios celestiales del monzón", power: "Invocar tormentas refrescantes y vuelo sagrado", imageSeed: "airavata" },
    { name: "Gajendra", description: "El rey de los elefantes del lago que posee una fuerza espiritual inquebrantable, capaz de romper cualquier atadura material.", habitat: "Lagos sagrados del sur de la India", power: "Fuerza titánica y devoción protectora", imageSeed: "gajendra" }
  ],
  china: [
    { name: "Qilin (Unicornio Chino)", description: "Una criatura pacífica con cuerpo de ciervo escamoso, cola de buey y frente de unicornio que camina sobre la hierba sin doblar una sola brizna.", habitat: "Bosques mágicos de melocotoneros", power: "Predecir la prosperidad y aura de paz infinita", imageSeed: "qilin" },
    { name: "Long (El Dragón Celestial)", description: "Una criatura serpentina benévola de 4 garras que vuela sin alas por el firmamento controlando la lluvia, el viento y las cosechas del imperio.", habitat: "Nubes del Monte Tai", power: "Manipulación climática y aliento de nubes de lluvia", imageSeed: "chinesedragon" }
  ],
  japon: [
    { name: "Kappa", description: "Una criatura anfibia con un caparazón de tortuga y una cavidad con agua en la cabeza que le da su fuerza mágica. Le encantan los pepinos.", habitat: "Ríos limpios y arroyos de montaña", power: "Fuerza acuática y cortesía extrema irresistible", imageSeed: "kappa" },
    { name: "Kirin", description: "El dragón-caballo sagrado cubierto de llamas puras que aparece únicamente para señalar el nacimiento de un gobernante sabio y benevolente.", habitat: "Cimas brumosas de los Alpes Japoneses", power: "Velocidad del rayo y purificación espiritual", imageSeed: "kirin" }
  ],
  rusia: [
    { name: "Zmey Gorynych", description: "Un formidable dragón de tres cabezas y garras de hierro que guarda castillos de cristal y exhala fuego de colores mágicos.", habitat: "Las cuevas profundas de los Montes Urales", power: "Exhalación triple de fuego y vuelo atronador", imageSeed: "gorynych" },
    { name: "La Rana de los Pantanos", description: "Una pequeña rana de corona dorada que puede transformarse en una princesa sabia capaz de tejer mantos de estrellas en una sola noche.", habitat: "Pantanos de la Rusia central", power: "Metamorfosis perfecta y magia de hilado estelar", imageSeed: "frogprincess" }
  ],
  australia: [
    { name: "Yowie", description: "Un homínido gigante de pelaje espeso y ojos brillantes que merodea de noche por el bosque australiano, asustando con fuertes gritos.", habitat: "Bosques de eucaliptos del este", power: "Grito sónico paralizador y camuflaje forestal", imageSeed: "yowie" },
    { name: "Bunyip", description: "Un misterioso monstruo acuático que emite ruidos atronadores en lagunas oscuras para evitar que los niños naden solos de noche.", habitat: "Lagunas fluviales (Billabongs) del desierto", power: "Visión anfibia y llamado místico de la lluvia", imageSeed: "bunyip" }
  ]
};
