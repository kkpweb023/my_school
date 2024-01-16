import React from 'react';
import Chart from '../../../../Images/ChartParts.jpg';

const Charts = () => {
  return (

    <>

        <div className="software" style={{textAlign:"justify"}}>

            <h4>Charts</h4>

                <li>Charts(Graphs) are the pictorial representation of worksheet data.</li><br/>

            <h4><u>Components of Chart</u></h4><br />

                <div>Page No. 289 fig 11.19(a)</div>
                <img src={Chart} alt='enter_img' style={{width:"100%"}}/><br /><br />

                <h5>The different components of a chart are as follows:-</h5>

                <ol>

                  <li><b>X-axis — </b> This is the horizontal axis known as category.</li>
                  
                  <li><b>Y-axis —</b> This is the vertical axis known as value axis.</li>

                  <li><b>Data series —</b> This is the set of values we want to plot in the chart.</li>

                  <li><b>Chart area —</b> This is the total region surrounding the chart.</li>

                  <li><b>Plot area —</b> This is the area of chart in which our data is plotted. The plot area is bounded by axes in a 2-D chart.</li>

                  <li><b>Chart Title —</b> This is the descriptive text aimed at helping user identify the chart.</li>

                  <li><b>Axes titles —</b> These are the titles given to three axes i.e., X, Y and Z axes.</li>

                  <li><b>Legend —</b> The legends help us identify various plotted data series. Each series can be uniquely identified by assigning a unique colour or pattern. This unique colour or pattern which identifies a data series, is known as legend.</li>

                  <li><b>Gridlines —</b> These are the horizontal and vertical lines in the plot area. The gridlines are inserted in the chart to enhance its readability.</li>

                  <li><b>Data label —</b> This is a label that provides additional information about a data marker, which represents a single data item or value coming from a worksheet cell.</li>

                </ol>


              <li><b>Embedded chart —</b> A chart object placed inside a worksheet along with other data is known as an embedded chart.</li>

              <li><b>Chart sheet —</b> A chart sheet is a sheet having only a chart and no other data.</li>

        </div>

    </>
  )
}

export default Charts;