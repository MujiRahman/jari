function penambahan(n) {
    const nambah = [0, 1];
    for (let i = 2; i < n; i++) {
      nambah.push(nambah[i - 1] + nambah[i - 2]);
    }
    console.log(nambah.join(', '));
  }
  
  penambahan(5);
  penambahan(10);
  