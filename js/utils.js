function enumOptions(labelMap){
    return Object.entries(labelMap)
    .map( ([value, label]) => `<option value="${value}">${label}</option>`)
    .join('');
}

console.log(enumOptions(CARI_TIPI_LABELS));

function bildirimGoster(mesaj){
    const bildirim =document.createElement('div');
    bildirim.textContent=mesaj;
    bildirim.className='fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow';
    document.body.appendChild(bildirim);

    setTimeout(()=>{
        bildirim.remove();
    },2000);
    
}