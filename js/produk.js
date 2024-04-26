var data_mentah = {
  arabica: [
    {
      foto: "images/produk/product_espresso.jpg",
      nama: "Espresso",
      size: "150 Ml",
      harga: "20.000",
      beli: "#",
    },
    {
      foto: "images/produk/product_kopi_susu.jpg",
      nama: "Kopi Susu",
      size: "250 Ml",
      harga: "25.000",
      beli: "#",
    },
  ],

  robusta: [
    {
      foto: "images/produk/product_capuchino.jpg",
      nama: "Capuchino",
      size: "250 Ml",
      harga: "25.000",
      beli: "#",
    },
    {
      foto: "images/produk/product_latte.jpg",
      nama: "Latte",
      size: "150 Ml",
      harga: "20.000",
      beli: "#",
    },
  ],
  nonkopi: [
    {
      foto: "https://fajar.co.id/wp-content/uploads/2023/09/IMG_0741.jpg",
      nama: "Es Teh Manis",
      size: "350 Ml",
      harga: "10.000",
      link: "#",
    },
  ],
};
console.log(data_mentah);

function updateSelect() {
  select_kopi.innerHTML = `<option selected disabled>-</option>`;
  data_kopi = [];
  Object.keys(data_mentah).forEach((opsi) => {
    data_kopi.push(...data_mentah[opsi]);
    select_kopi.innerHTML += `<option value="${opsi}">${opsi}</option>`;
  });
  console.log(data_kopi);
  updateTampilan();
  console.log("update select:", Object.keys(data_mentah));
}
//updateSelect()

var data_kopi = [];
select_kopi.onchange = function () {
  console.log("select_kopi:", select_kopi.value);
  data_kopi = data_mentah[select_kopi.value];
  console.log("data_kopi:", data_kopi);
  updateTampilan();
};

function updateTampilan() {
  baris_produk.innerHTML = "";
  data_kopi.forEach((kopi) => {
    baris_produk.innerHTML += `<!--mulai col-->
        <div class="col mb-4">
            <div class="card">
                <img src="${kopi.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${kopi.nama}</h5>
                    <div class="row hargasize my-4">
                        <div class="col">
                            <i class="bi bi-cup-straw"></i> ${kopi.size}
                        </div>
                        <div class="col fw-bold text-danger">
                            ${kopi.harga}
                        </div>
                    </div>
                    <a href="${kopi.link}" class="btn btn-warning w-100"><i class="bi bi-cart4"></i> Beli</a>
                </div>
            </div>
        </div>
        <!--akhir col-->`;
  });
}

var sumber = "https://rikikurnia.com/prakerja/api/kopi";
var sumber2 = "data.json";

$.getJSON(sumber2).then((data) => {
  console.log("data dari luar: ", data);
  data_mentah = data;
  updateSelect();
  //baris_produk.innerHTML = "";
});
