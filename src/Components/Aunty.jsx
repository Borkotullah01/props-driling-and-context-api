import { useContext } from "react";
import Cousin from "./Cousin";
import { moneyContext } from "./Grandpa";

const Aunty = ({neckless}) => {
    const [money, setMoney] = useContext(moneyContext);
    return (
        <div className="text-center">
            <h1>Aunty</h1>
            <section className="flex">
                <Cousin neckless={neckless} name={'Shahin'}></Cousin>
                <Cousin name={'Anjumara'}></Cousin>
            </section>
            <p className="text-center">Money: {money}.Tk</p>
            <button onClick={()=> setMoney(money+2000)}>Add money 2000</button>
        </div>
    );
};

export default Aunty;