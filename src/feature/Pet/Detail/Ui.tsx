import * as PetStore from "../../../middleware/petstore-client";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

/** Shows details of the pet specified by the 'id' URL param*/
export const Ui = () => {
    const [trigger, {data, isError, isLoading}] = PetStore.api.useLazyGetPetByIdQuery()
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        trigger({petId: Number.parseInt(id ?? "0")})
    }, []);

    return (
        <>
            <div>Showing pet with ID {id}</div>
            {isLoading && <p>Loading...</p>}

            {isError && <p>Error. Note that Petstore API is quite flaky and often returns '404'</p>}

            {data && <div>Id: {data.id}<br/>
                Name: {data.name}<br/>
                Status: {data.status}
            </div>}
        </>
    )
}
