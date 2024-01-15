import React from 'react'

const Functions = () => {
  return (

    <>

        <div className="software" style={{textAlign:"justify"}}>

            <h4>Functions</h4>

                <li>A function are predefined formulas that perform calculations by specific values,arguments.</li><br/>

            <h4>Intergral parts of functions</h4>
                <div><b>Two intergral parts of fucntions</b>: Arguments and Structure</div>

              <ul>
                  <li><b>Arguments: </b> 
                      <ul>
                        <li>The values passed to the functions,using which the function carries out some task.</li>
                        <li>It can be numbers,text,logical values such as TRUE or FALSE,ranges or cell references.</li>
                        <li>It can also be constants,formulas or other function.</li>
                      </ul>
                  </li> 

                  <li><b>Structure: </b> 
                      <ul>
                        <li>The structure of a function begins with the function name,followed by an opening parenthesis,the arguments for the function separated by commas, and a closing parenthesis.</li>
                        <li>Formulas begins with <b>equal sign (=)</b>.</li>
                          <b> Syntax: </b>  = Name (argument1,argument2,...)
                      </ul>
                  </li>           
              </ul>  

              <ul>

                <li><b>SUM:</b> 
                  <ul>
                    <li>This function adds all the numbers in a range of cells.</li>
                    <b> Syntax: </b>  = SUM(number1;number2,...)
                  </ul>
                </li><br/>

                <li><b>AVERAGE:</b> 
                  <ul>
                    <li>This function returns the average(arithmetic mean) of the argument.</li>
                    <b> Syntax: </b>  = AVERAGE(number1;number2,...,number30)
                  </ul>
                </li><br/>

                <li><b>COUNT:</b> 
                  <ul>
                    <li>This function counts the numbers of cells that contain numbers and numbers within the list of arguments.</li>
                    <b> Syntax: </b>  = COUNT(value1;value2,...)
                  </ul>
                </li><br/>

                <li><b>COUNT<i>A</i>: </b> 
                  <ul>
                    <li>It refers to count all function that simply counts number of entries.</li>
                    <li>This function counts the number of values in the list of arguments.</li>
                    <b> Syntax: </b>  = COUNT<i>A</i>(number1;number2,...,number30)
                  </ul>
                </li><br/>

                <li><b>MAX:</b> 
                  <ul>
                    <li>This function returns the largest value in a set of values.</li>
                    <b> Syntax: </b>  = MAX(number1;number2,...)
                  </ul>
                </li><br/>

                <li><b>MAX<i>A</i>:</b>
                  <ul>
                    <li>Returns the maximum of a list of argumens, including text and logical entries</li>
                    <b> Syntax: </b>  = MAX<i>A</i>(number1;number2;...number30)
                  </ul>
                </li><br/>

                <li><b>MIN:</b> 
                  <ul>
                    <li>This function returns the smallest number in a set of values.</li>
                    <b> Syntax: </b>  = MIN(number1;number2,...)
                  </ul>
                </li><br/>

                <li><b>IF:</b> 
                  <ul>
                    <li>This function returns one of two values,depending on a test condition.</li>
                    <b> Syntax: </b>  = IF(test;value1,value2)
                  </ul>
                </li><br/>

              </ul>
  
 
               







        </div>

    </>
  )
}

export default Functions;