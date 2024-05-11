import Brother from "./Brother";
import MySelf from "./MySelf";
import Sister from "./Sister";

const Father = ({asset}) => {
    return (
        <div>
            <h1 className="text-center">Father</h1>
            <section className="flex justify-center">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;