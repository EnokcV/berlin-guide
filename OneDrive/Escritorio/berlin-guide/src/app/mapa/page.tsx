import Link from "next/link";

const lugares = [
  { nombre: "Brandenburger Tor", coords: "52.5163,13.3777", slug: "brandenburger-tor" },
  { nombre: "Berliner Dom", coords: "52.5169,13.4129", slug: "berliner-dom" },
  { nombre: "East Side Gallery", coords: "52.5050,13.4397", slug: "east-side-gallery" },
  { nombre: "Reichstagsgebäude", coords: "52.5186,13.3761", slug: "reichstag" },
  { nombre: "Alexanderplatz", coords: "52.5219,13.4133", slug: "alexanderplatz" },
  { nombre: "Pergamonmuseum", coords: "52.5169,13.3976", slug: "pergamonmuseum" },
  { nombre: "Tiergarten", coords: "52.5145,13.3501", slug: "tiergarten" },
];

export default function MapaPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">🗺️ Interaktive Karte</h1>
        <p className="text-xl">Mapa interactivo de Berlín</p>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 mb-6">
        <p className="text-yellow-800">
          <strong>💡 Tipp:</strong> Klicke auf einen Ort in der Liste, um mehr zu erfahren. 
          <br />
          <strong>Consejo:</strong> Haz clic en un lugar de la lista para ver más información.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d4840!2d13.4!3d52.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sde!4v1700000000000!5m2!1ses!2sde"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📍 Alle Orte / Todos los lugares</h2>
          <div className="space-y-3">
            {lugares.map((lugar, index) => (
              <Link
                key={index}
                href={`/lugares/${lugar.slug}`}
                className="block p-3 bg-gray-50 rounded-lg hover:bg-green-100 transition border-l-4 border-green-600"
              >
                <p className="font-bold text-gray-800">{lugar.nombre}</p>
                <p className="text-xs text-gray-500">{lugar.coords}</p>
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">🚇 Transport / Transporte</h3>
            <p className="text-sm text-gray-600 mb-2">
              Die beste way to Explore Berlin is mit der U-Bahn und S-Bahn.
            </p>
            <p className="text-sm text-gray-600">
              La mejor forma de explorar Berlín es con el metro y el tren urbano.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-100 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🚌 Verkehrsmittel / Medios de transporte</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">🚇 U-Bahn</h3>
            <p className="text-sm text-gray-600">Metro - rápido y eficiente</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2">🚆 S-Bahn</h3>
            <p className="text-sm text-gray-600">Tren urbano - conecta suburbios</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-yellow-700 mb-2">🚌 Bus</h3>
            <p className="text-sm text-gray-600">Autobuses - muchas rutas</p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 border-2 border-blue-400 rounded-xl p-6">
        <h2 className="text-xl font-bold text-blue-800 mb-3">💶 Währung / Moneda</h2>
        <p className="text-blue-700">
          In Deutschland bezahlt man mit Euro (€). Die meisten Geschäfte akzeptieren auch Kreditkarten.
        </p>
        <p className="text-blue-600 text-sm mt-2">
          En Alemania se paga con euros (€). La mayoría de las tiendas también aceptan tarjetas de crédito.
        </p>
      </div>
    </div>
  );
}