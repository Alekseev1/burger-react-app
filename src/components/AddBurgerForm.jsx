import { useRef } from "react";

const AddBurgerForm = ({ addBurger }) => {
  const nameRef = useRef();
  const priceRef = useRef();
  const statusRef = useRef();
  const descRef = useRef();
  const imageRef = useRef();

  const createBurger = (e) => {
    e.preventDefault();
    const burger = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value || 0),
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };
    addBurger(burger);
    e.target.reset();
  };

  return (
    <form className="burger-edit" onSubmit={createBurger}>
      <input name="name" type="text" placeholder="Name" ref={nameRef} />
      <input name="price" type="text" placeholder="Price" ref={priceRef} />
      <select name="status" className="status" ref={statusRef}>
        <option value="available">Доступно</option>
        <option value="unavailable">Убрать из меню</option>
      </select>
      <textarea name="desc" placeholder="Desc" ref={descRef} />
      <input name="image" type="text" placeholder="Image" ref={imageRef} />
      <button type="submit">Добавить в меню</button>
    </form>
  );
};

export default AddBurgerForm;
