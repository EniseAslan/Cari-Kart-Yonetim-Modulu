function renderList(){
    const search =document.getElementById('arama-alani').value.toLowerCase();
    const secilenTip = document.getElementById('cariTipiFiltre').value;
    const secilenDurum = document.getElementById('cariDurumuFiltre').value;

    const filtre=cariler.filter(cari => {
        const matchesSearch = cari.unvan.toLowerCase().includes(search);
        const matchesType = secilenTip === '' || cari.cariTipi === secilenTip;
        const matchesStatus = secilenDurum === '' || cari.durum === secilenDurum;

        return matchesSearch && matchesType && matchesStatus;
    });


    const column = filtre.map(cari => `
  <tr class="border-b hover:bg-gray-50">
    <td class="px-4 py-2">
      <button onclick="duzenle(${cari.id})" class="text-blue-600 hover:underline text-left">
        ${cari.unvan}
      </button>
    </td>
    <td class="px-4 py-2">${CARI_TIPI_LABELS[cari.cariTipi]}</td>
    <td class="px-4 py-2">${DURUM_LABELS[cari.durum]}</td>
    <td class="px-4 py-2">
    <button onclick="sil(${cari.id})" class="text-red-600 hover:underline">Sil</button>
    </td>
  </tr>
`).join('');

    document.getElementById('liste-alani').innerHTML=  filtre.length ===0 ? 
    `<p class="text-gray-500 text-center py-6">Kayıt bulunamadı</p>`:   
    `
    <table class="min-w-full border-collapse">
        <thead>
            <tr class="bg-gray-200 text-left">
                <th class="px-4 py-2">Unvan</th>
                <th class="px-4 py-2">Cari Tipi</th>
                <th class="px-4 py-2">Durum</th>
                <th class="px-4 py-2">İslem</th>
            </tr>
        </thead>
        <tbody>
            ${column}
        </tbody>
    </table>
    `;

}
document.getElementById('cariTipiFiltre').innerHTML += enumOptions(CARI_TIPI_LABELS);
document.getElementById('cariDurumuFiltre').innerHTML += enumOptions(DURUM_LABELS);


document.getElementById('arama-alani').addEventListener('input', renderList);
document.getElementById('cariTipiFiltre').addEventListener('change', renderList);
document.getElementById('cariDurumuFiltre').addEventListener('change', renderList);

renderList();

function sil(id){
    const onay =confirm('Silmek istediğinize emin misiniz?');
    if(!onay)return;
    
    cariler =cariler.filter(cari=> cari.id !== id);
    renderList();
    bildirimGoster('Kayıt silindi');
}
