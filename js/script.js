document.addEventListener("DOMContentLoaded", function () {
    let inputSisi = document.getElementById("sisi");
    let selectSatuan = document.getElementById("satuan");

    let inputPanjang = document.getElementById("panjang");
    let inputLebar = document.getElementById("lebar");
    let selectSatuanPP = document.getElementById("satuanPP");

    // Event listener untuk mengganti placeholder sesuai satuan yang dipilih
    selectSatuan.addEventListener("change", function () {
        inputSisi.placeholder = `Masukkan Nilai Sisi (${this.value})`;
    });

    selectSatuanPP.addEventListener("change", function () {
        inputPanjang.placeholder = `Panjang (${this.value})`;
        inputLebar.placeholder = `Lebar (${this.value})`;
    });
});

// Fungsi menghitung luas dan keliling persegi
function hitungPersegi() {
    let sisi = document.getElementById("sisi").value;
    let satuan = document.getElementById("satuan").value;
    let hasil = document.getElementById("hasilPersegi");

    let rumus_luas = document.getElementById("rumus_luas");
    let perhitungan_luas = document.getElementById("perhitungan_luas");
    let nilai_luas = document.getElementById("nilai_luas");
    let keterangan_luas = document.getElementById("keterangan_luas");

    let rumus_keliling = document.getElementById("rumus_keliling");
    let perhitungan_keliling = document.getElementById("perhitungan_keliling");
    let nilai_keliling = document.getElementById("nilai_keliling");
    let keterangan_keliling = document.getElementById("keterangan_keliling");

    if (sisi === "" || sisi <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    sisi = parseFloat(sisi);
    let luas = sisi * sisi;
    let keliling = 4 * sisi;

    // Menampilkan hasil sesuai satuan yang dipilih
    rumus_luas.innerText = "L = S × S";
    perhitungan_luas.innerText = `L = ${sisi} × ${sisi}`;
    nilai_luas.innerHTML = `L = ${luas} ${satuan}&sup2;`;
    keterangan_luas.innerText = `Jadi, luas persegi dengan panjang sisi ${sisi} ${satuan} adalah ${luas} ${satuan}².`;

    rumus_keliling.innerText = "K = 4 × S";
    perhitungan_keliling.innerText = `K = 4 × ${sisi}`;
    nilai_keliling.innerHTML = `K = ${keliling} ${satuan}`;
    keterangan_keliling.innerText = `Jadi, keliling persegi dengan panjang sisi ${sisi} ${satuan} adalah ${keliling} ${satuan}.`;

    hasil.classList.remove("hidden"); // Tampilkan hasil
}

// Fungsi reset persegi
function resetPersegi() {
    document.getElementById("sisi").value = "";
    document.getElementById("satuan").value = "cm"; // Reset ke satuan cm secara default
    document.getElementById("hasilPersegi").classList.add("hidden"); // Sembunyikan hasil

    // Reset teks hasil agar tidak tersisa dari perhitungan sebelumnya
    document.getElementById("rumus_luas").innerText = "";
    document.getElementById("perhitungan_luas").innerText = "";
    document.getElementById("nilai_luas").innerText = "";
    document.getElementById("keterangan_luas").innerText = "";

    document.getElementById("rumus_keliling").innerText = "";
    document.getElementById("perhitungan_keliling").innerText = "";
    document.getElementById("nilai_keliling").innerText = "";
    document.getElementById("keterangan_keliling").innerText = "";
}

// Fungsi menghitung luas dan keliling persegi panjang
function hitungPersegiPanjang() {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    let satuan = document.getElementById("satuanPP").value;
    let hasil = document.getElementById("hasilPersegiPanjang");

    let rumus_luas = document.getElementById("rumus_luasPP");
    let perhitungan_luas = document.getElementById("perhitungan_luasPP");
    let nilai_luas = document.getElementById("nilai_luasPP");
    let keterangan_luas = document.getElementById("keterangan_luasPP");

    let rumus_keliling = document.getElementById("rumus_kelilingPP");
    let perhitungan_keliling = document.getElementById("perhitungan_kelilingPP");
    let nilai_keliling = document.getElementById("nilai_kelilingPP");
    let keterangan_keliling = document.getElementById("keterangan_kelilingPP");

    if (panjang === "" || lebar === "" || panjang <= 0 || lebar <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    panjang = parseFloat(panjang);
    lebar = parseFloat(lebar);
    let luas = panjang * lebar;
    let keliling = 2 * (panjang + lebar);

    // Menampilkan hasil sesuai satuan yang dipilih
    rumus_luas.innerText = "L = P × L";
    perhitungan_luas.innerText = `L = ${panjang} × ${lebar}`;
    nilai_luas.innerHTML = `L = ${luas} ${satuan}&sup2;`;
    keterangan_luas.innerText = `Jadi, luas persegi panjang dengan panjang ${panjang} ${satuan} dan lebar ${lebar} ${satuan} adalah ${luas} ${satuan}².`;

    rumus_keliling.innerText = "K = 2 × (P + L)";
    perhitungan_keliling.innerText = `K = 2 × (${panjang} + ${lebar})`;
    nilai_keliling.innerHTML = `K = ${keliling} ${satuan}`;
    keterangan_keliling.innerText = `Jadi, keliling persegi panjang dengan panjang ${panjang} ${satuan} dan lebar ${lebar} ${satuan} adalah ${keliling} ${satuan}.`;

    hasil.classList.remove("hidden"); // Tampilkan hasil
}

// Fungsi reset persegi panjang
function resetPersegiPanjang() {
    document.getElementById("panjang").value = "";
    document.getElementById("lebar").value = "";
    document.getElementById("satuanPP").value = "cm"; // Reset ke satuan cm secara default
    document.getElementById("hasilPersegiPanjang").classList.add("hidden"); // Sembunyikan hasil

    // Reset teks hasil agar tidak tersisa dari perhitungan sebelumnya
    document.getElementById("rumus_luasPP").innerText = "";
    document.getElementById("perhitungan_luasPP").innerText = "";
    document.getElementById("nilai_luasPP").innerText = "";
    document.getElementById("keterangan_luasPP").innerText = "";

    document.getElementById("rumus_kelilingPP").innerText = "";
    document.getElementById("perhitungan_kelilingPP").innerText = "";
    document.getElementById("nilai_kelilingPP").innerText = "";
    document.getElementById("keterangan_kelilingPP").innerText = "";
}
