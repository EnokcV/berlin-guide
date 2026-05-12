export default function BrandenburgerTor() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-white mb-8">
        <h1 className="text-4xl font-bold mb-2">Das Brandenburger Tor</h1>
        <p className="text-xl">Puerta de Brandeburgo</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
          <span className="text-8xl">🏛️</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-green-700 mb-3">📜 Geschichte / Historia</h2>
          <p className="text-gray-700">
            Die Brandenburgische Tor wurde 1791 gebaut. Es ist das berühmteste Symbol Berlins und der deutschen Wiedervereinigung. Die Quadriga auf der Spitze wurde 1806 von Napoleon nach Paris gebracht und 1814 zurückgegeben.
          </p>
          <p className="text-gray-600 mt-3 text-sm">
            La Puerta de Brandeburgo fue construida en 1791. Es el símbolo más famoso de Berlín y de la reunificación alemana. La cuadriga en la parte superior fue tomada por Napoleón en 1806 y devuelta en 1814.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-3">ℹ️ Praktische Infos / Info Práctica</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>📍 Adresse:</strong> Pariser Platz, 10117 Berlin</li>
            <li><strong>🚇 U-Bahn:</strong> U-Bahnhof Brandenburger Tor (U5)</li>
            <li><strong>🎟️ Preis:</strong> Kostenlos</li>
            <li><strong>🕐 Öffnungszeiten:</strong> 24/7 (Außenbereich)</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-4">🗣️ Nützliche Sätze / Frases útiles</h2>
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-lg font-medium text-gray-800">Hier ist das Brandenburger Tor.</span>
            <span className="text-sm text-red-700">→ Aquí está la Puerta de Brandeburgo.</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-lg font-medium text-gray-800">Das ist sehr schön!</span>
            <span className="text-sm text-red-700">→ ¡Eso es muy bonito!</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-purple-700 mb-3">🗺️ Karte / Mapa</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.947183744854!2d13.3777!3d52.5163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e2c207a4a3%3A0x470e36a0b3b3b3b3!2sBrandenburger%20Tor!5e0!3m2!1ses!2sde!4v1234567890"
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