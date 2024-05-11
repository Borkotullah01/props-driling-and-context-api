import Cousin from "./Cousin";

const Uncle = ({gift}) => {
    return (
        <div>
            <h1 className="text-center">Uncle</h1>
            <section className="flex">
                <Cousin gift={gift} name={'Selim'}></Cousin>
                <Cousin name={'Simla'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;