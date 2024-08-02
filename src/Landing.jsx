import { useState } from "react";
import "./css/App.scss";
import restaurants from "./sample-restaurants";

function Landing(props) {
  const [landState, setLandState] = useState({
    display: false,
    title: "",
    url: "",
  });

  const { display } = landState;

  const displayList = () => {
    setLandState({ display: !display });
  };

  const getTitle = (restaurant) => {
    const { title, url } = restaurant;
    setLandState({ title, url, display: false });
  };

  const goToRestaurant = () => {
    const { url } = landState;
    props.history.push(`/restaurant/${url}`);
  };

  return (
    <div className="restaurant_select">
      <div className="restaurant_select_select_top">
        <div
          onClick={displayList}
          className="restaurant_select_select_top-header font-effect-outline"
        >
          {landState.title ? landState.title : "Выбери ресторан"}
        </div>
        <div className="arrow_picker">
          <div className="arrow_picker-up"></div>
          <div className="arrow_picker-down"></div>
        </div>
      </div>
      {landState.display === true && (
        <div className="restaurant_select_bottom">
          <ul>
            {restaurants.map((restaurant) => (
              <li onClick={() => getTitle(restaurant)} key={restaurant.id}>
                {restaurant.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      {landState.title && !landState.display ? (
        <button onClick={goToRestaurant}>Перейти в ресторан</button>
      ) : null}
    </div>
  );
}
export default Landing;
