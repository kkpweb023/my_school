import React from 'react'

const FindReplace = () => {
  return (

    <>

        <div className="software" style={{textAlign:"justify"}}>

            <h4><u>Find and Replace</u></h4>

            <h5>Find Text</h5> 
                    <h6>The sequence for finding text is:</h6>

                        <ul type="square">
                            <li>On the <b>Edit</b> menu,click <b>Find & Replace </b>.</li>

                            <li>In <b> search for</b> box,enter the text.</li>

                            <li>Click <b> Find button </b>.</li>

                        </ul> 

                    
            <h5>Replace Text</h5> 
                <h6>The sequence for finding text is:</h6>

                <ul type="square">
                    <li>On the <b>Edit</b> menu,click <b>Find & Replace</b>.</li>

                    <li>In the <b>Replace with</b> box,enter the replacement text.</li>

                    <li>Click either of the <b>Find,Replace, or Replace All</b> buttons.</li>

                </ul> 
                       
        </div>

    </>
  )
}

export default FindReplace;