document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Inisialisasi elemen input dan dropdown satuan
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

    // 🔹 Inisialisasi animasi scroll saat halaman dimuat
    initScrollAnimation();
});

// 🔹 Fungsi untuk menghitung luas dan keliling persegi
function hitungPersegi() {
    const sisi = parseFloat(document.getElementById("sisi").value);
    const satuan = document.getElementById("satuan").value;
    const hasil = document.getElementById("hasilPersegi");

    // 🔸 Validasi input, harus angka positif
    if (!sisi || sisi <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    // 🔸 Menghitung luas dan keliling
    const luas = sisi * sisi;
    const keliling = 4 * sisi;

    // 🔸 Menampilkan hasil perhitungan
    tampilkanHasil("rumus_luas", "perhitungan_luas", "nilai_luas", "keterangan_luas",
        "L = S × S", `L = ${sisi} × ${sisi}`, `L = ${luas} ${satuan}&sup2;`,
        `Jadi, luas persegi dengan panjang sisi ${sisi} ${satuan} adalah ${luas} ${satuan}².`);

    tampilkanHasil("rumus_keliling", "perhitungan_keliling", "nilai_keliling", "keterangan_keliling",
        "K = 4 × S", `K = 4 × ${sisi}`, `K = ${keliling} ${satuan}`,
        `Jadi, keliling persegi dengan panjang sisi ${sisi} ${satuan} adalah ${keliling} ${satuan}.`);

    hasil.classList.remove("hidden");
}

// 🔹 Fungsi reset persegi ke kondisi awal
function resetPersegi() {
    resetInput(["sisi"], "satuan", "cm");
    resetHasil(["rumus_luas", "perhitungan_luas", "nilai_luas", "keterangan_luas",
        "rumus_keliling", "perhitungan_keliling", "nilai_keliling", "keterangan_keliling"]);

    // 🔸 Reset placeholder agar sesuai dengan satuan default (cm)
    document.getElementById("sisi").placeholder = "Masukkan Nilai Sisi (cm)";
    document.getElementById("hasilPersegi").classList.add("hidden");
}

// 🔹 Fungsi untuk menghitung luas dan keliling persegi panjang
function hitungPersegiPanjang() {
    const panjang = parseFloat(document.getElementById("panjang").value);
    const lebar = parseFloat(document.getElementById("lebar").value);
    const satuan = document.getElementById("satuanPP").value;
    const hasil = document.getElementById("hasilPersegiPanjang");

    // 🔸 Validasi input, harus angka positif
    if (!panjang || !lebar || panjang <= 0 || lebar <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    // 🔸 Menghitung luas dan keliling
    const luas = panjang * lebar;
    const keliling = 2 * (panjang + lebar);

    // 🔸 Menampilkan hasil perhitungan
    tampilkanHasil("rumus_luasPP", "perhitungan_luasPP", "nilai_luasPP", "keterangan_luasPP",
        "L = P × L", `L = ${panjang} × ${lebar}`, `L = ${luas} ${satuan}&sup2;`,
        `Jadi, luas persegi panjang dengan panjang ${panjang} ${satuan} dan lebar ${lebar} ${satuan} adalah ${luas} ${satuan}².`);

    tampilkanHasil("rumus_kelilingPP", "perhitungan_kelilingPP", "nilai_kelilingPP", "keterangan_kelilingPP",
        "K = 2 × (P + L)", `K = 2 × (${panjang} + ${lebar})`, `K = ${keliling} ${satuan}`,
        `Jadi, keliling persegi panjang dengan panjang ${panjang} ${satuan} dan lebar ${lebar} ${satuan} adalah ${keliling} ${satuan}.`);

    hasil.classList.remove("hidden");
}

// 🔹 Fungsi reset persegi panjang ke kondisi awal
function resetPersegiPanjang() {
    resetInput(["panjang", "lebar"], "satuanPP", "cm");
    resetHasil(["rumus_luasPP", "perhitungan_luasPP", "nilai_luasPP", "keterangan_luasPP",
        "rumus_kelilingPP", "perhitungan_kelilingPP", "nilai_kelilingPP", "keterangan_kelilingPP"]);

    // 🔸 Reset placeholder agar sesuai dengan satuan default (cm)
    document.getElementById("panjang").placeholder = "Panjang (cm)";
    document.getElementById("lebar").placeholder = "Lebar (cm)";
    document.getElementById("hasilPersegiPanjang").classList.add("hidden");
}

// 🔹 Fungsi untuk menampilkan hasil perhitungan di UI
function tampilkanHasil(idRumus, idPerhitungan, idNilai, idKeterangan, rumus, perhitungan, nilai, keterangan) {
    document.getElementById(idRumus).innerText = rumus;
    document.getElementById(idPerhitungan).innerText = perhitungan;
    document.getElementById(idNilai).innerHTML = nilai;
    document.getElementById(idKeterangan).innerText = keterangan;
}

// 🔹 Fungsi untuk mereset input ke nilai awal
function resetInput() {
    // 🔸 Reset input persegi
    document.getElementById("sisi").value = "";
    document.getElementById("satuan").value = "cm";

    // 🔸 Reset input persegi panjang
    document.getElementById("panjang").value = "";
    document.getElementById("lebar").value = "";
    document.getElementById("satuanPP").value = "cm";

    // 🔸 Reset hasil perhitungan
    resetHasil(["rumus_luas", "perhitungan_luas", "nilai_luas", "keterangan_luas",
        "rumus_keliling", "perhitungan_keliling", "nilai_keliling", "keterangan_keliling"]);

    resetHasil(["rumus_luasPP", "perhitungan_luasPP", "nilai_luasPP", "keterangan_luasPP",
        "rumus_kelilingPP", "perhitungan_kelilingPP", "nilai_kelilingPP", "keterangan_kelilingPP"]);

    // 🔸 Sembunyikan hasil agar tampilan bersih
    document.getElementById("hasilPersegi").classList.add("hidden");
    document.getElementById("hasilPersegiPanjang").classList.add("hidden");
}

// 🔹 Fungsi untuk mereset hasil perhitungan
function resetHasil(ids) {
    ids.forEach(id => document.getElementById(id).innerText = "");
}

// 🔹 Fungsi animasi smooth saat scroll dengan efek sesuai arah guliran
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("body *:not(.no-animate):not(.no-animate *)");

    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            let scrollingDown = scrollTop > lastScrollTop;

            if (entry.isIntersecting) {
                if (scrollingDown) {
                    entry.target.classList.add("show-up");
                    entry.target.classList.remove("show-down");
                } else {
                    entry.target.classList.add("show-down");
                    entry.target.classList.remove("show-up");
                }
            } else {
                entry.target.classList.remove("show-up", "show-down");
            }
        });

        lastScrollTop = window.scrollY || document.documentElement.scrollTop;
    }, { threshold: 0.15 });

    elements.forEach(element => {
        element.classList.add("fade-in");
        observer.observe(element);
    });
});
