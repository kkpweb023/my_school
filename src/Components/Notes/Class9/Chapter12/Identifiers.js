import React from 'react';
import Marquee from 'react-fast-marquee';


const Identifiers = () => {
  return (

    <>
        <div className="software" style={{textAlign:"justify"}}>

            <h4>Identifiers</h4>
                <li>It is a name used to identify a variables,function,class,module or other object.</li><br/>

            <h4>Variables</h4>

                <ul>
                  <li>It is a name given to a memory location that is used to hold a value.</li>
                  <li>Python is a case-sensitive programming have three different variables like age,Age and AGE.</li>
                </ul>

            <h4><u>Naming Conventions for Python Identifiers</u></h4>

              <ul>
                <li>It must be start with a letter or the underscore character.</li>
                <li>It can be a combination of letters in lowecase(a to z),upercase(A to Z),digits(0-9) or and underscore.</li>
                <li>It can not start with a digit or number.</li>
                <li>Keywords cannot be used as identifiers.</li>
                <li>Cannot use special symbols like !,@,#,$,% etc.</li>
                <li>It can be of any length.</li>
              </ul>

            <h4><u>Reserved Words(Keywords)</u></h4>
                <li>Keywords are pre-defined words and syntax for the interpreter in language.</li><br />

            <h5><u>Properties of Keywords</u></h5>
                <ul>
                  <li>It cannot be used as identifiers.</li>
                  <li>It contain lower-case letters only.</li>
                </ul>  

            <h5><u>To view the list of keywords by using commonds:-</u></h5>
                <ul>
                  <li>import keyword<br />keyword.kwlist</li>
                  <li>help(keywords)</li>
                </ul> 

            <h5><u>Some keywords:-</u></h5>
                <ul>
                  <li>'False', 'as', 'True','class', 'del', 'elif', 'else', 'for', 'if', 'import', 'while'...etc</li>
                </ul> 


            <h4><u>Multi-Line Statements</u></h4>

                <li>Python allows use of the line continuation character(\) to denote that the line should continue.</li>
                    <div>e.g.   count = "the \<br /> no.\ <br /> of \ <br /> times"</div>
                <li>Statement contained with the [].{} ot () brackets do not need any line continuation character.</li>
                    <div>e.g.   count = ['the'.'no.','of','times']</div><br />
                
            <h4><u>Quotation in Python</u></h4>
                <ul>
                  <li>Python accepts single(' '),double(" ") and triple("' "') quotes to denotes <b>string</b> literals</li>
                  <li>The triple("' "') quotes are used to continue the string across multiple lines.</li>
                </ul>


            <h4><u>Comments in Python</u></h4>
                <ul>
                  <li>Hash sign(#) is used to begin a commond.</li>
                  <li>After #,interpreter ignores all the character.</li>
                </ul>


            <h4><u>Escape Character in Python</u></h4>
                <ul>
                  <li>These are special character used to represent non-printable or special character within string.</li>
                  <li>It is used in representing certain whitespace characters.</li>

                  <div>
                     "\t" : tab <br />
                     "\n" : new line <br />
                     "\r" : carriage return
                  </div>
                </ul>


            <h4><u>Assigning Values to Variables</u></h4>
                <ul>
                  <li>Equal Sign (=) is used to assign values to variables.</li>
                  <li>End =" " is used when space after the end of the Statement instead of a new line character.</li>
                </ul>

            <div>
                <b>Q.1. Write a program to print any three variables on the same line using standard and end =" " method?</b>
            </div>

              <Marquee>
                  <h1 style={{color:"red"}}>Left 10 lines in page for coading</h1>
              </Marquee>
          
        </div>

    </>
  )
}

export default Identifiers;