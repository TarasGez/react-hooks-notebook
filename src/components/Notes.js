import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Notes = ({notes, onRemove}) => (
    notes.length ?
    <TransitionGroup component = 'ul' className = 'list-group'>
        {notes.map(note => (
            <CSSTransition
                key = {note.id}
                classNames = {'note'}
                timeout = {800}>
                <li className = 'list-group-item note'>
                    <div>
                        <strong>{note.title}</strong>
                        <small>{note.date}</small>
                    </div>

                    <button
                        className = 'btn btn-outline-danger btn-sm'
                        type = 'button'
                        onClick = {() => onRemove(note.id)}>
                            &times;
                    </button>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
    : <div>Sorry, there are no notes</div>
)