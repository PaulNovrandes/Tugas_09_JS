function ambilData(){
  var mahasiswa1 = {
    nama: "saya",
    umur: 21,
    jurusan: "Tekni Perikanan",
    ipk: 3.5
  }
  var mahasiswa2 = {
    nama: "Aku",
    umur: 22,
    jurusan: "Sistem Informasi",
    ipk: 3.6
  }

  for (var x in mahasiswa1) {
    console.log(mahasiswa1[x]);
  }
  for (var y in mahasiswa2) {
    console.log(mahasiswa2[y]);
  }
}

ambilData();
