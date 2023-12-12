import React from 'react'

const Table = () => {
  return (

    <>

        <div className="software" style={{textAlign:"justify"}}>

            <h3>Table</h3>
                <li>It is an arrangement of text in the form of columns and rows.</li>
                <li>A consists of vertical columns and horizontal rows.</li>
                
            <h3>Cell</h3>
                <li>The intersection of a column and row is called cell.</li>
         

            <h4><u>To insert a Table</u></h4>

                <h5>a. Using Table Button</h5>

                        <ul type="square">

                            <li>Place the insertion point</li>
                            <li>Click the arrow of table button on the standard toolbar.</li>
                            <li>When the displayed grid represents the desired number of rows and columns,release the mouse button.</li>

                        </ul> 



                <h5>b. Using the Insert Menu</h5>

                        <ul type="square">

                            <li>Place the insertion point</li>
                            <li>Click the table icon on standard toolbar.</li>
                            <li>Select table command from <b>Insert drop-down menu</b> or <b>press ctrl + F12</b></li>
                            <li>Specify the number of columns and rows.</li>
                            <li>Click on OK.</li>
                        </ul> 


                <h5>Inserting Rows/Columns in Tables</h5>

                        <ul type="square">
                            <li>Place the cursor in the rows.</li>
                            <li>Select <b> Table → Insert → Rows/columns</b>.</li>
                            <li>TSpecify the number of columns and rows</li>
                        </ul> 

                    
                    <h5>Deleting rows and columns</h5>

                            <ul type="square">
                                <li>Select the rows/columns.</li>
                                <li>Select <b> Table → Delete → Rows/columns</b>.</li>
                            </ul> 


                            
                    <h5>Auto Formatting the Table</h5>

                            <ul type="square">

                                <li>Click anywhere inside the table.</li>
                                <li>Click <b> Table → AutoFormat</b>.</li>
                                <li>Click on any pre-designed formats.</li>
                                <li>Click OK.</li>

                            </ul> 




                <h4><u>Merging cells</u></h4>

                    <li>It refers to combining two or more table cells into one cell.</li><br/>


                    <h5>Steps to merge a group of cells into one cells</h5>

                        <ul type="square">

                            <li>Select the table-cells to be merged.</li>
                            <li>Click Merge cells icons on Table toolbar.</li>
                            <li>Select <b> Table → Merge Cells</b>.</li>

                        </ul> 




                <h4><u>Spliting cells</u></h4>

                    <li>Dividing one cell into two or more cells.</li><br/>


                        <h5>Steps to split a cells into multiple cells</h5>

                            <ul type="square">
                                <li>Position the cursor inside the cell.</li>
                                <li>Click split cells icon on table toolbar.</li>
                                <li>Select <b> Table → Split Cells</b>.</li>
                            </ul> 


                <h4><u>Shortcut keys for Table</u></h4><br/>

                    <li>Move to next cell  =  <b>Tab</b></li>
                    <li>Move to previous cell  =  <b>Shift + Tab</b></li>
                    <li>Move up one arrow  =  <b>Up arrow</b></li>
                    <li>Move down arrow  =  <b>down arrow</b></li>
     
                       
        </div>

    </>
  )
}

export default Table;