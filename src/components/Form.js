import React, {useState, useContext} from 'react';
import { AlertContext } from '../contex/alert/alertContext';
import { FirebaseContext } from '../contex/firebase/firebaseContext';

export const Form = () => {

    const [value, setsValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const submitHandler = event => {
        event.preventDefault();

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('The note was successfully added', 'success')
            }).catch((er) => {
                alert.show(`${er}`, 'danger');
            });
            setsValue('');
        } else {
            alert.show('Add note text')
        }
    }

    return (
        <form onSubmit = {submitHandler}>
            <div className = 'form-group'>
                <input
                    type = 'text'
                    className = 'form-control'
                    placeholder = 'Add note name'
                    value = {value}
                    onChange = { e => setsValue(e.target.value)}
                />
            </div>
        </form>
    )
}
