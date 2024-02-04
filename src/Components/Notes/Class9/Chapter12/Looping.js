import React from 'react';
import Marquee from 'react-fast-marquee';



const Looping = () => {
  return (

    <>
        <div className="software" style={{textAlign:"justify"}}>

            <h4>Looping</h4>

                <ul>
                  <li>Looping means iteration or doing the task again and again till condition is true.</li>
                </ul>

            <h4>Loop Statement</h4>

                <ul>
                  <li>It allows to execute a statement or group of statements multiple times.</li>
                </ul><br />

               
            <h4><u>Types of loops</u></h4>

                  <div>There are different types of loops in python:-</div>
                <ol>
                  <li>While loop</li>
                  <li>for loop</li>
                </ol><br />


                  <h5>1. While loop</h5>
                      <ul>
                      <li>It is used to iterate/repeat over a block of code as long as the test expression(condition) is true.</li>
                      </ul>

                      <div>Syntax:</div>
                      <p>while expression: <br />
                      statement(s)
                      </p><br />

                  <Marquee>
                      <h2 style={{color:"red"}}>Left half page for flow chart</h2>
                  </Marquee>



                      <h5>2. For loop</h5>
                      <ul>
                      <li>It is used to make a loop over a sequence(list,tuple,string) or other looping objects. Looping over sequence is called traversal.</li>
                      </ul>

                      <div>Syntax:</div>
                      <p>for val in sequence: <br />
                      statement(s)<br />
                      </p>


                  <Marquee>
                      <h2 style={{color:"red"}}>Left half page for flow chart</h2>
                  </Marquee>

        </div>

    </>
  )
}

export default Looping;