import { NavLink } from "react-router";

type LinkProps = React.LinkHTMLAttributes<HTMLLinkElement> & {
  to: string;
};

export const Link = (props: LinkProps) => {
  return (
    <NavLink to={props.to} className={props.className}>
      {props.children}
    </NavLink>
  );
};
