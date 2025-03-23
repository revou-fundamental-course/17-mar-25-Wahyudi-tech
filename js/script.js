document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi elemen input dan dropdown satuan
    const inputSisi = document.getElementById("sisi");
    const selectSatuan = document.getElementById("satuan");
    const inputPanjang = document.getElementById("panjang");
    const inputLebar = document.getElementById("lebar");
    const selectSatuanPP = document.getElementById("satuanPP");

    // 🔹 Fungsi untuk mengupdate placeholder berdasarkan satuan yang dipilih
    function updatePlaceholder(input, unit, label) {
        input.placeholder = `${label} (${unit.value})`;
    }

    // 🔹 Event listener untuk mengganti placeholder sesuai satuan yang dipilih
    selectSatuan.addEventListener("change", () => updatePlaceholder(inputSisi, selectSatuan, "Masukkan Nilai Sisi"));
    selectSatuanPP.addEventListener("change", () => {
        updatePlaceholder(inputPanjang, selectSatuanPP, "Panjang");
        updatePlaceholder(inputLebar, selectSatuanPP, "Lebar");
    });

    // 🔹 Inisialisasi animasi scroll
    initScrollAnimation();
});

// 🔹 Fungsi untuk menghitung luas dan keliling persegi
function hitungPersegi() {
    const sisi = parseFloat(document.getElementById("sisi").value);
    const satuan = document.getElementById("satuan").value;
    const hasil = document.getElementById("hasilPersegi");

    if (!sisi || sisi <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    const luas = sisi * sisi;
    const keliling = 4 * sisi;

    // Menampilkan hasil perhitungan
    tampilkanHasil("rumus_luas", "perhitungan_luas", "nilai_luas", "keterangan_luas",
        "L = S × S", `L = ${sisi} × ${sisi}`, `L = ${luas} ${satuan}&sup2;`, 
        `Jadi, luas persegi dengan panjang sisi ${sisi} ${satuan} adalah ${luas} ${satuan}².`);

    tampilkanHasil("rumus_keliling", "perhitungan_keliling", "nilai_keliling", "keterangan_keliling",
        "K = 4 × S", `K = 4 × ${sisi}`, `K = ${keliling} ${satuan}`, 
        `Jadi, keliling persegi dengan panjang sisi ${sisi} ${satuan} adalah ${keliling} ${satuan}.`);

    hasil.classList.remove("hidden");
}

// 🔹 Fungsi reset persegi
function resetPersegi() {
    const inputSisi = document.getElementById("sisi");
    const satuanSelect = document.getElementById("satuan");

    resetInput(["sisi"], "satuan", "cm");
    resetHasil(["rumus_luas", "perhitungan_luas", "nilai_luas", "keterangan_luas",
        "rumus_keliling", "perhitungan_keliling", "nilai_keliling", "keterangan_keliling"]);

    // 🔹 Update placeholder agar sesuai dengan satuan default (cm)
    updatePlaceholder(inputSisi, satuanSelect, "Masukkan Nilai Sisi");

    document.getElementById("hasilPersegi").classList.add("hidden");
}

// 🔹 Fungsi untuk menghitung luas dan keliling persegi panjang
function hitungPersegiPanjang() {
    const panjang = parseFloat(document.getElementById("panjang").value);
    const lebar = parseFloat(document.getElementById("lebar").value);
    const satuan = document.getElementById("satuanPP").value;
    const hasil = document.getElementById("hasilPersegiPanjang");

    if (!panjang || !lebar || panjang <= 0 || lebar <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    const luas = panjang * lebar;
    const keliling = 2 * (panjang + lebar);

    // Menampilkan hasil perhitungan
    tampilkanHasil("rumus_luasPP", "perhitungan_luasPP", "nilai_luasPP", "keterangan_luasPP",
        "L = P × L", `L = ${panjang} × ${lebar}`, `L = ${luas} ${satuan}&sup2;`, 
        `Jadi, luas persegi panjang dengan panjang ${panjang} ${satuan} dan lebar ${lebar} ${satuan} adalah ${luas} ${satuan}².`);

    tampilkanHasil("rumus_kelilingPP", "perhitungan_kelilingPP", "nilai_kelilingPP", "keterangan_kelilingPP",
        "K = 2 × (P + L)", `K = 2 × (${panjang} + ${lebar})`, `K = ${keliling} ${satuan}`, 
        `Jadi, keliling persegi panjang dengan panjang ${panjang} ${satuan} dan lebar ${lebar} ${satuan} adalah ${keliling} ${satuan}.`);

    hasil.classList.remove("hidden");
}

// 🔹 Fungsi reset persegi panjang
function resetPersegiPanjang() {
    const inputPanjang = document.getElementById("panjang");
    const inputLebar = document.getElementById("lebar");
    const satuanSelectPP = document.getElementById("satuanPP");

    resetInput(["panjang", "lebar"], "satuanPP", "cm");
    resetHasil(["rumus_luasPP", "perhitungan_luasPP", "nilai_luasPP", "keterangan_luasPP",
        "rumus_kelilingPP", "perhitungan_kelilingPP", "nilai_kelilingPP", "keterangan_kelilingPP"]);

    // 🔹 Update placeholder agar sesuai dengan satuan default (cm)
    updatePlaceholder(inputPanjang, satuanSelectPP, "Panjang");
    updatePlaceholder(inputLebar, satuanSelectPP, "Lebar");

    document.getElementById("hasilPersegiPanjang").classList.add("hidden");
}

// 🔹 Fungsi untuk menampilkan hasil perhitungan
function tampilkanHasil(idRumus, idPerhitungan, idNilai, idKeterangan, rumus, perhitungan, nilai, keterangan) {
    document.getElementById(idRumus).innerText = rumus;
    document.getElementById(idPerhitungan).innerText = perhitungan;
    document.getElementById(idNilai).innerHTML = nilai;
    document.getElementById(idKeterangan).innerText = keterangan;
}

// 🔹 Fungsi untuk mereset input
function resetInput(inputIds, selectId, defaultUnit) {
    inputIds.forEach(id => document.getElementById(id).value = "");
    document.getElementById(selectId).value = defaultUnit;
}

// 🔹 Fungsi untuk mereset hasil perhitungan
function resetHasil(ids) {
    ids.forEach(id => document.getElementById(id).innerText = "");
}

// 🔹 Fungsi animasi smooth saat scroll
document.addEventListener("DOMContentLoaded", function () {
    // Seleksi semua elemen yang BUKAN bagian dari 'no-animate'
    const elements = document.querySelectorAll("body *:not(.no-animate):not(.no-animate *)");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); 
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(element => {
        element.classList.add("fade-in"); 
        observer.observe(element);
    });
});
