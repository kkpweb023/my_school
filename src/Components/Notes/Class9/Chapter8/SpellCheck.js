import React from 'react'

const SpellCheck = () => {
  return (

    <>

        <div className="software" style={{textAlign:"justify"}}>

            <h4>Spelling and grammar Check</h4>

                <li>Spelling and grammar checkers, computer programs that identify apparent misspellings and grammatical errors by reference to an incorporated dictionary and a list of rules for proper usage.</li><br/>

            <h5>Advantages of spell and grammar check</h5>

                    <ul type="square">
                        <li>Error Detection — It identifies spelling mistakes.</li>
                        <li>Professionalism — It enhances document credibility.</li>
                        <li>Time Savings — It quickly spots errors and saves review time.</li>
                        <li>Multilingual Support — It works in multiple languages.</li>
                        <li>Custom Dictionaries — Add terms related to our industry or subject.</li>
                        <li>Auto-Correction — It fixes common typing errors</li>
                        <li>Learning Tool — It improves vocabulary and skills.</li>
                    </ul>
                    
           
            <h5>Ways to check spelling and grammar</h5> 
                    <h6>Two ways to check spelling and grammar:</h6>

                <ol type="1">
                    <li>AutoSpellCheck</li>
                    <li>Manually Check</li>
                </ol>  

                <h5>1. AutoSpellCheck</h5> 

                    <li>It easily identifies misspelled words on the page as type the document.</li>

                    <li>Any word that misspell is immediately underlined with a red wavy line.</li><br/>

                <h5>Procedure to check spelling and grammar by Using AutoCorrect
                    /AutoFormat:</h5> 

                        <ul type="square">
                            <li>Choose Tools <b>AutoCorrect/AutoFormat</b> from the menu bar.</li>

                            <li>Click the <b>Replace tab</b> on the AutoCorrect dialog box.</li>

                            <li>In the <b>Replace field</b>, type the word or abbreviation that you want to replace while you type.</li>

                            <li>In the <b>With field</b>, type the replacement text that you want to use to replace the text in the Replace box.</li>

                            <li>Click the <b>OK</b> button.</li>
                        </ul> 
                
        



                <h5>2. Manually Check</h5> 

                    <li>It easily identifies misspelled words on the page as type the document.</li><br/>

                    <h5>Procedure to check spelling and grammar by Using Manually Check:</h5> 

                    <ul type="square">

                        <li>Select the text that to check.</li>

                        <li>Choose Tools <b>spelling and grammar</b> from the menu bar.</li>

                        <li>The SpellCheck dialog opens.</li>

                        <li>Click on change or click on Add for add the unknown word to a user-defined dictionary.</li>
                        
                    </ul> 
          
  
               
        </div>

    </>
  )
}

export default SpellCheck;