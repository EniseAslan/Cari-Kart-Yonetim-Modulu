const BTN_PRIMARY =
  "bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 w-fit transition-colors duration-150";
const BTN_SECONDARY =
  "border border-gray-300 rounded px-4 py-2 w-fit hover:bg-gray-50";
const INPUT_STYLE =
  "border border-gray-300 rounded-md px-3 py-2 w-full transition-all duration-150 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent";

function escapeHtml(deger) {
  return String(deger)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function enumOptions(labelMap) {
  return Object.entries(labelMap)
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join("");
}

function durumBadge(durum) {
  const renk =
    durum === Durum.AKTIF
      ? "bg-green-100 text-green-700"
      : "bg-gray-100 text-gray-600";
  return `<span class="px-2 py-0.5 rounded-full text-xs font-medium ${renk}">${DURUM_LABELS[durum]}</span>`;
}

console.log(enumOptions(CARI_TIPI_LABELS));

function bildirimGoster(mesaj) {
  const bildirim = document.createElement("div");
  bildirim.textContent = mesaj;
  bildirim.className =
    "fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow";
  document.body.appendChild(bildirim);

  setTimeout(() => {
    bildirim.remove();
  }, 2000);
}

function vergiNoKontrol(vergiNo) {
  return /^\d{10}$/.test(vergiNo);
}
