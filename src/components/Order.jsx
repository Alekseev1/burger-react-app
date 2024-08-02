import Shipment from "./Shipment";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Order = ({ burgers, order, deleteFromOrder }) => {
  const orderIds = Object.keys(order);
  const total = orderIds.reduce((prevTotal, key) => {
    const burger = burgers[key];
    const count = order[key];
    const isAvailable = burger && burger.status === "available";
    if (isAvailable) {
      return prevTotal + burger.price * count;
    }
    return prevTotal;
  }, 0);

  const renderOrder = (key) => {
    const burger = burgers[key];
    const count = order[key];
    const isAvailable = burger && burger.status === "available";
    if (!isAvailable) {
      return (
        <CSSTransition
          classNames="order"
          key={key}
          timeout={{ enter: 500, exit: 500 }}
        >
          <li className="unavailable" key={key}>
            Извините, {burger ? burger.name : "бургер"} временно недоступен
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 500, exit: 500 }}
      >
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            шт. {burger.name}
            <span> {count * burger.price} ₽</span>
            <button onClick={() => deleteFromOrder(key)} className="cancelItem">
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  return (
    <div className="order-wrap">
      <h2>Ваш заказ</h2>
      <TransitionGroup component="ul" className="order">
        {orderIds.map(renderOrder)}
      </TransitionGroup>
      {total > 0 ? (
        <Shipment total={total} />
      ) : (
        <div className="nothingSelected">Выберите блюдо и добавьте в заказ</div>
      )}
    </div>
  );
};

export default Order;
