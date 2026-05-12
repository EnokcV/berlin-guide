export default function Tiergarten() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white mb-8">
        <h1 className="text-4xl font-bold mb-2">Der Tiergarten</h1>
        <p className="text-xl">Tiergarten - El pulmOn verde de BerlIn</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="h-64 bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center">
          <span className="text-8xl">🌳</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-green-700 mb-3">📜 Geschichte / Historia</h2>
          <p className="text-gray-700">
            Der Tiergarten ist Berlins größter Park mit einer Fläche von 210 Hektar. Ursprünglich war es ein Jagdgebiet im 16. Jahrhundert. Heute ist er ein beliebter Ort für Spaziergänge, Sport und Freizeit. Die Siegessäule steht auch im Park.
          </p>
          <p className="text-gray-600 mt-3 text-sm">
            El Tiergarten es el parque más grande de Berlín con 210 hectáreas. Originalmente era un área de caza en el siglo XVI. Hoy es un lugar popular para paseos, deportes y ocio. La Columna de la Victoria también está en el parque.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-3">ℹ️ Praktische Infos / Info Práctica</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>📍 Adresse:</strong> Tiergarten, 10785 Berlin</li>
            <li><strong>🚇 U-Bahn:</strong> Hansaplatz, Bellevue (U9)</li>
            <li><strong>🎟️ Preis:</strong> Kostenlos</li>
            <li><strong>🕐 Öffnungszeiten:</strong> 24/7</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-4">🗣️ Nützliche Sätze / Frases útiles</h2>
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-lg font-medium text-gray-800">Der Tiergarten ist sehr groß.</span>
            <span className="text-sm text-red-700">→ El Tiergarten es muy grande.</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-lg font-medium text-gray-800">Ich gehe gern spazieren.</span>
            <span className="text-sm text-red-700">→ Me gusta caminar.</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-purple-700 mb-3">🗺️ Karte / Mapa</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.947183744854!2d13.3501!3d52.5145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d4d4d4d4d4%3A0x470e36a0b3b3b3b3!2sTiergarten!5e0!3m2!1ses!2sde!4v1234567890"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}