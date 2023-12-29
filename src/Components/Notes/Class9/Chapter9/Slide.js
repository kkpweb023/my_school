import React from 'react';
import Layout from '../../../../Images/pic12.jpg';

const Slide = () => {
  return (

    <>

        <div className="software" style={{textAlign:"justify"}}>

            <h4>Slide</h4>

                <li>A slide is electronic page in a presentation.</li>
                <li>It contains various types of elements like Text Box, Images, Font Gallery etc.</li><br/>

            <h4>Basic Elements of a Slide</h4>

                <ol>
                    <li><b>Title - </b> It is a descriptive heading identifying a slide.</li>

                    <li><b>Subtitle - </b> It is a descriptive message or brief description of the slide data.</li>

                    <li><b>Drawing Objects- </b>It includes Autoshapes, Curves, Lines, WordArt etc.</li>

                    <li><b>Clipart and Pictures - </b> OpenOffice suit comes with its own set of pictures called ClipArt.</li>
                       
                </ol>

            <h4>Slide Components Used for Reference</h4>

                <div style={{marginLeft:"40px"}}> Components of slide used for reference purpose:-</div>


                <ol>
                    <li><b>Handouts - </b>
                        These are compressed versions of the slides in the presentation printed for the audience.
                    </li>

                    <li><b>Speaker's Notes - </b> 
                        It is small image of the slide along with some explanatory notes.
                    </li>

                    <li><b>Outlines - </b>
                        A summarised  version of slides that display only titles and main text.                    
                    </li>
                       
                </ol>


            <h4>Creating New Presentation</h4>

                <div style={{marginLeft:"40px"}}> Create a new presentation in several ways:-</div>

                <ol>
                    <li>Empty presentation.</li>
                    <li>From Template</li>                  
                </ol>
                <div>For new presentation = File → New → Presentation</div>
                <br />



            <h4>Design Template</h4>

                    <li>A design template is a predefined file that contains predefined elements-styles for presentation like font & bullet sizes,placeholders and position,background & colour scheme and slide master.</li><br />


            <h4>Different Views of a Slide (Impress Views)(Slide View Button)</h4>
                <div>There are six different ways to view presentation:-</div>

                <ol>
                    <li><b>Normal - </b> Displays three panes that show the slide pane,the slide and a Tasks pane.</li>

                    <li><b>Outlines - </b> Displays only the text of the presentation in outline form.</li>

                    <li><b>Slide(Hangout) - </b>It shows just the slide and its contents.</li>

                    <li><b>Slide Sorter - </b> Displays entire set of slides on-screen.</li>

                    <li><b>Slide Show - </b> Displays the presentation on slide at a time in a sequence.</li>

                    <li><b>Notes - </b> Enter and edit speaker's notes for the presenter.</li>
                       
                </ol>


                
            <h5>Adding New Slides</h5>

                <li><b>Step 1:</b> Click Insert → Slide Command.</li>
                <li><b>Step 2:</b> Right → Select Slide → New Slide.</li>
                <li><b>Step 3:</b> Click the slide icon in the presentation toolbar.</li><br />



            <h4>Slide Layouts</h4>

                <li>It is an organized set of elements,using which new slide can be created.</li><br />

                <h5>Different types of slide layouts:-</h5>
                <img src={Layout} alt='enter_img' style={{width:"100%"}}/>


        </div>

    </>
  )
}

export default Slide;