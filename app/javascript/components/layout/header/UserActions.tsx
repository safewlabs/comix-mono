import { FC } from 'react';
import CartIcon from '../../../../assets/icons/cart-icon.svg';
import '~/styles/headerStyles/header.scss';

const UserActions: FC = () => {
  return (
    <div className="userActions">
      <div className="cartIconAndQuantity">
        <button aria-label="View Cart" className="cartButton">
          <img src={CartIcon} alt="Cart Icon" className="cartIcon" />
        </button>
        <div className="quantity" aria-live="polite">
          0
        </div>
      </div>
      <button className="loginButton" aria-label="Login to your account">
        Login
      </button>
      <button className="button" aria-label="Sign up for a new account">
        Sign up
      </button>
    </div>
  );
};

export default UserActions;
