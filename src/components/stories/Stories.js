import React from 'react';
import {StoriesBackground, StoriesContents} from './StoriesStyle'
import Users from '../users/Users'

export default function Stories(){
    return(
        <StoriesBackground>
            <StoriesContents>
                <Users name="Ashley R."></Users>
                <Users name="Demian P."></Users>
                <Users name="Gabriel K."></Users>
                <Users name="Larissa R."></Users>
                <Users name="Ricardo T."></Users>
                <Users name="Matheus V."></Users>
                <Users name="Daniela L."></Users>
            </StoriesContents>
        </StoriesBackground>
    )
}