export default function Reichstag() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white mb-8">
        <h1 className="text-4xl font-bold mb-2">Das Reichstagsgebäude</h1>
        <p className="text-xl">Reichstag - Edificio del Parlamento</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="h-64 bg-gradient-to-br from-blue-200 to-cyan-300 flex items-center justify-center">
          <span className="text-8xl">🏛️</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-green-700 mb-3">📜 Geschichte / Historia</h2>
          <p className="text-gray-700">
            Das Reichstagsgebäude wurde 1894 erbaut. 1999 wurde die gläserne Kuppel von Norman Foster eröffnet. Die Kuppel bietet einen360-Grad-Blick über Berlin. Das deutsche Parlament (Bundestag) tagt hier.
          </p>
          <p className="text-gray-600 mt-3 text-sm">
            El edificio del Reichstag fue construido en 1894. En 1999 se inauguró la cúpula de cristal de Norman Foster. La cúpula ofrece una vista panorámica de 360 grados sobre Berlín. El parlamento alemán (Bundestag) sesiona aquí.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-3">ℹ️ Praktische Infos / Info Práctica</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>📍 Adresse:</strong> Platz der Republik, 11011 Berlin</li>
            <li><strong>🚇 U-Bahnhof:</strong> Bundestag (U5)</li>
            <li><strong>🎟️ Preis:</strong> Kostenlos (Reservierung nötig)</li>
            <li><strong>🕐 Öffnungszeiten:</strong> 8:00 - 24:00 Uhr</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-4">🗣️ Nützliche Sätze / Frases útiles</h2>
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-lg font-medium text-gray-800">Ich gehe zum Reichstagsgebäude.</span>
            <span className="text-sm text-red-700">→ Voy al Reichstag.</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-lg font-medium text-gray-800">Die Aussicht ist wunderschön.</span>
            <span className="text-sm text-red-700">→ La vista es preciosa.</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-purple-700 mb-3">🗺️ Karte / Mapa</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.947183744854!2d13.3761!3d52.5186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e4c4c4c4c4%3A0x470e36a0b3b3b3b3!2sReichstagsgeb%C3%A4ude!5e0!3m2!1ses!2sde!4v1234567890"
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