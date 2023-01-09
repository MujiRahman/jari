function cariKembar(str) {
    let panjangkembar = '';
    let kembaran = 0;
  
    for (let i = 0; i < str.length; i++) {
      let substring = '';
      let panjang = 0;
  
      for (let j = i; j < str.length; j++) {
        if (!substring.includes(str[j])) {
          substring += str[j];
          panjang++;
        }
        else {
          break;
        }
      }
  
      if (panjang > kembaran) {
        panjangkembar = substring;
        kembaran = panjang;
      }
    }
    return kembaran;
  }
  
  console.log(cariKembar('abcabcbb'));
  console.log(cariKembar('bbbbbb'));
  console.log(cariKembar('pwwkew'));