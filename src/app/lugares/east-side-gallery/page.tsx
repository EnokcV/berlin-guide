export default function EastSideGallery() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl p-8 text-white mb-8">
        <h1 className="text-4xl font-bold mb-2">Die Berliner Mauer - East Side Gallery</h1>
        <p className="text-xl">East Side Gallery - El Muro de Berlín</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="h-64 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
          <span className="text-8xl">🧱</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-green-700 mb-3">📜 Geschichte / Historia</h2>
          <p className="text-gray-700">
            Die East Side Gallery ist ein 1,3 km langes Stück der Berliner Mauer, das 1990 in eine Freiluftgalerie verwandelt wurde. Es gibt über 100 Gemälde von Künstlern aus aller Welt. Das berühmteste Bild ist "Der Bruderkuss".
          </p>
          <p className="text-gray-600 mt-3 text-sm">
            La East Side Gallery es un tramo de 1.3 km del Muro de Berlín convertido en galería al aire libre en 1990. Hay más de 100 pinturas de artistas de todo el mundo. La obra más famosa es "El beso del hermano".
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-3">ℹ️ Praktische Infos / Info Práctica</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>📍 Adresse:</strong> Mühlenstraße, 10249 Berlin</li>
            <li><strong>🚇 S-Bahn:</strong> S-Bahnhof Warschauer Straße</li>
            <li><strong>🎟️ Preis:</strong> Kostenlos</li>
            <li><strong>🕐 Öffnungszeiten:</strong> 24/7</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-4">🗣️ Nützliche Sätze / Frases útiles</h2>
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-lg font-medium text-gray-800">Die East Side Gallery ist fantastisch!</span>
            <span className="text-sm text-red-700">→ ¡La East Side Gallery es fantástica!</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-lg font-medium text-gray-800">Ich mache ein Foto von der Mauer.</span>
            <span className="text-sm text-red-700">→ Tomo una foto del Muro.</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-purple-700 mb-3">🗺️ Karte / Mapa</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.947183744854!2d13.4397!3d52.5050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e4c3c3c3c3%3A0x470e36a0b3b3b3b3!2sEast%20Side%20Gallery!5e0!3m2!1ses!2sde!4v1234567890"
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