import { useEffect, useMemo, useState } from 'react';
import { useDishQuery } from '../@generated/generated.graphql';

export const useDishModal = (dishId: string) => {
  const [basePrice, setBasePrice] = useState('');
  const [price, setPrice] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [toppingsTotalPrice, setToppingsTotalPrice] = useState(0);
  const [includedToppings, setIncludedToppings] = useState<
    Array<string>
  >([]);

  const { data } = useDishQuery({
    variables: {
      where: {
        id: dishId,
      },
    },
  });

  // TODO:Normalize data. Search O(n)
  function calculatePriceOption(selectedId: string) {
    if (!data?.dish.options) return;
    const option = data?.dish.options?.find(
      (opt) => opt.id === selectedId,
    );
    if (!option) return;
    const optionPrice = option.price;
    const calculatedPrice =
      parseFloat(data?.dish.price) + parseFloat(optionPrice);
    setBasePrice(calculatedPrice.toString());
  }

  // function calculatePriceTopping(
  //   selectedId: string,
  //   decrease = false,
  // ) {
  //   if (!data?.dish.options) return;
  //   const option = data?.dish.options?.find(
  //     (opt) => opt.id === selectedId,
  //   );
  //   if (!option) return;
  //   const topping = option.toppings?.find(
  //     (topping) => topping.id === selectedId,
  //   );
  //   if (!topping) return;
  //   const toppingPrice = topping.price;
  //   const calculatedPrice = !decrease
  //     ? parseFloat(price) + parseFloat(toppingPrice)
  //     : parseFloat(price) - parseFloat(toppingPrice);
  //   setPrice(calculatedPrice.toString());
  // }

  useEffect(() => {
    setBasePrice(data?.dish.price);
  }, [data]);

  useMemo(() => {
    const calc = parseFloat(basePrice) + toppingsTotalPrice;
    setPrice(calc.toString());
  }, [includedToppings, basePrice]);

  const toppingHandler = (id: string, price: number) => {
    const index = includedToppings.indexOf(id);
    if (index !== -1) {
      setIncludedToppings((prevState) =>
        prevState.filter((_, i) => i !== index),
      );
      setToppingsTotalPrice((prevState) => prevState - price);
    } else {
      setIncludedToppings((prevState) => [...prevState, id]);
      setToppingsTotalPrice((prevState) => prevState + price);
    }
  };

  const selectedOptionHandler = (id: string) => {
    setSelectedOption(id);
    setIncludedToppings([]);
    setToppingsTotalPrice(0);
    calculatePriceOption(id);
  };

  return {
    selectedOptionHandler,
    toppingHandler,
    price,
    selectedOption,
    includedToppings,
    data,
  };
};
