import React from 'react';
import Marquee from 'react-fast-marquee';


const Operators = () => {
  return (

    <>
        <div className="software" style={{textAlign:"justify"}}>

            <h4>Operators</h4>
                  <li>The symbol that trigger the operation/action on data are called Operators.</li><br />

             <h4>Operands</h4>
                <li>The data on which operation is being carried out(the object of the operation) is called operands.</li><br />
                

            <h4><u>Types of Operators</u></h4>

                <div>There are different types of Operators in python:-</div>
                <ol>
                  <li>Arithmetic Operators</li>
                  <li>Assignment Operators</li>
                  <li>Comparison(Relational) Operators</li>
                  <li>Logical Operators</li>
                  <li>Identity Operators</li>
                  <li>Membership Operators</li>
                  <li>Bitwise Operators</li>
                </ol><br />

              <h5>1. Arithmetic Operators</h5>
                <li>Used to perform baisc arithmetic operations.</li>
                    
              <b><u>These operators are:-</u></b> 
                <br/>
                <table className='soft_table'>
                      <thead>
                          <tr>
                              <th><center>Operator</center></th>
                              <th><center>Description</center></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>+ (Addition).</td>
                              <td>add two operands. e.g,a = 10, b = 10 {`=>`} a+b = 20</td>
                          </tr>

                          <tr>
                            <td>- (Subtraction).</td>
                            <td>subtract the second operand from the first operand.  e.g,a = 20, b = 10 {`=>`} a-b = 10</td>
                          </tr>

                          <tr>        
                            <td>* (Multiplication).</td>
                            <td>multiply two operands. e.g,a = 10, b = 10 {`=>`} a*b = 100</td>
                          </tr>

                          <tr>
                          <td>/ (Division).</td>
                            <td>divide two operands. e.g,a = 20, b = 10 {`=>`} a/b = 2</td>
                          </tr>


                          <tr>
                          <td>% (Modulus or Reminder)</td>
                            <td>Returns the reminder after dividing the first operand by the second operand. eg. a = 22, b = 10 {`=>`} a%b = 2</td>
                          </tr>


                          <tr>
                          <td>{`//`} (Floor division)</td>
                            <td>After division decimal place of quotient removed. eg. a = 9, b = 2 {`=>`} a//b = 4.5 but output = 4</td>
                          </tr>

                          
                          <tr>
                          <td>** (Exponent)</td>
                            <td>Calculates the first operand's power to the second operand,. eg. a = 2, b = 3 {`=>`} a**b = 8</td>
                          </tr>

                      </tbody>
                    </table>
                <b><u>Priority of Arithmetic Operator</u></b> 
                <div>** {`=>`} *,/,//,%  {`=>`} +,-</div>

                <Marquee>
                  <h2 style={{color:"red"}}>Left 1 page for coading....</h2>
                </Marquee>
                <br />



                <h5>2.Assignment Operators</h5>
                <li>The right expression's value is assigned to the left operand.</li>

                <b><u>These operators are:-</u></b> 
                <br/>
                <table className='soft_table'>
                      <thead>
                          <tr>
                              <th><center>Operator</center></th>
                              <th><center>Description</center></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>=</td>
                              <td>assigns the value of the right expression to the left operand. e.g,a = 10</td>
                          </tr>

                          <tr>
                            <td>+=</td>
                            <td>a+= 10 means a = a+10</td>
                          </tr>

                          <tr>        
                            <td>-=</td>
                            <td>a-= 10 means a = a-10</td>
                          </tr>

                          <tr>
                          <td>*=</td>
                            <td>a*= 10 means a = a*10</td>
                          </tr>

                          
                          <tr>
                          <td>/=</td>
                            <td>a%= 10 means a = a/10</td>
                          </tr>


                          <tr>
                          <td>%=</td>
                            <td>a%= 10 means a = a%10</td>
                          </tr>


                          <tr>
                          <td>{`//=`}</td>
                            <td>a//= 10 means a = a//10</td>
                          </tr>

                          
                          <tr>
                          <td>**=</td>
                            <td>a**= 10 means a = a**10</td>
                          </tr>

                      </tbody>
                    </table><br />



                <h5>3.Comparison operator</h5>
                <li>It is used to compare two values.</li>
                <li>It gives the output as boolean(bool) value true or false.</li>

                <b><u>These operators are:-</u></b> 
                <br/>
                <table className='soft_table'>
                      <thead>
                          <tr>
                              <th><center>Operator</center></th>
                              <th><center>Description</center></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>== (equal)</td>
                              <td>a == b ; result = true</td>
                          </tr>

                          <tr>
                            <td>!= or {`<>`} (Not equal)</td>
                            <td>a!= b ; result = true</td>
                          </tr>

                          <tr>        
                            <td>{`>`} (Greater than)</td>
                            <td>a{`>`}b ; result = true</td>
                          </tr>

                          <tr>
                          <td>{`<`} (Less than)</td>
                            <td>a{`<`}b ; result = true</td>
                          </tr>

                          
                          <tr>
                          <td>{`>=`} (Greater or equal than)</td>
                            <td>a{`>=`}b ; result = true</td>
                          </tr>


                          <tr>
                          <td>{`<=`} (Less than or equal to)</td>
                            <td>a{`<=`}b ; result = true</td>
                          </tr>


                      </tbody>
                </table>

                    <b><u>Priority of Comparison Operator</u></b> 
                <div>{`>`},{`<`},{`=>`},{`<=`} ----   ==,!=</div>

                <Marquee>
                  <h2 style={{color:"red"}}>Left 5 lines for coading....</h2>
                </Marquee>
                <br />


                <h5>4.Logical Operators</h5>
                <li>It is used while framing or combining more than one condition in conditional statements.</li>
                <li>It gives the output in form of Boolean value(bool)- True or False.</li>
                <li>These operators are:- and,or,not</li> 
                <br/>


                <h5>5.Identity Operators</h5>
                <li>These operator are used to compare the objects are of same type or not & they share same memory location or not.</li>
                <li>These operators are:- is & is not</li> 
                <li>Output - True or False</li> 
                  <div>eg:<br /> 
                          <b>Q1.</b>  x=10 <br />
                              y= 10 <br /> 
                              z=x <br /> 

                          <b>sol:</b> print(x is y) - o/p= true <br />
                               print(x is z) - o/p= true <br />
                  </div>
                  <br />
                  <div><b>Q2.</b>  x=10 <br />
                              y= 20 <br /> 
                
                          <b>sol:</b> print(x is y) - o/p= false <br />
                              b/c print(id(x)) <br />
                  </div>
                <br/>



                <h5>6. Membership Operators</h5>
                <li>It is used to test if a sequence is presented in an object or not,while checking the availability of any value in a sequence like list,tuple etc.</li>
                <li>These operators are:- in & not in</li> 
                <li>Output - True or False</li> 
                  <div>eg:<br /> 
                          <b>Q1.</b> list=[1,2,3,4,5] <br />
                          <b>sol:</b> print(1 in list) - o/p= true <br />
                  </div>
                  <br />
                  
                  <div><b>Q2.</b>To find your name registred or not in reg_user = ["varun","ravi","amit","nitin"] ?<br />

                    <b>sol: </b>
                    <Marquee>
                      <h2 style={{color:"red"}}>Left 7 lines for coading solution....</h2>
                    </Marquee>

                  </div>
                <br/>


                <h5>7. Bitwise operator</h5>
                <li>It is used to perform operations on individual bits of binary number.</li>
                <b><u>These operators are:-</u></b> 
                <br/>
                <table className='soft_table'>
                      <thead>
                          <tr>
                              <th><center>Operator</center></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>& (bitwise AND)</td>
                          </tr>

                          <tr>
                            <td>| (bitwise OR)</td>
                          </tr>

                          <tr>        
                            <td>^ (bitwise XOR)</td>
                          </tr>

                          <tr>
                          <td>~ (bitwise NOT)</td>
                          </tr>

                          <tr>
                          <td>{`<<`} (bitwise left shift)</td>
                          </tr>

                          <tr>
                          <td>{`>>`} (bitwise right shift)</td>
                          </tr>

                      </tbody>
                </table>
                    <b><u>Priority of Comparison Operator</u></b> 
                <div>{`~`},{`<<`},{`>>`},{`&`},{`^`},{`|`}</div>
                <br />


        </div>

    </>
  )
}

export default Operators;