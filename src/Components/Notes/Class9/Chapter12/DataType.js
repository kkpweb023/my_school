import React from 'react';
import Marquee from 'react-fast-marquee';


const DataType = () => {
  return (

    <>
        <div className="software" style={{textAlign:"justify"}}>

            <h4>Data Type</h4>

                <ul>
                  <li>Data types represent a kind of value which determines what operations can be performed on the data.</li>
                </ul><br />

               
            <h4><u>Types of Data types</u></h4>

                    <div>There are different types of data types in python:-</div>
                <ol>
                  <li>Numeric types</li>
                  <li>Text(String) types</li>
                  <li>Sequence types</li>
                  <li>Mapping types</li>
                  <li>Boolean types</li>
                  <li>Set types</li>
                </ol><br />

              <h5>1. Numeric Data Type</h5>
              <ul>
                <li>It represent the data having a numeric value.</li>
                    <div>There are three types of numeric/number value:-</div>

                    <ol type='i'>
                      <li><b>Integers(int):</b> Positive,Negative and whole numbers without fraction part.</li>
                      <div>eg. n=20,-10 etc.</div>

                      <li><b>Float(float):</b> A real number with a floating point denoted by decimal symbol or scientific notation.</li>
                      <div>eg. n=20.1,0.75 etc.</div>

                      <li><b>Complex number:</b> A real number with a real and imaginary components.</li>
                      <div>It represent by = x+yj ... here x,y are float and j = -1</div>

                    </ol>
              </ul><br />


              <h5>2. Text(String) Data Type</h5>
              <ul>
                  <li>A string data types is a Sequence of characters either as a literal constant or variable.</li>
                  <li>It is written in single,double or triple quotes.</li>
                  <li>eg. c="Hello".</li>
              </ul><br />


              <h5>3. Sequence Data Type</h5>
              <ul>
                <li>It is an ordered collection of similar or different data types.</li>
                  
                    <ol type='i'>
                      <li><b>List:</b>
                        <ul>
                          <li>It is an ordered collection of two or more items.</li>
                          <li>It can be a different types of values,put in square bracket.</li>
                          <li>eg- list = [12,13,14,15] , ["apple","banana"]</li>
                        </ul> 
                      </li>

                      <li><b>Tuple:</b>
                        <ul>
                          <li>It is an ordered collection of two or more items.</li>
                          <li>These items are put in parenthese (round bracket).</li>
                          <li>eg- list = [12,13,14,15] , ["apple","banana"]</li>
                        </ul> 
                      </li>

                    </ol>

              </ul>

              <b><u>Difference Between List and Tuple</u></b> 
                <br/>
                  <table className='soft_table'>
                      <thead>
                          <tr>
                              <th><center>List</center></th>
                              <th><center>Tuple</center></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Mutable.</td>
                              <td>Immutable.</td>
                          </tr>

                          <tr>
                              <td>Slower</td>
                              <td>Faster.</td>
                          </tr>

                          <tr>        
                              <td>defined within [ ].</td>
                              <td>defined within ( ).</td>
                          </tr>

                          <tr>
                              <td>change dynamically.</td>
                              <td>cannot change dynamically</td>
                          </tr>
                      </tbody>
                    </table><br />


              <h5>4. Mapping Data Type</h5>
              <ul>
                    <><b>Dictionary:</b></>
                      <li>It is an unordered collection of data in key:value pair form.</li>
                      <li>It is defined with curly brackets {`{ }`}.</li>
                      <li>It is used for a huge amount of data.</li>
                      <li>e.g. dict= {`{"amita":75,"seema":89}`}</li>
              </ul><br />



              <h5>5. Boolean Data Type</h5>
              <ul>
                    <li>Data with one of two bulit-in values = True or False.</li>
                    <li>It represent by 'bool'</li>
                    <li>e.g. b1 = True</li>
              </ul><br />


              <h5>6. Set Data Type</h5>
              <ul>
                    <li>It is an unordered collection of value of any type but with no. duplicate entry.</li>
                    <li>e.g. l= {`{1,2,3,4}`}</li>
              </ul><br />

              <h4>type() function</h4>
              <li>It is used to find the data type a certain</li>

              <Marquee>
                  <h2 style={{color:"red"}}>Left 2 page for coading</h2>
              </Marquee>

        </div>

    </>
  )
}

export default DataType;