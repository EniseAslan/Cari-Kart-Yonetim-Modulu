function acModal(liste, onSecim) {
  document.getElementById("modal-alani").innerHTML = `
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center" onclick="kapatModal()">
      <div class="bg-white rounded-lg shadow p-5 w-80" onclick="event.stopPropagation()">
        <h2 class="text-lg font-semibold mb-4">Cari Grubu Seç</h2>
        <div class="flex flex-col gap-1">
          ${liste
            .map(
              (item) => `
            <button class="text-left px-3 py-2 rounded hover:bg-gray-100" onclick="secildi(${item.id})">
              ${escapeHtml(item.adi)}
            </button>
          `,
            )
            .join("")}
        </div>
        <button class="mt-4 text-sm text-gray-500 hover:underline" onclick="kapatModal()">Kapat</button>
      </div>
    </div>
  `;

  state.modalListesi = liste;
  state.modalCallback = onSecim;
}

function secildi(id) {
  const secilenOge = state.modalListesi.find((item) => item.id === id);
  kapatModal();
  state.modalCallback(secilenOge);
}

function kapatModal() {
  document.getElementById("modal-alani").innerHTML = "";
}
