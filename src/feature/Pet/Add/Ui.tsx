// import * as PetStore from "../../../middleware/petstore-client";
// import {useEffect} from "react";
// import {useParams} from "react-router-dom";
import {FormikErrors, useFormik} from "formik";
import {PetStatus, PetStatusNames} from "../../../middleware/petstore-client";
import {FlexGrid} from "@telus-uds/components-web";

interface FormValues {
    id: number,
    name: string,
    category: string,
    status: PetStatus
}

/** Adds a new Pet */
export const Ui = () => {
    // const [trigger, {data, isError, isLoading}] = PetStore.api.useAddPetMutation()
    // const {id} = useParams<{ id: string }>();

    const validate = (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!values.name) {
            errors.name = 'Required';
        } else if (values.name.length > 15) {
            errors.name = 'Must be 15 characters or less';
        }

        if (!values.category) {
            errors.category = 'Required';
        } else if (values.category.length > 20) {
            errors.category = 'Must be 20 characters or less';
        }

        return errors;
    };
    
    const formik = useFormik<FormValues>({
        initialValues: {
            id: 0,
            name: '',
            category: '',
            status: PetStatusNames[0]
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <FlexGrid>
                <FlexGrid.Row>
                    <FlexGrid.Col xs={3}>
                        <label htmlFor="name">Name</label>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={6}>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row>
                    <FlexGrid.Col xs={3}>
                        <label htmlFor="category">Category</label>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={6}>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.category}
                        />
                        {formik.errors.category ? <div>{formik.errors.category}</div> : null}
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row>
                    <FlexGrid.Col>
                        <button type="submit">Submit</button>
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>
        </form>
    )
}
