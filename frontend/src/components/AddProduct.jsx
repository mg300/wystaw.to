// Form.js
import React, { useState } from "react";
import styles from "./AddProduct.module.css";
import ButtonComponent from "./AuthComponents/ButtonComponent";
function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Wysyłam ogłoszenie:", { title, description, price, image });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className={styles.App}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Formularz dodawania ogłoszenia</h1>
        <label>
          Tytuł:<br></br>
        </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>
          Opis:<br></br>
        </label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <label>
          Cena:<br></br>
        </label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        <br />
        <label>
          Zdjęcie:<br></br>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <ButtonComponent onClick={handleSubmit}>Dodaj ogłoszenie</ButtonComponent>
      </form>
    </div>
  );
}

export default AddProduct;
