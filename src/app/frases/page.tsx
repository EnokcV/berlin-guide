"use client";

const frases = [
  { deutsch: "Hier ist das Brandenburger Tor.", espanol: "Aquí está la Puerta de Brandeburgo.", phonetic: "ji-ir ist das brandenburger tor" },
  { deutsch: "Dort ist der Berliner Dom.", espanol: "Allá está la Catedral de Berlín.", phonetic: "dort ist der berliner dom" },
  { deutsch: "Ich gehe zum Reichstagsgebäude.", espanol: "Voy al Reichstag.", phonetic: "ij gué zum rajstagsgéböide" },
  { deutsch: "Ich esse eine Currywurst.", espanol: "Como una Currywurst.", phonetic: "ij esse aine curri-vurst" },
  { deutsch: "Das ist sehr schön!", espanol: "¡Eso es muy bonito!", phonetic: "das ist ser shön" },
  { deutsch: "Wie viel kostet das?", espanol: "¿Cuánto cuesta eso?", phonetic: "vi fil kostet das" },
  { deutsch: "Ich möchte eine Eintrittskarte, bitte.", espanol: "Quisiera una entrada, por favor.", phonetic: "ij möchte aine aintrits-karte, bitte" },
  { deutsch: "Wo ist die U-Bahn-Station?", español: "¿Dónde está la estación del metro?", phonetic: "vo ist die u-bahn-shtatsion" },
  { deutsch: "Ich bin aus Mexiko.", espanol: "Soy de México.", phonetic: "ij bin aus méksiko" },
  { deutsch: "Berlin ist eine tolle Stadt!", espanol: "¡Berlín es una ciudad increíble!", phonetic: "berlin ist aine tole shtat" },
  { deutsch: "Ich besuche das Pergamonmuseum.", espanol: "Visito el Museo Pérgamo.", phonetic: "ij besuhe das pergamon-museum" },
  { deutsch: "Der Tiergarten ist sehr groß.", espanol: "El Tiergarten es muy grande.", phonetic: "der tiergarten ist ser grós" },
  { deutsch: "Ich mache ein Foto vom Fernsehturm.", espanol: "Tomo una foto de la Torre de TV.", phonetic: "ij majhe ain foto fom fernsé-turm" },
  { deutsch: "Entschuldigung, sprechen Sie Englisch?", espanol: "Disculpe, ¿habla usted inglés?", phonetic: "entshuldigung, shprechen zi énglish" },
  { deutsch: "Die East Side Gallery ist fantastisch!", espanol: "¡La East Side Gallery es fantástica!", phonetic: "di iast said galeri ist fantastish" },
];

export default function FrasesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-white mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">🗣️ Nützliche Sätze</h1>
        <p className="text-xl">Frases útiles en alemán para tu viaje a Berlín</p>
      </div>

      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-4 mb-8">
        <h3 className="font-bold text-green-800 mb-2">💡 Tipp / Consejo:</h3>
        <p className="text-green-700 text-sm">
          Klicke auf "Hören" um die Aussprache zu sehen. Click en "Escuchar" para ver la pronunciación.
        </p>
      </div>

      <div className="space-y-4">
        {frases.map((frase, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold mb-2">
                  #{index + 1}
                </span>
                <p className="text-xl font-bold text-gray-800 mb-1">{frase.deutsch}</p>
                <p className="text-lg text-blue-700 font-medium">{frase.espanol}</p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm font-medium"
                  onClick={() => alert(`Pronunciación: ${frase.phonetic}`)}
                >
                  🔊 Hören / Escuchar
                </button>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                <span className="font-medium">Phonetik:</span> {frase.phonetic}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-gray-100 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 Mehr lernen / Aprende más</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2">Grundwörter / Palabras básicas</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Ja → Sí</li>
              <li>Nein → No</li>
              <li>Danke → Gracias</li>
              <li>Bitte → Por favor</li>
              <li>Entschuldigung → Disculpe</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">Nützliche Wörter / Palabras útiles</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Wasser → Agua</li>
              <li>Brot → Pan</li>
              <li>Kaffee → Café</li>
              <li>Bahnhof → Estación</li>
              <li>Straße → Calle</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}