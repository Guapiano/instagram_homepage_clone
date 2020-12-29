import React from 'react';
import {StoriesBackground, StoriesContents} from './StoriesStyle';
import Users from '../users/Users';

export default function Stories(){
    return(
        <StoriesBackground>
            <StoriesContents>
                <Users name="Adriano Z."></Users>
                <Users name="Gabriel K."></Users>
                <Users name="Gabriel P."></Users>
                <Users name="Lucas N."></Users>
                <Users name="Lucas R."></Users>
                <Users name="Matheus V."></Users>
                <Users name="Vinícius Z."></Users>
            </StoriesContents>
        </StoriesBackground>
    )
}