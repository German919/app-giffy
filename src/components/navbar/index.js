import React from 'react'
import {Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Routes, useNavigate, Route} from "react-router-dom";
import { Categories } from '../categories';
import styles from "./index.module.css"
import { ListOfGifs } from '../ListOfGifs';

export const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            
            <Formik
                initialValues={{
                    name:""
                    }
                }
                onSubmit=  {({name}, acciones )=>  {
                    navigate(`/${name}`)
                    acciones.resetForm({
                        name:""
                    })
                }}
                validationSchema={
                    Yup.object({
                        name : Yup.string()
                                    .required("debe ingresar el gif")
                    })
                }
            >
            {
                () => (
                    <Form className={styles.form}>
                        <div>
                            <button type='submit' className={styles.button}>aceptar</button>
                            <Field
                                className={styles.input}
                                type="text"
                                name="name"
                                placeholder="Busca tu gif..."
                            /> 
                        </div>
                         <ErrorMessage name="name" component="span" />   
                    </Form>
                )
            }
            </Formik>
           <Categories />
           <Routes>
                <Route path="/:keyword"  element = { <ListOfGifs /> } />
           </Routes>
        </div>
    )
}
