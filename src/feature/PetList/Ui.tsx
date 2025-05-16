import {Button, CheckboxGroup} from "@telus-uds/components-web";
import * as redux from "./redux"
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import * as PetStore from "../../middleware/petstore-client";
import {useEffect, useState} from "react";
import {Pet} from "../../middleware/petstore-client";
import {Link} from "react-router-dom";

/** Performs listing of Pets (based on 'status') */
export const Ui = () => {
    const dispatch = useAppDispatch()
    const petStatusArr = useAppSelector(redux.selectPetStatus)
    const [trigger, {data, isError, isLoading}] = PetStore.api.useLazyFindPetsByStatusQuery()
    const [uniqueData, setUniqueData] = useState<Pet[]>([])

    useEffect(() => {
        if (data) {
            const map = data.reduce((acc, pet) => {
                acc.set(pet.id ?? 0, pet);
                return acc;
            }, new Map<number, Pet>())
            setUniqueData([...map.values()])
        }
        else {
            setUniqueData([])
        }
    }, [data]);
    
    function onLoadClick() {
        trigger({status: petStatusArr})
    }
    
    return (
        <>
            <CheckboxGroup
                items={PetStore.PetStatusNames.map((petStatus) => ({label: petStatus, id: petStatus }))}
                checkedIds={petStatusArr}
                onChange={(checkedIds: typeof petStatusArr) => dispatch(redux.assignPetStatusArr(checkedIds))}
            />
            <Button onPress={onLoadClick}>Load</Button>
            
            { isLoading &&  <p>Loading...</p> }
            
            { isError &&  <p>Error</p> }
            
            { data && <div>{uniqueData.length} pets<br/>
                {uniqueData.map(pet => <> <Link key={pet.id} to={`/pet/detail/${pet.id}`}>{pet.name}</Link></>)}
            </div>}
        </>
    )
}
