
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
const year = Math.floor(selisih / (1000 * 60 * 60 * 24 * 365));
const month = Math.floor(
  (selisih % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
);
const day = Math.floor(
  (selisih % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
);
const umurPertamaNgoding =
  year + " tahun " + month + " bulan " + day + " hari";
document.getElementById("date").innerHTML = date;
document.getElementById("umurPertamaNgoding").innerHTML =
  umurPertamaNgoding;
