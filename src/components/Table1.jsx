import React from "react";

const Table1 = () =>{
    return(
        <div className="table1">
            <table>
                <tr>
                    <td colSpan={3}></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan={3}></td>
                </tr>
            </table>
        </div>
    )
}

export default Table1;