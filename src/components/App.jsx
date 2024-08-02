import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import MenuAdmin from "./MenuAdmin";
import Order from "./Order";
import sampleBurgers from "./../sample-burgers";
import Burger from "./Burger";
import firebaseDb from "../base.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { get, ref } from "firebase/database";
import SignIn from "./auth/SignIn.jsx";

const App = () => {
  const stateBurgers = {
    burgers: {},
    order: {},
  };
  const [stateBur, setStateBur] = useState(stateBurgers);

  const addBurger = (burger) => {
    console.log("addBurger", burger);
    const burgers = { ...stateBur.burgers };
    burgers[`burger${Date.now()}`] = burger;
    setStateBur({ burgers, order: stateBur.order });
  };

  const updateBurger = (key, updatedBurger) => {
    const burgers = { ...stateBur.burgers };
    burgers[key] = updatedBurger;
    setStateBur({ burgers, order: stateBur.order });
  };

  const loadSampleBurgers = () => {
    setStateBur({
      burgers: sampleBurgers,
      order: stateBur.order,
    });
  };

  const deleteBurger = (key) => {
    const burgers = { ...stateBur.burgers };
    delete burgers[key];
    setStateBur({ burgers, order: stateBur.order });
  };

  const addToOrder = (key) => {
    let order = { ...stateBur.order };
    order[key] = order[key] + 1 || 1;
    setStateBur({ burgers: stateBur.burgers, order });
  };

  const deleteFromOrder = (key) => {
    let order = { ...stateBur.order };
    delete order[key];
    setStateBur({ burgers: stateBur.burgers, order });
  };

  useEffect(() => {
    const orderItems = JSON.parse(localStorage.getItem("order"));
    const burgersItems = JSON.parse(localStorage.getItem("burgers"));

    if (orderItems) {
      setStateBur({
        burgers: sampleBurgers,
        order: orderItems,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(stateBur.order));
  }, [stateBur.order]);

  return (
    <SignIn>
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very Hot Burger" />
          <ul className="burgers">
            {Object.keys(stateBur.burgers).map((key) => {
              return (
                <Burger
                  addToOrder={addToOrder}
                  key={key}
                  index={key}
                  details={stateBur.burgers[key]}
                />
              );
            })}
          </ul>
        </div>
        <Order
          burgers={stateBur.burgers}
          order={stateBur.order}
          deleteFromOrder={deleteFromOrder}
        />
        <MenuAdmin
          addBurger={addBurger}
          loadSampleBurgers={loadSampleBurgers}
          burgers={stateBur.burgers}
          updateBurger={updateBurger}
          deleteBurger={deleteBurger}
        />
      </div>
    </SignIn>
  );
};

export default App;
