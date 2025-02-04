import {CheckboxGroup} from "@telus-uds/components-web";
import * as redux from "./redux"
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {PetStatusNames} from "../../middleware/petstore-client";

/** Performs listing of Pets (based on 'status') */
export const Ui = () => {
    const dispatch = useAppDispatch()
    const petStatusArr = useAppSelector(redux.selectPetStatus)
    
    return (
        <>
            <CheckboxGroup
                items={PetStatusNames.map((petStatus) => ({label: petStatus, id: petStatus }))}
                checkedIds={petStatusArr}
                onChange={(checkedIds: typeof petStatusArr) => dispatch(redux.assignPetStatusArr(checkedIds))}
            />
        </>
    )
}
