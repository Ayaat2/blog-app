import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-8 gap-4 sm:gap-0">
      <Logo />
      <Navigation />
      <SearchInput />
    </header>
  );
};
export default Header;
