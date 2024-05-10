import { Options } from "../values";
import { CategoryCarousel } from "../../../widgets/CategoryCarousel";
import { Child } from "../../../widgets/CategoryCarousel";
import { useState, useEffect } from "react";

export function SingleItemOptions(){

    const items: Options = {
        options: [
            {
                id: 1,
                name: 'Milk',
                image: 'data:image/jpeg;base64,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',
                children: [
                    {
                        id: 1,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    },
                    {
                        id: 2,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    },
                    {
                        id: 3,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    },
                    {
                        id: 4,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    },
                    {
                        id: 5,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    },
                    {
                        id: 6,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    },
                    {
                        id: 7,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    }
                ]
            },
            {
                id: 1,
                name: 'Syrup',
                image: 'data:image/jpeg;base64,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',
                children: [
                    {
                        id: 1,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    },
                    {
                        id: 2,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    },
                    {
                        id: 3,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    },
                    {
                        id: 4,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    },
                    {
                        id: 5,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    },
                    {
                        id: 6,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    },
                    {
                        id: 7,
                        name: 'Coconut milk',
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                        price: 400
                    }
                ]
            }
        ]
    }

    interface SelectedItems {
        [key: string]: Child | null;
      }

    const [selectedItems, setSelectedItems] = useState<SelectedItems>({});

    const handleSelect = (categoryName: string, selectedChild: Child | null) => {
      setSelectedItems((prevSelectedItems) => ({
        ...prevSelectedItems,
        [categoryName]: selectedChild,
      }));
    };

    useEffect(() => {
        console.log(selectedItems);
      }, [selectedItems]);

    return (
      <div>
        {items.options.map((item) => (
           <CategoryCarousel
           category={item}
           selectedValue={selectedItems[item.name]}
           onSelect={(selectedChild) => handleSelect(item.name, selectedChild)}
         />
        ))}
      </div>
    );
  }