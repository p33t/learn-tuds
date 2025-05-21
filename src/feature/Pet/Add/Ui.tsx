// import * as PetStore from "../../../middleware/petstore-client";
// import {useEffect} from "react";
// import {useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {PetStatus, PetStatusNames} from "../../../middleware/petstore-client";
import {FlexGrid} from "@telus-uds/components-web";
import * as Yup from 'yup';
import React from "react";

interface FormValues {
    id: number,
    name: string,
    category: string,
    status: PetStatus
}

/** Adds a new Pet */
export const Ui: React.FC = () => {
    // const [trigger, {data, isError, isLoading}] = PetStore.api.useAddPetMutation()
    // const {id} = useParams<{ id: string }>();

    // Primitive validation pre-Yup
    // const validate = (values: FormValues) => {
    //     const errors: FormikErrors<FormValues> = {};
    //     if (!values.name) {
    //         errors.name = 'Required';
    //     } else if (values.name.length > 15) {
    //         errors.name = 'Must be 15 characters or less';
    //     }
    //
    //     if (!values.category) {
    //         errors.category = 'Required';
    //     } else if (values.category.length > 20) {
    //         errors.category = 'Must be 20 characters or less';
    //     }
    //
    //     return errors;
    // };
    
    // Before <Formik> tag
    // const formik = useFormik<FormValues>({
    //     initialValues: {
    //         id: 0,
    //         name: '',
    //         category: '',
    //         status: PetStatusNames[0]
    //     },
    //     // validate,
    //     validationSchema: Yup.object({
    //         name: Yup.string()
    //             .max(15, 'Must be 15 characters or less')
    //             .required('Required'),
    //         category: Yup.string()
    //             .max(20, 'Must be 20 characters or less')
    //             .required('Required')
    //     }),        
    //     onSubmit: values => {
    //         alert(JSON.stringify(values, null, 2));
    //     },
    // });

    const initialValues: FormValues = { id: 0, name: '', category: '', status: PetStatusNames[0] };

    return (<Formik initialValues={initialValues}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .min(3, 'Min is 3 characters')
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        category: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required')
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        alert(JSON.stringify(values, null, 2));
                        // Trying to see the submit button disable/enable
                        setTimeout(() => setSubmitting(false), 3000);
                    }}>
        {formik => (<Form>
            <FlexGrid>
                <FlexGrid.Row>
                    <FlexGrid.Col xs={3}>
                        <label htmlFor="name">Name</label>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={6}>
                        <Field
                            name="name"
                            type="text"
                        />
                        <ErrorMessage name="name"/>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row>
                    <FlexGrid.Col xs={3}>
                        <label htmlFor="category">Category</label>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={6}>
                        <Field
                            name="category"
                            type="text"
                        />
                        <ErrorMessage name="category"/>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row>
                    <FlexGrid.Col xs={3}>
                        <label htmlFor="status">Status</label>
                    </FlexGrid.Col>
                    <FlexGrid.Col xs={6}>
                        <Field name="status" as="select">
                            { PetStatusNames.map(status => <option key={status} value={status}>{status}</option>) }
                        </Field>                        
                        <ErrorMessage name="status"/>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row>
                    <FlexGrid.Col>
                        <button type="submit" disabled={formik.isSubmitting}>Submit</button>
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>
        </Form>)}
    </Formik>)
}
