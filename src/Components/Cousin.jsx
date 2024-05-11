import { useContext } from "react";
import { wishContext } from "./Grandpa";

const Cousin = ({name, gift, neckless}) => {
    const [wish]= useContext(wishContext)
    return (
        <div className="text-center">
            <h1>Cousin</h1>
            <p>{name}</p>
            {name=== "Selim" && <p>Has: {gift}</p>}
            {name=== "Shahin" && <p>Has: {neckless}</p>}
            {name=== "Anjumara" && <p className="text-center">{wish}</p>}
        </div>
    );
};

export default Cousin;