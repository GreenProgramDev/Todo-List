import React from "react";

const Header = () => {
    return (
        <>
        <div className="flex  w-full gap-1.5 items-center  px-0.3">
            <div className="text-left">
                <h1 className="text-lg font-bold text-gray-800">Bom dia, Alice!!!</h1>
                <p> Já olhou suas tarefas?<br/>Vamos adicionou alguma<br />nova tarefa hoje?</p>
            </div>
            <img className="mix-blend-multiply  shrink-0" src="public/image 7.png" alt="" />
        </div>
        </>

    )
}

export default Header