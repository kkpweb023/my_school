import React from 'react'

const WordProTerminology = () => {
  return (

    <>

        <div className="software" style={{textAlign:"justify"}}>

            <h4>1. <u>WYSIWYG</u></h4>

                <li>It stands for "What You See Is What You Get".</li><br/>

                <h5><u>Writer is called a WYSIWYG program</u></h5>

                <li>Ooo writer is called a WYSIWYG program because as the screen shows exactly how the document will look when print it out.</li><br/>
 
            <h4>2. <u>Non-Printing Charaters</u></h4>

                <li>Non-Printing Charaters are those special charaters which do not appear on paper when print the document.</li>

                <li>Shortcut key for viewing/toggling non-printing charaters -<b> ctrl + F10 </b></li><br/>

           
                <h5><u>Different types of non-Printing charaters with their marks</u></h5> 

                <ol type="i">
                    <li>Enter Key (¶) (show/Hide)</li>
                    <li>Space bar key (.)</li>
                    <li>Tab key (→)</li>
                </ol>
                
                <h6>(i) <u>Enter Key (¶) (show/Hide)</u></h6>

                <li>It need to press because -</li>
                    <div style={{marginLeft:"40px"}}>
                        End a short line.<br/>
                        End a paragraph.<br/>
                        Create a blank line.
                    </div><br/>

                    <h6>(ii) <u>Space bar key </u>(.)</h6>

                        <li>The space bar, also called the 'spacebar' or 'space key', is one of the most commonly used keys on a computer keyboard. It is used to put a space into something being typed.</li>
                        <br/>

                    <h6>(iii) <u>Tab key </u>(→)</h6>

                        <li>The Tab key is a key on your keyboard that is used to move the cursor to the next field or cell.</li><br/>
                        

            <h4>3. <u>Margin</u></h4>

                <li>The distance between the text and the edge of the paper is called Margin.</li><br/>

                <h5><u>Types of margin</u></h5>

                <h6 style={{marginLeft:"20px"}}><u>5-different types of margin</u></h6> 

                
                <center>
                    <img
                    src={
                        "https://res.cloudinary.com/dp2exjpd5/image/upload/v1700325686/Software/Pic10_zka8kd.jpg"
                    }
                    alt="software"
                    className="soft_image"
                    />
                </center>

                <ul>
                    <li><b>Left Margin:</b> The distance between the text and the left edge of the paper.</li>
                    <li><b>Right Margin:</b> The distance between the text and the right edge of the paper.</li>
                    <li><b>Top Margin:</b> The distance between the text and the top edge of the paper.</li>
                    <li><b>Bottom Margin:</b> The distance between the text and the bottom edge of the paper.</li>
                    <li><b>Gutter Margin:</b> It is the extra space inside margin to ease up binding.</li>
                </ul>

                <h5><u>Way to set a margin in OOo writer</u></h5>

                    <h6 style={{marginLeft:"20px"}}><u>Two way to set a margin:-</u></h6> 

                    <ol type="i">
                        <li>For setting margins through Ruler Bars.</li>
                        <li>For setting margins through Page Style dialog box.</li>
                    </ol>
           
            <h4>4. <u>Word Wrap</u></h4>

                <li>Placement of the text going past the right margin to the next line without pressing enter key is called word wrap.</li><br/>
               
            <h4>5. <u>Indentation</u></h4>

                <li>The distance between the text boundaries and page margin is called indent and the process of provinding it is called indentation.</li><br/>

                <h5><u>Types of Indent</u></h5>

                <h6 style={{marginLeft:"20px"}}>There are three types of indents:</h6> 

                
                    <ol type="i">
                        <li>Positive Indent.</li>
                        <li>Negative Indent.</li>
                        <li>Hanging Indent.</li>
                    </ol>

                    <h6>(i) <u>Positive Indent </u></h6>

                    <li>Text area is always narrower than the space between margin.</li>
                    <li>Text is little inword from the margin.</li>

                    
                    <h6>(ii) <u>Negative Indent </u></h6>

                    <li>The text to extend into the margin.</li>
                    <li>Text is little onword from the margin.</li>

                    <h6>(iii) <u>Hanging Indent </u></h6>

                    <li>Hanging indent is the indentation of the part of paragraph/section.</li>
             
                    <li>It is used for glossory terms,resumes,bulleted etc.</li><br/>   

            <h4>   <u>Paragraph Indentation</u></h4>

                    <li>It affects the spacing within paragraphs,helping to organize and structure the text.</li>
                    <li>It is used to offset selected paragraphs from other text in the document.</li><br/>





                <br/>


        </div>

    </>
  )
}

export default WordProTerminology;