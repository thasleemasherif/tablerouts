import React from 'react'

const TableHeader = () =>{
    return (
        <div>
            <table className='bg-warning' width="100%" border="1">
                <tr>
                    <th width="25%">ID</th>
                    <th width="25%">Employee Name</th>
                    <th width="25%">Age</th>
                    <th width="25%">Country</th>
                </tr>
            </table>
        </div>
    );
}

export default TableHeader;