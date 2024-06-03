
let active = false;
const ham = document.getElementById("hamburger");
const wdw = document.getElementById("wdw");
const nvlnk = document.getElementById("listnavlink");
ham.checked = false;
function handleHam(e) {
  e.preventDefault();
  active = !active;
  ham.checked = active;
  nvlnk.classList.toggle("hidden");
}
ham.addEventListener("change", handleHam);
wdw.addEventListener("touchstart", handleHam);
wdw.addEventListener("mousedown", handleHam);

const date = "1 Juni 2022";

const selisih = Date.now() - Date.parse(date);
const year = Math.floor(selisih / (1000 * 60 * 60 * 24 * 365.25));
const month = Math.floor(
  (selisih % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.417)
);
const day = Math.floor(
  (selisih % (1000 * 60 * 60 * 24 * 30.417)) / (1000 * 60 * 60 * 24)
);
const umurPertamaNgoding =
  `${year>0 && (year + " tahun ")}${month >0&& (month + " bulan ")}${day >0&& (day + " hari")}`;
document.getElementById("date").innerHTML = date;
document.getElementById("umurPertamaNgoding").innerHTML =
  umurPertamaNgoding;
