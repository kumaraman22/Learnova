import React from 'react';

const Button = (props)=>{
    return(
        <div>
            <button className ="bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[rgba(0,_0,_0,_0,24)_0px_3px_8px] hover:bg-brightGreen hover:text-white transition">
                
                {props.title}

            </button>
        </div>
    )
}

export default Button;