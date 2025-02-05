import {Button, CheckboxGroup} from "@telus-uds/components-web";
import * as redux from "./redux"
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import * as PetStore from "../../middleware/petstore-client";

/** Performs listing of Pets (based on 'status') */
export const Ui = () => {
    const dispatch = useAppDispatch()
    const petStatusArr = useAppSelector(redux.selectPetStatus)
    const [trigger, {data, isError, isLoading}] = PetStore.api.useLazyFindPetsByStatusQuery()
    
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
            
            { data && <div>{data.length}</div>}
            {/*{ data && data.map((pet: PetStore.Pet) => <span>{pet.name}</span>)}*/}
        </>
    )
}
