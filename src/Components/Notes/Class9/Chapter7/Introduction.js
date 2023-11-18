import React from 'react'

const Introduction = () => {
  return (

    <>

        <div className="software" style={{textAlign:"justify"}}>

            <h4>Word Processor</h4>

                <li>Word processor is a software which provides a set of tools for entering,editing,formatting and printing text.</li><br/>

            <h6>Eg:-</h6> 

            <ul type="square">
                <li>WordStar</li>
                <li>WordPerfect</li>
                <li>WordPad</li>
                <li>MS-word</li>
                <li>OpenOffice.org writer</li>
            </ul>   

           
            <h5>Features or Advantage of Word Processor</h5> 

                <ol type="i">
                    <li>Fast</li>
                    <li>Editing</li>
                    <li>Permanent storage</li>
                    <li>Formatting</li>
                    <li>Graphics</li>
                    <li>OLE(Object linking and embedding)</li>
                    <li>Spell check</li>
                    <li>Mail Merge</li>
                </ol>
                <br/>   

            <h5>Basic Components of document windows</h5>

            <ol type='i'>

                <li><b>Title Bar:</b> Loacted at the top of the screen.</li>

                <li><b>Menu Bar:</b> Loacted below the title bar.It has writer menu options</li>

                <li><b>Standard toolbar:</b> Frequently used commonds and utilities.</li>

                <li><b>Formatting toolbar:</b> Frequently used for formatting document.</li>
               
                <li><b>Ruler Bar:</b> Allows to formate the vertical alignment of text. It is used to get tab stops,margin and indents.
                </li>
               
                <li><b>Workarea/Textarea/Workspace:</b> 

                        <ul type="square">
                            <li>The area where write/type the text is the textarea.</li>

                            <li>The pointer becomes an I-beam,when it is within the textarea.</li>

                            <li>When the pointer moves it outside the textarea,it becomes an arrow.</li>
                    
                        </ul> 
                </li>
               
                <li><b>Scroll bar:</b> Used to view different area of the active windows.</li>
               
                <li><b>Status Bar:</b> Located the bottom. It display information - page numbers,the column,line number etc.</li>

            </ol>  


            <div><b>OpenOffice.org writer extension -</b> .odt</div>
  
               
        </div>

    </>
  )
}

export default Introduction;