import React from 'react'

const OpenOfficeCalc = () => {
  return (

    <>

        <div className="software" style={{textAlign:"justify"}}>

            <h4>OpenOffice.org Calc - Spreadsheet</h4>

                <li>A spreadsheet is a software tool that enter,calculate,manipulate and analyze set of numbers.</li><br/>

            <h5>Extension of Ooo impress</h5> - .ods

            <br /><br/>

            <h4>Components of Ooo Calc - Spreadsheet</h4>

                <ol>
                    <li><b>Worksheet - </b>
                       <ul> 
                            <li> It is a grid of cells made up of horizontal rows and vertical columns.</li>
                            <li> It contains 65,536 rows and 1024 columns.</li>
                        </ul>
                    </li>

                    <li><b>Sheet - </b> A spreadsheet contains a block of cells arranged in rows and columns.</li>

                    <li><b>Cell - </b> A intersection of row and column gives unique address is called cell.</li>

                    <li><b>Cell Pointer - </b> It is a cell-boundary that specifies which cell is active at the moment.</li>

                    <li><b>Current Cell - </b> A active cell in a sheet.</li>

                    <li><b>Range of cells  - </b>

                        <ul> 
                            <li>It is a group of contiguous cells that form a rectangular area in shape.</li>
                            <li>A range is specified by giving the addresses of first cell and the last cell of the range.</li>
                        </ul>
                    </li>

                    <li><b>Workbook - </b> Multiple worksheets can be combined under a file known as Workbook.</li>
                     
                </ol>


            <h4><u>Different types of data that can be entered in OOo Calc:</u></h4>
                <h5>Three types of data entries are:</h5>

                <ol>

                    <li><b>Numbers</b>

                        <ul> 
                            <li>These are numeric entries..</li>
                            <li>It can be used in calculations.</li>
                            <li>A number can contain only the following         characters : 0 1 2 3 4 5 6 7 8 9 + - ( ) , / $ % . E e.
                            </li>
                        </ul>
                      </li>

                    <li><b>Text</b> — Text is any combination of numbers, spaces, and non-numeric characters like 43A, 123XYZ etc.</li>

                    <li><b>Formulas</b> — Formula is a sequence of values, cell-addresses, names, functions or operators in a cell that produces a new value from existing values. For example, =A1+A2. <b>In other words </b> - A formula begins with an '=' sign and can contain values (entries that can be used for calculations), operators (e.g., +, /, *) and cell addresses (e.g., C9, B14).
                     </li>

                </ol>

            <h4><u>What will happen to the contents of the destination cell if you copy the contents of the source cell into the destination cell.</u></h4>
                <li>If we copy the contents of the source cell and paste them into the destination cell, the contents of the destination cell will be replaced by the contents of the source cell. The original contents of the destination cell will be overwritten with the copied data from the source cell.</li><br/>

            <h4><u>Cell Reference:</u></h4>
                <li>The cell address in a function is known as cell reference.</li>
                <h5>Cell referencing in OOo Calc are of three types :</h5>

                <ol>
                    <li><b>Relative referencing</b> — Cell referencing in which the cells are referred by their relative position in the worksheet — relative to a particular cell is known as Relative referencing. For example, A23, BZ15 etc.</li> 

                    <li><b>Absolute referencing</b> — Cell referencing in which the cells are referred by their fixed position (absolute position) in the worksheet is known as Absolute referencing. For example, $A$23, $Z$15 etc.,</li>

                    <li><b>Mixed Referencing</b> — Combination of relative and absolute referencing is called mixed referencing. For example, A$23, $Z15 etc.</li> 
                </ol>


                <h5>Differentiate between Mixed referencing and 
                    Absolute referencing:</h5>

                
                <table>
                    <thead>
                        <tr>
                            <th>Mixed referencing</th>
                            <th>Absolute referencing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mixed referencing fixes either the row or column while allowing the other to change.</td>
                            <td>In absolute referencing, both the row and column references are fixed.</td>
                        </tr>

                        <tr>
                            <td>When a formula with absolute references is copied to another cell, the references remain changed.</td>
                            <td>When a formula with absolute references is copied to another cell, the references remain unchanged.</td>
                        </tr>

                        <tr>
                            <td>For example, C$6</td>
                            <td>For example, $C$6</td>
                        </tr>
                    </tbody>
                </table>

                    <br />

                <h5>Difference between copying and moving a range:</h5>

                
                <table>
                    <thead>
                        <tr>
                            <th>Copying a range</th>
                            <th>Moving a range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Create a duplicate copy of the selected cells.</td>
                            <td>Relocating the selected cells from their original location to a new location.</td>
                        </tr>

                        <tr>
                            <td>The original cells remain at their original location, and a copy is placed elsewhere in the worksheet.</td>
                            <td>The original cells are deleted from their original position and placed at the new location.</td>
                        </tr>

                        <tr>
                            <td>This is useful t to preserve the original data while using a copy for calculations, analysis, or other purposes.</td>
                            <td>This is useful to reorganize our data within the same worksheet or between worksheets.</td>
                        </tr>
                    </tbody>
                </table>

                    <br />

                <h5>Delete Contents dialog:</h5>
            

                <ol>
                    <li><b>Delete All</b> — Deletes all content from the selected cell range.</li> 

                    <li><b>Text</b> — The Text option deletes text only. Formats, formulas, numbers and dates are not affected.</li>

                    <li><b>Numbers</b> — Delete only number,formats, formulas,remain unchanged.</li> 

                    <li><b>Notes</b> — The Notes option deletes notes added to cells. All other elements remain unchanged.</li> 

                    <li><b>Formats</b> —The Formats option deletes format attributes applied to cells. All the cell content remains unchanged.</li> 
                </ol> 
        </div>

    </>
  )
}

export default OpenOfficeCalc;