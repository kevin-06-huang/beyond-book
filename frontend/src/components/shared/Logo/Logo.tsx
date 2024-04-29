import logo from "../../../assets/logo.png";

type LogoProps = {
  className?: string;
  altText?: string;
};

export const Logo = ({ className, altText = "Logo" }: LogoProps) => {
  return <img src={logo} className={className} alt={altText} />;
};
