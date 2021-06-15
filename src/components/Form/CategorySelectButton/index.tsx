import React from 'react'

import {
    Container,
    Category,
    Icon
} from './style'


interface props{
    title:string;
    onPress:()=>void;
}

export function CategorySelectButton({title, onPress}:props){
    return(
        <Container onPress={onPress}>
            <Category>
            {title}
            </Category>
            <Icon name='chevron-down'/>

        </Container>

    )
}