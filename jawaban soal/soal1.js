// Definisikan tabel yang telah diberikan
const table = [
  { code: 'A001', name: 'Wati', parent: null },
  { code: 'A002', name: 'Wira', parent: 'A001' },
  { code: 'A003', name: 'Andi', parent: 'A002' },
  { code: 'A004', name: 'Bagus', parent: 'A002' },
  { code: 'A005', name: 'Siti', parent: 'A001' },
  { code: 'A006', name: 'Hasan', parent: 'A005' },
  { code: 'A007', name: 'Abdul', parent: 'A006' },
];

function getAnak(code) {
  const data = table.find(data => data.code === code);
  if (!data) return [];

  const anak = [];
  for (const row of table) {
    if (row.parent === code) {
      anak.push(row.name);
    }
  }
  return anak;
}

// Contoh penggunaan fungsi
console.log(getAnak('A001'));  // Output: ['Wira', 'Siti']
console.log(getAnak('A002'));  // Output: ['Andi', 'Bagus']
console.log(getAnak('A005'));  // Output: ['Hasan']