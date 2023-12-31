import React from 'react';


const SlideSorter = () => {
  return (

    <>
        <div className="software" style={{textAlign:"justify"}}>

            <h3 style={{textDecorationLine:"underline",textDecorationStyle:"double"}}>Slide Sorter View</h3><br />

                <li>It displays rows of thumb main views of slides.</li>
       
                <li>In Slide Sorter View,</li>

                            <ul style={{marginLeft:"25px"}}>
                                <li>rearrange slides.</li>
                                <li>delete slides.</li>
                                <li>duplicate slides.</li>
                            </ul>
                  

                <h5>Slide sorter view useful for viewing for a presentation</h5>

                    <p>Slide sorter view useful for viewing a presentation when we perform the following actions:</p>

                    <ol>
                        <li>Reordering Slides.</li>
                        <li>Transition Management.</li>
                        <li>Consistency check.</li>
                        <li>Timing Estimate.</li>
                        <li>Copying/Pasting.</li>
                    </ol>
  

                <h5>Three Panes of Normal view</h5> 


                    <ol>
                        <li>
                            <b>Slide Pane:</b> Displays the Selected slide's content allowing editing of text,images etc.
                        </li>

                        <li>
                            <b>Slide Sorter Pane:</b> It offers a thumbnail grid of all slides for easy recording,managing transitions and reviewing the presentation's structure.
                        </li>

                        <li>
                            <b>Notes Pane:</b> It provides space to add speaker notes or additional information related to the selected slide,aiding in presentation.
                        </li>

                    </ol>
        
                <h5>Transitions</h5>
                    <li>Transitions are special effects that introduce a slide in a slide show.</li><br />

                <h5>Animations</h5>
                    <li>Animations are special sound or visual effects added to the and other objects in slides.</li><br />

        </div>

    </>
  )
}

export default SlideSorter;