import PropTypes from "prop-types";

const Header = ({ title, amount, hot }) => {
  return (
    <header className="top">
      <div className="wrap">
        <div className="header-content">
          <div className="header-rating">
            <div className="header-rating_tag">Рейтинг</div>
            <div className="header-rating_icon">★★★★★</div>
          </div>

          <div className="header-divider"></div>
          <h1 className="font-effect-fire-animation">{title}</h1>
          <h3>
            <span>
              Быстрая доставка свежих
              <span className="subheader"> #бургеров</span>
            </span>
          </h3>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
