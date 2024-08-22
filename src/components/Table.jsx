import React from "react";

const Table = () =>{
    return(
        <div className="container">
            <table>
                <thead>
                    <th>S No</th>
                    <th>Name</th>
                    <th>Father's Name</th>
                    <th>Mother's Name</th>
                    <th>Mobile No.</th>
                    <th>Email ID</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Bristidev Burman</td>
                        <td>Barshan Dev Burman</td>
                        <td>Susmita Burman</td>
                        <td>9330243841</td>
                        <td>bristidev2004@gmail.com</td>
                        <td>
                            <button class="active">Active</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Arunangshu Majumdar</td>
                        <td>Unknown</td>
                        <td>Unknown</td>
                        <td>9347637841</td>
                        <td>marunangshu@gmail.com</td>
                        <td>
                            <button class="inactive">Inactive</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Test 3</td>
                        <td>Test 3 Father</td>
                        <td>Test 3 Mother</td>
                        <td>9330753741</td>
                        <td>test3919191@gmail.com</td>
                        <td>
                            <button class="active">Active</button>
                        </td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Mafuja Khatun</td>
                        <td>Sk. Babar Ali</td>
                        <td>Monjura Begum</td>
                        <td>9330976712</td>
                        <td>mafujak15102002@gmail.com</td>
                        <td>
                            <button class="active">Active</button>
                        </td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Debanjan Pan</td>
                        <td>Prakash Pan</td>
                        <td>Unknown</td>
                        <td>801683345</td>
                        <td>debanjanpan2004@gmail.com</td>
                        <td>
                            <button class="inactive">Inactive</button>
                        </td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Test 6</td>
                        <td>Test 6 Father</td>
                        <td>Test 6 Mother</td>
                        <td>9330763741</td>
                        <td>test6666666@gmail.com</td>
                        <td>
                            <button class="active">Active</button>
                        </td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Test 7</td>
                        <td>Test 7 Father</td>
                        <td>Test 7 Mother</td>
                        <td>9330763741</td>
                        <td>test77@gmail.com</td>
                        <td>
                            <button class="inactive">Inactive</button>
                        </td>
                    </tr>
                    <tr>
                        <td>8.</td>
                        <td>Test 8</td>
                        <td>Test 8 Father</td>
                        <td>Test 8 Mother</td>
                        <td>9330788841</td>
                        <td>test6888@gmail.com</td>
                        <td>
                            <button class="inactive">Inactive</button>
                        </td>
                    </tr>
                    <tr>
                        <td>9.</td>
                        <td>Test 9</td>
                        <td>Test 9 Father</td>
                        <td>Test 9 Mother</td>
                        <td>9330793741</td>
                        <td>test6969999@gmail.com</td>
                        <td>
                            <button class="active">Active</button>
                        </td>
                    </tr>
                    <tr>
                        <td>10.</td>
                        <td>Test 10</td>
                        <td>Test 10 Father</td>
                        <td>Test 10 Mother</td>
                        <td>9330710741</td>
                        <td>test1010101@gmail.com</td>
                        <td>
                            <button class="active">Active</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;