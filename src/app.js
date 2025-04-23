const excusasPrincipales = [
  "Se me olvidó",
  "No pude porque",
  "Tuve un problema con",
  "Me retrasé debido a",
  "No lo hice porque"
];

const excusasSecundarias = [
  "el tráfico estaba terrible.",
  "mi perro se escapó.",
  "me quedé sin batería en el teléfono.",
  "estaba enfermo.",
  "tenía una cita importante."
];

function generarExcusa() {
  const principal = excusasPrincipales[Math.floor(Math.random() * excusasPrincipales.length)];
  const secundaria = excusasSecundarias[Math.floor(Math.random() * excusasSecundarias.length)];
  return `${principal} ${secundaria}`;
}

document.getElementById("generar").addEventListener("click", function() {
  const excusa = generarExcusa();
  document.getElementById("excusa").textContent = excusa;
});