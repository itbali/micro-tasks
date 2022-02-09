import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType ={
    addMessage: (title:string)=>void
}

export const FullInput = (props:FullInputPropsType) => {
     let [title,setTitle] =useState('')

    // console.log(title)
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>)=>{
        // console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)
    }

    const onButtonClickHandler = ()=>{
         props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onButtonClickHandler}>+</button>
        </div>
    );
};
