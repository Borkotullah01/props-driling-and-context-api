import { useContext } from "react";
import Special from "./Special";
import { moneyContext } from "./Grandpa";

const MySelf = ({asset}) => {
    const [money] = useContext(moneyContext);
    return (
        <div>
            <h1 className="text-center">MySelf</h1>
            <section>
                <Special asset={asset}></Special>
            </section>
            <p>Grandpas Money: {money}</p>
        </div>
    );
};

export default MySelf;