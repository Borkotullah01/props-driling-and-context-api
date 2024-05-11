import { createContext, useState } from "react";
import Aunty from "./Aunty";
import Father from "./Father";
import "./Grandpa.css"
import Uncle from "./Uncle";

export const moneyContext = createContext(100);
export const wishContext = createContext("I Love You");

const Grandpa = () => {

    const upohar = 'Diamond Ring';
    const neckless = "Gold Neckless";
    const [wish, setWish] = useState('I Love You');
    const [money, setMoney] = useState(1000);
    return (
        <div className="grandpa">
            <h1 className="text-center font-bold">Grandpa</h1>
            <h2 className="text-center">Money: {money}.Tk</h2>
            <section className="flex justify-center">
                <wishContext.Provider value={[wish, setWish]}>
                    <moneyContext.Provider value={[money, setMoney]}>
                        <Father asset={upohar}></Father>
                        <Uncle gift={upohar}></Uncle>
                        <Aunty neckless={neckless}></Aunty>
                    </moneyContext.Provider>
                </wishContext.Provider>
            </section>
        </div>
    );
};

export default Grandpa;