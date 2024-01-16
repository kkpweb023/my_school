import React from 'react'

const TypesCharts = () => {
  return (

    <>

        <div className="software" style={{textAlign:"justify"}}>

            <h4>Types of Charts</h4>

                <ol>
                    <li><b>Area Chart - </b>
                             It emphasizes the manitude of change over time.
                    </li>

                    <li><b>Column Chart - </b> 
                    
                        <ul> 
                            <li>It shows data changes over a period of time or illustrates comparisons among items.</li>

                            <li>The <b>stacked column charts</b> shows the relationship of individual items to the whole.</li>
                        </ul>
                    </li>

                    <li><b>Bar Chart -</b> It illustrates comparisons among individual items. 
                        <h6>Properties of bar chart:</h6>
                        <ul> 
                            <li>Also called histogram.</li>
                            <li>Shows comparisons.</li>
                            <li>Multiple comparisons are possible.</li>
                            <li>Numerical dimension are shown in bars of varying length.</li>
                        </ul>
                    </li>


                    <li><b>Line Chart -</b> 
                        <ul>
                            <li>It shows trends in data at equal intervals.</li>
                            <li>It emphasizes upon time flow and rate of change,rather than amount of change.</li>
                            <li>It useful for depicting the change in a value over a period of time.</li>
                        </ul>
                         
                        <h6>Properties of bar chart:</h6>
                        <ul> 
                            <li>Also called a frequency polygon.</li>
                            <li>Shows comparisons.</li>
                            <li>Clarifies and communication relationship through time.</li>
                            <li>Don't use more than one comparisons for each visual.</li>
                        </ul>
                    </li>


                    <li><b>Pie Chart -</b> 
                        <ul>
                            <li>It shows the proportional size of items that makes up a data series to the sum of the items.</li>
                            <li>It shows only one data series and is useful to emphasize a significant elements.</li>
                            <li>It highlight how each value in data series relates proportionally to the whole.</li>
                        </ul>
                         
                        <h6>Properties of pie chart:</h6>
                        <ul> 
                            <li>Division of the whole or parts of the whole.</li>
                            <li>Easy to grasp.</li>
                            <li>Lay out largest portions first clock-wise postion.</li>
                            <li>Label larger portions in the circle,smaller outside with connecting lines.</li>
                            <li>Don't make the proportions too small.</li>
                        </ul>
                    </li>


                    <li><b>Donut Chart -</b> 
                        <ul>
                            <li>It shows the proportional nature of data but want to include more than one data series.</li>

                            <li>A donut chart can have extra layers.</li>

                        </ul>
                         
                        <h6>Properties of donut chart:</h6>
                        <ul> 
                            <li>Represents value data as percentage of the whole.</li>
                            <li>Categories are represented by individual slices.</li>
                        </ul>
                    </li>


                    <li><b>XY(Scatter) Chart -</b> 
                        <ul>
                            <li>It shows the relationship among the numeric values in serveral data series  or plots two groups of numbers as one series XY coordinates.</li>

                            <li>This chart shows uneven intervals or cluster - of data and is commonly used for scientific data.</li>

                        </ul>
                         
                        <h6>Properties of XY(Scatter) chart:</h6>
                        <ul> 
                            <li>Displays series as a set of points.</li>
                            <li>Values are represented by th postion of the point in chart space.</li>
                        </ul>
                    </li>
           

                    <li><b>Net Chart -</b> 
                        <ul>
                            <li>It displays data values as points connected by some lines,in a grid net that resembles a spider net or a radar tube displays.</li>
                        </ul>
                         
                        <h6>Properties of Net chart:</h6>
                        <ul> 
                            <li>Represents data values as connected points in form of a net.</li>
                            <li>Different radaial for each row of data.</li>
                        </ul>
                    </li>
           

                    <li><b>Stock Chart -</b> 
                        <ul>
                            <li>It illustrates the market trend given by opening price,bottom price,top price and closing price.</li>
                        </ul>
                         
                        <h6>Properties of Stock chart:</h6>
                        <ul> 
                            <li>Displays series a set of lines with markers for high,low,close and open values.</li>
                            <li>Values are represented by the height of the marker as measured.</li>
                        </ul>
                    </li>


                    <li><b>Column and Line Chart Chart -</b> 
                        <ul>
                            <li>It is a combination of a Column chart with a Line chart.</li>
                        </ul>
                    </li>

                     
                </ol>

        </div>

    </>
  )
}

export default TypesCharts;