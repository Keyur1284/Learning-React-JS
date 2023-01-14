import { useQuery } from "@tanstack/react-query"
import Axios from "axios";

export const Home = () => {

    const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => Axios.get("https://catfact.ninja/fact").then((res) => res.data));

    if (isLoading) {
        return <h1 className="m-3">Loading...</h1>;
    }

    if (isError) {
        return <h1 className="m-3">Error!</h1>;
    }

    return (
    <h1 className="m-3">
        This is the home page 
        <p className="mt-2">{catData?.fact}</p>
        <button className="btn btn-primary" onClick={refetch}>Refetch</button>
    </h1>
    );
};