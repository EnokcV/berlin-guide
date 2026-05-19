import Link from "next/link";

const lugares = [
  {
    slug: "brandenburger-tor",
    nombreDE: "Das Brandenburger Tor",
    nombreES: "Puerta de Brandeburgo",
    descripcion: "El símbolo más famoso de Berlín y de la reunificación alemana.",
    color: "from-yellow-500 to-orange-500",
    imagen: "/brandenburger-tor.jpg"
  },
  {
    slug: "berliner-dom",
    nombreDE: "Der Berliner Dom",
    nombreES: "Catedral de Berlín",
    descripcion: "Impresionante catedral barroca a orillas del río Spree.",
    color: "from-purple-600 to-indigo-600",
    imagen: "/berliner-dom.jpg"
  },
  {
    slug: "east-side-gallery",
    nombreDE: "Die Berliner Mauer",
    nombreES: "East Side Gallery",
    descripcion: "Fragmento del Muro de Berlín convertido en galería de arte.",
    color: "from-gray-600 to-gray-800",
    imagen: "/east-side-gallery.jpg"
  },
  {
    slug: "reichstag",
    nombreDE: "Das Reichstagsgebäude",
    nombreES: "Reichstag",
    descripcion: "Sede del Parlamento alemán con cúpula de vidrio panorámica.",
    color: "from-blue-600 to-cyan-500",
    imagen: "/reichstag.jpg"
  },
  {
    slug: "alexanderplatz",
    nombreDE: "Der Alexanderplatz",
    nombreES: "Plaza Alexander",
    descripcion: "Plaza central con la famosa Torre de TV (Fernsehturm).",
    color: "from-red-600 to-pink-600",
    imagen: "/alexanderplatz.jpg"
  },
  {
    slug: "pergamonmuseum",
    nombreDE: "Das Pergamonmuseum",
    nombreES: "Museo Pérgamo",
    descripcion: "Museo con colecciones arqueológicas mundialmente reconocidas.",
    color: "from-amber-600 to-yellow-600",
    imagen: "/pergamonmuseum.jpg"
  },
  {
    slug: "tiergarten",
    nombreDE: "Der Tiergarten",
    nombreES: "Tiergarten",
    descripcion: "Gran parque urbano, el pulmon verde de la capital alemana.",
    color: "from-green-600 to-emerald-600",
    imagen: "/tiergarten.jpg"
  }
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <section className="text-center py-12 bg-gradient-to-br from-green-50 to-red-50 rounded-2xl mb-10 border-2 border-green-600">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          🇩🇪 Berlin Guide für dich
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
          ¡Bienvenido a Berlín! Descubre los lugares más emblemáticos de la capital alemana.
        </p>
        <p className="text-lg text-gray-500">
          Una guía para estudiantes mexicanos que visitan Berlín por primera vez.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            🇲🇽 Para mexicanos
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            🇩🇪 Aprende alemán
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            📍 Mapa interactivo
          </span>
        </div>
      </section>

      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Die 7 wichtigsten Sehenswürdigkeiten
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lugares.map((lugar) => (
          <Link
            key={lugar.slug}
            href={`/lugares/${lugar.slug}`}
            className="block group"
          >
            <div className={`bg-gradient-to-br ${lugar.color} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full`}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={lugar.imagen} 
                  alt={lugar.nombreES}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-green-700 transition">
                  {lugar.nombreDE}
                </h3>
                <p className="text-sm text-red-700 font-medium mb-3">{lugar.nombreES}</p>
                <p className="text-gray-600 text-sm">{lugar.descripcion}</p>
                <div className="mt-4 flex items-center text-green-700 font-medium text-sm">
                  Mehr erfahren →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/frases" className="block p-6 bg-yellow-50 border-2 border-yellow-400 rounded-xl hover:bg-yellow-100 transition text-center">
          <span className="text-4xl mb-3 block">🗣️</span>
          <h3 className="font-bold text-lg text-yellow-800">Frases en Alemán</h3>
          <p className="text-sm text-yellow-700 mt-2">Aprende las frases básicas para desenvolverte en Berlín</p>
        </Link>
        <Link href="/mapa" className="block p-6 bg-blue-50 border-2 border-blue-400 rounded-xl hover:bg-blue-100 transition text-center">
          <span className="text-4xl mb-3 block">🗺️</span>
          <h3 className="font-bold text-lg text-blue-800">Mapa de Berlín</h3>
          <p className="text-sm text-blue-700 mt-2">Explora los lugares turísticos en el mapa interactivo</p>
        </Link>
        <div className="block p-6 bg-gray-50 border-2 border-gray-300 rounded-xl text-center">
          <span className="text-4xl mb-3 block">💡</span>
          <h3 className="font-bold text-lg text-gray-800">Información Práctica</h3>
          <p className="text-sm text-gray-600 mt-2">Transporte, moneda, horarios y más</p>
        </div>
      </section>
    </div>
  );
}