import React from 'react';

const GetRows = (props) =>{

    return (
        <div>
            <table className='bg-info'  width="100%" border="1">
                <tr>
                    <td width="25%">{props.std.id}</td>
                    <td width="25%">{props.std.firstName} {props.std.lastName}</td>
                    <td width="25%">{props.std.age}</td>
                    <td width="25%">{props.std.country}</td>
                </tr>
            </table>
        </div>
    );
}

export default GetRows;