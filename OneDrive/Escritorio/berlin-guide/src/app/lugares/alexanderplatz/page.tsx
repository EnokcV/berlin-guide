export default function Alexanderplatz() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white mb-8">
        <h1 className="text-4xl font-bold mb-2">Der Alexanderplatz</h1>
        <p className="text-xl">Plaza Alexander</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="h-64 bg-gradient-to-br from-red-200 to-pink-300 flex items-center justify-center">
          <span className="text-8xl">📡</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-green-700 mb-3">📜 Geschichte / Historia</h2>
          <p className="text-gray-700">
            Der Alexanderplatz ist seit dem 19. Jahrhundert ein wichtiger Platz in Berlin. Der Fernsehturm ist 368 Meter hoch und bietet eine tolle Aussicht. Der Bahnhof ist einer der wichtigsten U-Bahnhöfe der Stadt.
          </p>
          <p className="text-gray-600 mt-3 text-sm">
            La Plaza Alexander es un lugar importante de Berlín desde el siglo XIX. La Torre de TV tiene 368 metros de altura y ofrece una vista increíble. La estación de tren es una de las más importantes de la ciudad.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-3">ℹ️ Praktische Infos / Info Práctica</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>📍 Adresse:</strong> Alexanderplatz, 10178 Berlin</li>
            <li><strong>🚇 U-Bahn/S-Bahn:</strong> Alexanderplatz</li>
            <li><strong>🎟️ Fernsehturm:</strong> 15€ (Erwachsene)</li>
            <li><strong>🕐 Öffnungszeiten:</strong> 24/7 (Platz), 10:00-22:00 (Turm)</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-4">🗣️ Nützliche Sätze / Frases útiles</h2>
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-lg font-medium text-gray-800">Ich mache ein Foto vom Fernsehturm.</span>
            <span className="text-sm text-red-700">→ Tomo una foto de la Torre de TV.</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-lg font-medium text-gray-800">Wo ist die U-Bahn-Station?</span>
            <span className="text-sm text-red-700">→ ¿Dónde está la estación del metro?</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-purple-700 mb-3">🗺️ Karte / Mapa</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.947183744854!2d13.4133!3d52.5219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e5e5e5e5e5%3A0x470e36a0b3b3b3b3!2sAlexanderplatz!5e0!3m2!1ses!2sde!4v1234567890"
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