import logo from "./logo.svg";
import "./App.css";
import ReviewItem from "./Reviews.js";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="Parent-box">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" category="DRINKS" name="Saylent Float" />
      <ReviewItem />
    </div>
  );
}

function FotoProduk() {
  return (
    <div>
      <div className="Foto">
        <img src="foto-produk.jpg" />
      </div>
    </div>
  );
}

function CheckDiskon(props) {
  const { isDiscount, discount } = props;
  if (isDiscount == "yes") {
    return <p>Diskon {discount}% off</p>;
  } else if (isDiscount == "coming") {
    return <p>Akan ada diskon</p>;
  } else {
    return <p>Tidak ada diskon</p>;
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const kandungan = ["Kalsium", "Karbohidrat", "Gula", "Garam"];
  const listKandungan = kandungan.map((itemKandungan) => <li key={itemKandungan}>{itemKandungan}</li>);
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category} </p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 20.000</p>
        <CheckDiskon isDiscount={isDiscount} discount={50} />
        <p className="Info">
          A simple product photo studio Simple Studio Product Shots whose studio settings tend to be static. This type is widely applied when you want to take photos of perfume, tupperware or other small objects. Thus, the focus is not on
          the packaging or size, but the nuance and meaning of the product itself
        </p>
        <ul>{listKandungan}</ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">
          Add To Cart
        </a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  console.log("Tambah Produk " + e);
}

CheckDiskon.propTypes = {
  discount: PropTypes.number,
};

export default App;
