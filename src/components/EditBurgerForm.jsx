const EditBurgerForm = ({ burger, updateBurger, index, deleteBurger }) => {
  const handleChange = (e) => {
    const updatedBurger = {
      ...burger,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    updateBurger(index, updatedBurger);
  };

  return (
    <div className="burger-edit">
      <input
        onChange={handleChange}
        name="name"
        type="text"
        value={burger.name}
      />
      <input
        onChange={handleChange}
        name="price"
        type="text"
        value={burger.price}
      />
      <select
        onChange={handleChange}
        name="status"
        className="status"
        value={burger.status}
      >
        <option value="available">Доступно</option>
        <option value="unavailable">Убрать из меню</option>
      </select>
      <textarea onChange={handleChange} name="desc" value={burger.desc} />
      <input
        onChange={handleChange}
        name="image"
        type="text"
        value={burger.image}
      />
      <button onClick={() => deleteBurger(index)}>Удалить из меню</button>
    </div>
  );
};

export default EditBurgerForm;
