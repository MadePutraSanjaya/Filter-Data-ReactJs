import FruitList from './FruitList/FruitList';
import { fruits } from './data/fruits';

function App() {


  return (
    <div className="">
      <h1 className="text-center text-3xl my-12 text-white	">
        Andi's Fruits Store
      </h1>

      <h2 className="text-xl mx-12 text-grey">All Fruits Available</h2>
      <div className="w-10 mx-12 my-2 h-px bg-slate-400	"></div>

      <FruitList fruits={fruits} />
    </div>
  );
}
export default App