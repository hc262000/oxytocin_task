import React from "react";
import {Spinner} from "react-bootstrap";
export default function(props){
    
    if(props.items){

        console.log('akram')
        console.log(props)
        return(
            <>
            {props.items.map((item=>
                <>
                <h4>Chapter:{item.chapter} {item.title}</h4>
                <p>{item.content}</p>
                </>
                
                ))}

            </>
    
        );
    }else{
        return(
            <>
            <Spinner animation="border" />
            </>
        );
    }
    

}