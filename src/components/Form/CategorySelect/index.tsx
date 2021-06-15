import React from 'react'

import {
    Container,
    Category,
    Icon
} from './style'


interface props{
    title:string;
}

export function CategorySelect({title}:props){
    return(
        <Container>
            <Category>
            {title}
            </Category>
            <Icon name='chevron-down'/>

        </Container>

    )
}