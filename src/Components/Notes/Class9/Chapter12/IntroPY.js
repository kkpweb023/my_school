import React from 'react';


const IntroPY = () => {
  return (

    <>
        <div className="software" style={{textAlign:"justify"}}>

            <h4>Python</h4>

                <li>Python is a general-purpose interpreter,interactive,object-oriented and high-level programming language with dynamic semantic.</li><br/>

            <h4><u>History of Python</u></h4>

                <ul>
                  <li>Python was introduced by <b>"Guido Van Rossum"</b> in 1989.</li>
                  <li>First version of python released in 1991 by python software foundation.</li>
                </ul><br />


            <h4><u>Features of Python</u></h4>

              <ul>
                <li>It supports GUI applications and has many modules,package and library for Artifical Intelligence(AI).</li>
                <li>It support interactive mode for interactive testing and debugging of short code.</li>
                <li>It is easy to learn,read and maintain.</li>
                <li>It has few keywords,simple structure and a clearly defined syntax.</li>
              </ul><br />

            <h4><u>Python is portable language,why?</u></h4>
                <li>It can run on a wide variety of hardware platforms and has the same interface on all platforms.</li><br />


            <h4><u>Python is a cross-platform programming language,why?</u></h4>
                <li>It can run on multiply platforms like Windows,macOS,Linux.</li>
                <li>It can be ported to the JAVA and .NET virtual machines.</li><br />


            <h4><u>Need/Application/Uses of Python</u></h4>
                <li>It allows to write programms in fewer lines of code.</li>
                <li>It can be used for developing web applications,data science,rapid application development etc.</li>
                <li>It has pre-built libraries and frameworks used for backend web development projects.</li>
                <li>It is used for machine learning.</li><br />


            
            <h4><u>Mode Of Python programms</u></h4>
                <div>There are two modes of python programmings:-</div>
                <ol>
                  <li>Interactive Mode.</li>
                  <li>Script Mode.</li>
                </ol>


            <h5>(a.)<u> Interactive Mode</u></h5>
                <ol>
                  <li>To type the command in front of Python command promp.</li>
                  <li>To type the command at a time and the python exeutes the given command and gives output.</li>
                  <li>This mode is very useful for testing code.</li>
                </ol>

            <h5>Python Shell</h5>
                <li>The interactive interpreter of python is also called Python Shell.</li><br />

            <h5>To Work in interactive mode</h5>
                <li>Start button → All programs → IDLE(python GUI)</li><br />


            <h5>(b.)<u> Script Mode</u></h5>
                <ol>
                  <li>To open a new file in the interactive mode and write the whole python program.</li>
                  <li>Now save the file with the .py extension and run the script.</li>
                  <li>Start button → All programs → IDLE(python GUI)</li>
                  <li>Click File → New in IDLE python shell</li>
                </ol>

          
            <h4><u>First Python Program in python</u></h4>

                <h5>Write a program To print "Hello World" ?</h5>

                <li>In interactive mode(python shell):</li>
                  <div>print("Hello World")</div>

                <li>In script mode: filename.py</li>
                  <div>print("Hello World")</div>
                  <div>Press F5 or click on Run ,Save the file with .py extension</div>
                  <div>Now output appears on Python Shell</div>

        </div>

    </>
  )
}

export default IntroPY;