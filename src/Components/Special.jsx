import { useContext } from "react";
import { wishContext } from "./Grandpa";

const Special = ({asset}) => {
    const [wish] = useContext(wishContext)
    return (
        <div>
            <h1 className="text-center">Special</h1>
            <p>Has: {asset}</p>
            <p className="text-center">{wish}</p>
        </div>
    );
};

export default Special;