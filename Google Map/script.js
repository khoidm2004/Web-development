function searchHandler() {
    const street = document.getElementById('address');
    const city = document.getElementById('city');
    const map = document.getElementById('mapFrame');
    map.src =  `https://www.google.com/maps?q=${street.value}${street.city}&output=embed `
  }