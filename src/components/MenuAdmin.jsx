import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";

const MenuAdmin = ({
  addBurger,
  loadSampleBurgers,
  burgers,
  updateBurger,
  deleteBurger,
}) => {
  return (
    <div className="menu-admin">
      <h2>Управление Меню</h2>
      {Object.keys(burgers).map((key) => {
        return (
          <EditBurgerForm
            key={key}
            index={key}
            burger={burgers[key]}
            updateBurger={updateBurger}
            deleteBurger={deleteBurger}
          />
        );
      })}

      <AddBurgerForm addBurger={addBurger} />
      <button onClick={loadSampleBurgers}>Загрузить бургеры</button>
    </div>
  );
};

export default MenuAdmin;
