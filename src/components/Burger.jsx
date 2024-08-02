const Burger = ({ details, addToOrder, index }) => {
  let isAvailable = true;

  if (details.status !== "available") {
    isAvailable = false;
  }

  return (
    <li className="menu-burger">
      <div className="image-container">
        <img src={details.image} alt="" />
      </div>
      <div className="burger-details">
        <h3 className="burger-name">
          {details.name}
          <span className="price">{details.price} ₽</span>
        </h3>
        <p>{details.desc}</p>
        <button
          className="buttonOrder"
          disabled={!isAvailable}
          onClick={() => addToOrder(index)}
        >
          {isAvailable ? "Заказать" : `Временно нет`}
        </button>
      </div>
    </li>
  );
};

export default Burger;
