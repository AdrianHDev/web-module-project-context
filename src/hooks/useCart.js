import useLocalStorage from "./useLocalStorage";

const useCart = (initialValue) => {
  const [cart, setCart] = useLocalStorage("cart", initialValue);
  return [cart, setCart];
};

export default useCart;
