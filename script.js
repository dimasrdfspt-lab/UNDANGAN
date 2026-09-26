const tanggalPernikahan = new Date("December 12, 2027 08:00:00").getTime();

const countdown = setInterval(function () {

    const sekarang = new Date().getTime();

    const jarak = tanggalPernikahan - sekarang;

    const hari = Math.floor(jarak / (1000 * 60 * 60 * 24));
    const jam = Math.floor(
        (jarak % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const menit = Math.floor(
        (jarak % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const detik = Math.floor(
        (jarak % (1000 * 60)) /
        1000
    );

    document.getElementById("hari").innerHTML = hari;
    document.getElementById("jam").innerHTML = jam;
    document.getElementById("menit").innerHTML = menit;
    document.getElementById("detik").innerHTML = detik;

}, 1000);
function bukaUndangan() {

    const musik = document.getElementById("musik");

    musik.play();

}
const tombolMusik = document.getElementById("tombolMusik");

tombolMusik.addEventListener("click", function () {

    const musik = document.getElementById("musik");

    if (musik.paused) {

        musik.play();
        tombolMusik.innerHTML = "⏸️";

    } else {

        musik.pause();
        tombolMusik.innerHTML = "🎵";

    }

});
const formRsvp = document.getElementById("formRsvp");
const pesanRsvp = document.getElementById("pesanRsvp");

formRsvp.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const kehadiran = document.getElementById("kehadiran").value;
    const jumlah = document.getElementById("jumlah").value;
    const ucapan = document.getElementById("ucapan").value;

    fetch("https://script.google.com/macros/s/AKfycbzhGIcplb8dYtVhqP2edC7IkFu97X69IBR-dULAf6CVlyOkojdoSbcgifAOMN2l0rFmuA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            nama: nama,
            kehadiran: kehadiran,
            jumlah: jumlah,
            ucapan: ucapan
        })
    })
    .then(function() {

        pesanRsvp.innerHTML = "❤️ Terima kasih, " + nama + "! Konfirmasi kehadiran Anda sudah diterima.";

        formRsvp.reset();

    })
    .catch(function(error) {

        pesanRsvp.innerHTML = "Maaf, terjadi kesalahan. Silakan coba lagi.";

        console.error(error);

    });

});