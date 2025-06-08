import React, { useState } from "react";

export default function A1() {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const solution = "Hola, me llamo Ana y vivo en Madrid.";

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Dictée A1</h2>
      <audio controls src="/assets/audio/a1/dictee1.mp3"></audio>
      <textarea
        placeholder="Écris ce que tu entends ici"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="block w-full border p-2 my-4"
      />
      <button onClick={() => setShow(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Voir la correction
      </button>
      {show && <p className="mt-4 text-green-600">Solution : {solution}</p>}
    </div>
  );
}