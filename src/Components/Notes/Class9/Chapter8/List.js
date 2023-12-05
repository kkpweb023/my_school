import React from 'react'

const List = () => {
  return (

    <>

        <div className="software" style={{textAlign:"justify"}}>

            <h4>List</h4>

                <li>List is a way to group together related piece of information, so as to make information more organized and easier to read.</li><br/>

            <h5>Uses of list</h5>

                    <ul type="square">
                        <li>It used for outlining, presenting steps, summarizing and information.</li>
                        <li>It enhance readability, structure and organization.</li>
                        <li>It improve content flow, emphasize key points, simplify complex information, and aid comprehension in various contexts.</li>
                    </ul>
                    
           
            <h5>Types of list</h5> 
                    <h6>Two types of lists in Writer:</h6>

                <ol type="1">
                    <li>Bulleted Lists</li>
                    <li>Numbered Lists</li>
                </ol>  

                <h5>1. Bulleted Lists</h5> 

                    <li>It identify key items or denote significance when order does not matter.</li>

                    <li>It is a series of items with a heading broken up by dotted points.</li><br/>



                <h5>2. Number Lists</h5> 

                    <li>A list whose elements must appear in a particular order.</li>

                    <li>It is a series of items with a heading broken up by dotted points.</li><br/>



          
                <h5>Procedure to create a bulleted list or Number list:</h5>

                        <ul type="square">
                            <li>Click the Bulleted List or Number list button on the Formatting toolbar.</li>

                            <li>Type the first entry and press ENTER.</li>

                            <li>The second bullet or number will automatically display on the next line.</li>

                            <li>When the list is complete, press Enter twice to turn off the bulletting or  numbering function.</li>
                        </ul> 
                
                <h5>A situation where bulleted lists are more useful than numbered lists</h5>

                    <li>Bulleted lists are ideal for showcasing a variety of related ideas or options that don't require a specific order. For example, a bulleted list is more suitable for listing features of a product, highlighting advantages of a service, or presenting creative brainstorming points, as they lack a strict sequence.</li>

          
  
               
        </div>

    </>
  )
}

export default List;