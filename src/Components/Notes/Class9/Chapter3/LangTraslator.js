import React from 'react';
import './Software.css';


const LangTraslator = () => {
  return (
    <>
    <div className="software">

      <h5>2. Language Translators (Processor)</h5>

        <ul>
          <li>
            It converts the high-level language or assembly language into machine level language.
          </li>
   
    
                <strong>Types of language translators</strong>
        
                  <ol type='i'>
                      <li>Assembler</li>
                      <li>Compiler</li>
                      <li>Interpreter</li>
                  </ol>
        </ul>    


            <h5 style={{marginLeft:"30px"}}>i. Assembler</h5>    

            <ul style={{marginLeft:"30px"}}>
                <li>
                    It converts an assembly language program into machine language.
                </li>                
            </ul>

            <h5 style={{marginLeft:"30px"}}>ii. Compiler</h5>    

            <ul style={{marginLeft:"30px"}}>
                <li>
                    It traslates the entire source code of high-level language into low-level language or machine code in a single code.
                </li> 
                <strong>eg:</strong>C,C++,C#,JAVA etc.               
            </ul>

            <h5 style={{marginLeft:"30px"}}>iii. Interpreter</h5> 

            <ul style={{marginLeft:"30px"}}>
                <li>
                    It traslates the entire source code of high-level language into low-level language or machine code program line by line.
                </li>  
                <strong>eg:</strong>PHP,Perl,Ruby,Python etc.              
            </ul>

            <b><u>Difference Between Compiler and Interpreter</u></b> 
            <br/>
            <table className='soft_table'>
                <thead>
                    <tr>
                        <th><center>Compiler</center></th>
                        <th><center>Interpreter</center></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Traslate the entire code in a single run.</td>
                        <td>Traslate the entire code line by line.</td>
                    </tr>

                    <tr>
                        <td>Both syntactic and semantic errors can check simultaneously.</td>
                        <td>Only syntactic errors are checked.</td>
                    </tr>

                    <tr>        
                        <td>The localization of error is diffcult.</td>
                        <td>The localization of error is easy.</td>
                    </tr>

                    <tr>
                        <td>Runs faster than Interpreter.</td>
                        <td>Slower than Compiler</td>
                    </tr>

                    <tr>
                        <td>Generate an output in the form of .exe</td>
                        <td>Does not generates any output.</td>
                    </tr>

                    <tr>
                        <td>Does not require source code for later execution.</td>
                        <td>Require source code for later execution</td>
                    </tr>

                    <tr>
                        <td>CPU utilization is more.</td>
                        <td>CPU utilization is less.</td>
                    </tr>

                    <tr>
                        <td>Consume less time.</td>
                        <td>Consume more time.</td>
                    </tr>

                    <tr>
                        <td>Eg:- C,C++,C#,JAVA</td>
                        <td>Eg:- PHP,Perl,Ruby,Python</td>
                    </tr>
                </tbody>
            </table>       
    </div>
    
  </>
  )
}

export default LangTraslator;