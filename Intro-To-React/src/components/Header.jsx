import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="bg-red-700 px-2 flex justify-between items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> 
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
      </div>
    </>
  );
}
export default Header;
