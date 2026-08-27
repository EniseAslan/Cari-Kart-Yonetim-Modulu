function renderKart() {
  const duzenleme = state.duzenlenenCari !== null;
  const cari = state.duzenlenenCari;

  document.getElementById("kart-alani").innerHTML = `
    <div class="bg-white rounded-lg shadow p-5 mt-6">
      <h2 class="text-lg font-semibold mb-4">${duzenleme ? "Cari Düzenle" : "Yeni Cari Ekle"}</h2>
      <div class="flex flex-col gap-3">
        <div>
          <label class="block text-sm mb-1">Ünvan</label>
          <input type="text" id="unvanInput" value="${duzenleme ? escapeHtml(cari.unvan) : ""}" class="${INPUT_STYLE}">
        </div>
        <div>
          <label class="block text-sm mb-1">Vergi No</label>
          <input type="text" id="vergiNoInput" value="${duzenleme ? escapeHtml(cari.vergiNo) : ""}" class="${INPUT_STYLE}">
        </div>
        <div>
          <label class="block text-sm mb-1">Şehir</label>
          <input type="text" id="sehirInput" value="${duzenleme ? escapeHtml(cari.sehir) : ""}" class="${INPUT_STYLE}">
        </div>
        <div>
          <label class="block text-sm mb-1">Cari Tipi</label>
          <select id="cariTipiInput" class="${INPUT_STYLE}">
            ${enumOptions(CARI_TIPI_LABELS)}
          </select>
        </div>
        <div>
          <label class="block text-sm mb-1">Durum</label>
          <select id="durumInput" class="${INPUT_STYLE}">
            ${enumOptions(DURUM_LABELS)}
          </select>
        </div>
  <div>
  <label class="block text-sm mb-1">Cari Grubu</label>
  <div class="flex items-center gap-2">
    <span id="seciliGrup" class="text-sm text-gray-600">${state.seciliGrup ? state.seciliGrup.adi : "Seçilmedi"}</span>
    <button type="button" onclick="grupModaliAc()" class="text-blue-600 hover:underline text-sm">Grup Seç</button>
  </div>
</div>

        <div class="flex gap-2">
        <button id="kaydetBtn" class="${BTN_PRIMARY}">
         ${duzenleme ? "Güncelle" : "Kaydet"}
        </button>
        ${duzenleme ? `<button id="vazgecBtn" class="${BTN_SECONDARY}">Vazgeç</button>` : ""}
        </div>
      </div>
    </div>
  `;

  if (duzenleme) {
    document.getElementById("cariTipiInput").value = cari.cariTipi;
    document.getElementById("durumInput").value = cari.durum;
    document.getElementById("vazgecBtn").addEventListener("click", vazgec);
  }

  document.getElementById("kaydetBtn").addEventListener("click", kaydet);
}

function kaydet() {
  const unvan = document.getElementById("unvanInput").value.trim();
  const vergiNo = document.getElementById("vergiNoInput").value.trim();
  const cariTipi = document.getElementById("cariTipiInput").value;
  const durum = document.getElementById("durumInput").value;
  const sehir = document.getElementById("sehirInput").value.trim;

  if (!unvan || !vergiNo) {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }
  if (!vergiNoKontrol(vergiNo)) {
    alert("Vergi No 10 haneli rakamlardan oluşmalıdır.");
    return;
  }

  if (state.duzenlenenCari === null) {
    const yeniCari = {
      id: yeniId(),
      unvan,
      vergiNo,
      cariTipi,
      durum,
      sehir,
      grupId: state.seciliGrup ? state.seciliGrup.id : null,
      grupAdi: state.seciliGrup ? state.seciliGrup.adi : "",
    };

    cariler.push(yeniCari);
  } else {
    const index = cariler.findIndex((c) => c.id === state.duzenlenenCari.id);
    cariler[index] = {
      ...cariler[index],
      unvan,
      vergiNo,
      cariTipi,
      durum,
      sehir,
      grupId: state.seciliGrup ? state.seciliGrup.id : null,
      grupAdi: state.seciliGrup ? state.seciliGrup.adi : "",
    };
  }

  state.duzenlenenCari = null;
  state.seciliGrup = null;

  renderList();
  renderKart();
}

function yeniId() {
  if (cariler.length === 0) {
    return 1;
  }
  const maxId = Math.max(...cariler.map((c) => c.id));
  return maxId + 1;
}

function duzenle(id) {
  const cari = cariler.find((c) => c.id === id);

  if (!cari) {
    alert("Cari bulunamadı.");
    return;
  }

  state.duzenlenenCari = cari;
  state.seciliGrup = cari.grupId
    ? { id: cari.grupId, adi: cari.grupAdi }
    : null;
  renderKart();
}

function vazgec() {
  state.duzenlenenCari = null;
  state.seciliGrup = null;
  renderKart();
}
function grupModaliAc() {
  acModal(cariGruplari, function (secilenGrup) {
    state.seciliGrup = secilenGrup;
    renderKart();
  });
}
renderKart();
