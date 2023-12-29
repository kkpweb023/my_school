import React from 'react';


const EditingFormatting = () => {
  return (

    <>
        <div className="software" style={{textAlign:"justify"}}>

            <h3 style={{textDecorationLine:"underline",textDecorationStyle:"double"}}>Editing and Formatting a Slide</h3><br />

                <h5>Selecting New Design</h5>

                    <li><b>Step 1:</b> Click at slide design from format menu.</li>
                    <li><b>Step 2:</b> Click on load button.</li>
                    <li><b>Step 3:</b> Click on OK.</li><br />

                <h5>Changing background Colour and shading</h5>

                    <li><b>Step 1:</b> Select page option from format menu.</li>
                    <li><b>Step 2:</b> Page setup dialog box appears.</li>
                    <li><b>Step 3:</b> Choose a different background colour.</li><br />

                <h5>Changing background Colour and shading</h5>

                    <li><b>Step 1:</b> Select the desired text.</li>
                    <li><b>Step 2:</b> Select character option.</li>
                    <li><b>Step 3:</b> Select the desired font, font effects and position from different tabs.</li><br />

                <h5>Headers and Footers</h5> 

                    <p>View → Master → Slide Master</p>

                <h5>Slide Master</h5>

                    <li>The slide master is the design theme used for the slides within a presentation.</li><br />

                <h5>Master</h5>

                    <li>It is design theme applicable to multiple slides/notes/handouts.</li><br />

                
                <h5>Types of Master</h5>
                    <p>Three types of masters:-</p>
                    
                        <div>1.<b> for slides:</b></div>
                            <li>design theme applicable on slides.</li>
                            <li>To edit a slide master = View → Master → Slide Master</li><br />

                        <div>2.<b> for notes:</b></div>
                            <li>design theme applicable on notes.</li>
                            <li>To edit a slide master = View → Master → Notes Master</li><br />

                        <div>3.<b> for handouts:</b></div>
                            <li>design theme applicable on handouts.</li>
                            <li>To edit a slide master = Click on handouts tab.</li><br />


                <h4>Adding Illustration to Slides</h4>


                    <ol type='1'>

                        <li style={{fontSize:"20px",fontWeight:"bold"}}>Create a slide having clipart/picture</li>

                            <ul>
                                <li><b>Step 1:</b> Click on the New slide button.</li>
                                <li><b>Step 2:</b> Select slide with clipart.</li>
                                <li><b>Step 3:</b> Click on Titles and text placeholder.</li>
                                <li><b>Step 4:</b> Double click on the ClipArt icon to add clipArt.</li><br />
                            </ul>



                        <li style={{fontSize:"20px",fontWeight:"bold"}}>Inserting Picture</li>

                            <ul>
                                <li><b>Step 1:</b> Click on Insert → Picture → From file.</li>
                                <li><b>Step 2:</b> Select desired picture file.</li>
                                <li><b>Step 3:</b> Click on Open.</li><br />
                            </ul>



                        <li style={{fontSize:"20px",fontWeight:"bold"}}>Inserting a Watermark Picture</li>

                            <ul>
                                <li><b>Step 1:</b> Select the picture on the slide.</li>
                                <li><b>Step 2:</b> In the picture toolbar,from the graphics mode dropdown change,default to Watermark.</li>
                            </ul>




                    </ol>
                       

        </div>

    </>
  )
}

export default EditingFormatting;