import React from "react"
import { ButtonNextBackProps } from "../../types"

export const ButtonNextBack = ({onclick, action}: ButtonNextBackProps) => {
    return (
        <button onClick={onclick} className=" text-guros-blue500 border border-solid border-guros-blue500 p-1 rounded-lg w-1/2 lg:w-[170px]">{action}</button>
    )
}