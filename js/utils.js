function enumOptions(labelMap){
    return Object.entries(labelMap)
    .map( ([value, label]) => `<option value="${value}">${label}</option>`)
    .join('');
}

console.log(enumOptions(CARI_TIPI_LABELS));