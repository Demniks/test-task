import { NavigationLink, NavigWrapper, NavMenu } from "./Navigation.styled";

import items from "./items";

const Navigation = () => {
  const elements = items.map(({ id, to, text }) => {
    return (
      <li key={id}>
        <NavigationLink to={to}>{text}</NavigationLink>
      </li>
    );
  });

  return (
    <header>
      <NavigWrapper>
        <NavMenu>{elements}</NavMenu>
      </NavigWrapper>
    </header>
  );
};

export default Navigation;
