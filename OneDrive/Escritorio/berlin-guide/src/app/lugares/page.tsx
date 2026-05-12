import Link from "next/link";

const lugares = [
  {
    slug: "brandenburger-tor",
    nombreDE: "Das Brandenburger Tor",
    nombreES: "Puerta de Brandeburgo",
    coords: "52.5163,13.3777"
  },
  {
    slug: "berliner-dom",
    nombreDE: "Der Berliner Dom",
    nombreES: "Catedral de Berlín",
    coords: "52.5169,13.4129"
  },
  {
    slug: "east-side-gallery",
    nombreDE: "Die Berliner Mauer",
    nombreES: "East Side Gallery",
    coords: "52.5050,13.4397"
  },
  {
    slug: "reichstag",
    nombreDE: "Das Reichstagsgebäude",
    nombreES: "Reichstag",
    coords: "52.5186,13.3761"
  },
  {
    slug: "alexanderplatz",
    nombreDE: "Der Alexanderplatz",
    nombreES: "Plaza Alexander",
    coords: "52.5219,13.4133"
  },
  {
    slug: "pergamonmuseum",
    nombreDE: "Das Pergamonmuseum",
    nombreES: "Museo Pérgamo",
    coords: "52.5169,13.3976"
  },
  {
    slug: "tiergarten",
    nombreDE: "Der Tiergarten",
    nombreES: "Tiergarten",
    coords: "52.5145,13.3501"
  }
];

export default function LugaresPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Alle Sehenswürdigkeiten
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lugares.map((lugar) => (
          <Link
            key={lugar.slug}
            href={`/lugares/${lugar.slug}`}
            className="block p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-green-500 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">{lugar.nombreDE}</h2>
            <p className="text-red-700 font-medium">{lugar.nombreES}</p>
            <p className="text-gray-500 text-sm mt-2">📍 {lugar.coords}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}