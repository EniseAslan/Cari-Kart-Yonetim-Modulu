//ENUM
const CariTipi={
    MUSTERI: 'MUSTERI',
    TEDARIKCI: 'TEDARIKCI',
    HER_IKISI: 'HER_IKISI',
    
}

//label
const CARI_TIPI_LABELS = {
    [CariTipi.MUSTERI]: 'Müşteri',
    [CariTipi.TEDARIKCI]: 'Tedarikçi',
    [CariTipi.HER_IKISI]: 'Her İkisi',
};

const Durum = {
    AKTIF: 'AKTIF',
    PASIF: 'PASIF'
}
const DURUM_LABELS = {
    [Durum.AKTIF]: 'Aktif',
    [Durum.PASIF]: 'Pasif',
};


const cariGruplari = [
    { id: 1, adi: 'Bayiler' },
    { id: 2, adi: 'Grup 2' },
    { id: 3, adi: 'Grup 3' },
    { id: 4, adi: 'Grup 4' },
    { id: 5, adi: 'Grup 5' },
];

let cariler = [
    { id: 1, unvan: 'Ali Duman', vergiNo: '1111111111', cariTipi: CariTipi.MUSTERI, durum: Durum.AKTIF, grupId: 1, grupAdi: 'Bayiler', sehir: 'İstanbul' },
    { id: 2, unvan: 'Ayşe Aslan', vergiNo: '2222222222', cariTipi: CariTipi.TEDARIKCI, durum: Durum.PASIF, grupId: 2, grupAdi: 'Grup 2', sehir: 'Ankara' },
    { id: 3, unvan: 'Mehmet Can', vergiNo: '3333333333', cariTipi: CariTipi.HER_IKISI, durum: Durum.AKTIF, grupId: 3, grupAdi: 'Grup 3', sehir: 'İzmir' },
    { id: 4, unvan: 'Zeynep Yılmaz', vergiNo: '4444444444', cariTipi: CariTipi.MUSTERI, durum: Durum.PASIF, grupId: 4, grupAdi: 'Grup 4', sehir: 'Bursa' },
    { id: 5, unvan: 'Melike Yıldırım', vergiNo: '5555555555', cariTipi: CariTipi.HER_IKISI, durum: Durum.PASIF, grupId: 5, grupAdi: 'Grup 5', sehir: 'Antalya' },
];

console.log(cariler);
console.log(cariGruplari);
