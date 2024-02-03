import React from 'react';



const Conditional = () => {
  return (

    <>
        <div className="software" style={{textAlign:"justify"}}>

            <h4>Selection Statements(Conditional Statements)</h4>

                <ul>
                  <li>Decision making in Python is done through Selection Statements.</li>
                  <li>Selection Statements use multiple expressions which result in TRUE or FALSE.</li>
                </ul><br />

               
            <h4><u>Types of Selection Statements</u></h4>

                    <div>There are different types of selection statements in python:-</div>

              <h5>1. if statement</h5>
              <ul>
                <li>It consists of a boolean expression followed by one or more statements.</li>
              </ul>

              <div>Syntax:</div>
              <p>If expression: <br />
                 statement(s)
              </p>
              
              <br />


              <h5>1. if statement</h5>
              <ul>
                <li>It consists of a boolean expression followed by one or more statements.</li>
              </ul>

              <div>Syntax:</div>
              <p>If expression: <br />
                 statement(s)
              </p>



              
              <h5>2. if...else statement</h5>
              <ul>
                <li>An 'if statement' can be followed by an optional 'else statement' which executes when the boolean expression is FALSE.</li>
              </ul>

              <div>Syntax:</div>
              <p>If expression: <br />
                 statement(s)<br />
                 else:<br />
                 statement(s)
              </p>



                       
              <h5>3.nested if statement</h5>
              <ul>
                <li>When we use one 'if' or 'else' if statement inside another 'if' or 'else if' statement(s) is known as nested if statements.</li>
              </ul>

              <div>Syntax:</div>
              <p>If expression1: <br />
                 statement(s)<br />
                 elif expression2:<br />
                 statement(s)<br />
                 elif expression3:
                 statement(s)<br />
                 else:<br />
                 statement(s)
              </p>


   


        </div>

    </>
  )
}

export default Conditional;