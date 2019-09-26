import React, { Fragment, useContext, useEffect } from 'react';
import { AlertContext } from '../contex/alert/alertContext';
import { FirebaseContext } from '../contex/firebase/firebaseContext';

// Components
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';
import { Loader } from '../components/Loader';

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);
    const {show} = useContext(AlertContext);

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, []);

    const removeHandler = (id) => {
        removeNote(id);
        show('The note was successfully deleted', 'success');
    }

    return (
        <Fragment>
            <Form />

            <hr />

            {loading
                ? <Loader />
                : <Notes
                    notes = {notes}
                    onRemove = {removeHandler} />
            }            
        </Fragment>
    )
}