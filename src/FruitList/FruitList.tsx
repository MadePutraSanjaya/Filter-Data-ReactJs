import React from "react";
import { IFruit } from "../data/fruits";

type FruitListProps = {
  fruits: IFruit[];
};

const mergeFruitsStock = (fruits: IFruit[]): IFruit[] => {
  const mergedFruits: { [fruitName: string]: IFruit } = {};

  fruits.forEach((fruit) => {
   const lowercaseName = fruit.fruitName.toLowerCase();
   const existingFruit = mergedFruits[lowercaseName];

    if (existingFruit) {
       existingFruit.stock += fruit.stock;
    } else {
      mergedFruits[lowercaseName] = { ...fruit };
    }
  });

  return Object.values(mergedFruits);
};

const FruitList: React.FC<FruitListProps> = ({ fruits }) => {
  const mergedFruits = mergeFruitsStock(fruits);

  return (
    <div className="mx-12 mt-8">
      <div className="overflow-x-auto">
        <table className="table border-collapse ">
          <thead>
            <tr className="text-center text-sm bg-slate-500 text-white">
              <th>Fruit Name</th>
              <th>Fruit Type</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {mergedFruits.map((fruit) => (
              <tr key={fruit.fruitId} className="text-center">
                <td>{fruit.fruitName}</td>
                <td>{fruit.fruitType}</td>
                <td>{fruit.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FruitList;
