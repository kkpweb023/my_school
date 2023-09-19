import React from 'react';

const NetworkMedia = () => {
  return (

    <>

        <div className="software" style={{textAlign:"justify"}}>

            <h1><u>Communication Channel
            (Network Media / Media /Transmission Media)</u></h1><br/>


            <h4>Communication Channel</h4>

                <li>The path through which data or message is transmitted from one place to another place via wired or wireless is called communication channel.</li><br/>

            <h5><u>Types of communication channel</u></h5><br/>    

            <h5>1. Guided Media (Wire Connectio or Bounded Transmission Media)</h5>

                <li>The data is transmitted from one place to another place in a narrow pathway using physical links(wire oe cable) is called guided media.</li>


            <h5>Features</h5>

                <li>Signal energy properties through wires.</li>
                <li>Mainly used for point-to-point line configuration.</li>
                <li>Signal propogates in form of voltage,current or photons.</li>



            <h5>Types of Guided Media</h5>

                <p>There are three types of guided media:-----</p>

                <ol type='a'>
                    <li>Twisted pair cable</li>
                    <li>Coaxial cable.</li>
                    <li>Optical Fibre cable.</li>
                </ol>

            <h6>a.Twisted pair cable</h6>

                <li>A pair of twisted conductors wires that reduces interference.</li>
                <li>A twisted pair includes two conductors(copper) each with its plastic insulation.</li>
                <h6>Features</h6>
                <ul>
                    <li>Limited distance = 100 meter</li>
                    <li>Used in = building, telephone networks.</li>
                    <li>Data rate = 4 Mbps.</li>
                    <li>Bandwidth = 3 MHz.</li>
                </ul>


            <h6>b.Coaxial cable</h6>

                <li>Coaxial cable is a types of cable that has center wire (inner conductor) for data transmission, is surrounded by conductive shielding for line to ground.</li>
                <li>A twisted pair includes two conductors(copper) each with its plastic insulation.</li>
                <h6>Features</h6>
                <ul>
                    <li>Limited distance = up to 500m</li>
                    <li>Used in = cable TV,telephone line and LAN.</li>
                    <li>Data rate = 500 Mbps.</li>
                    <li>Bandwidth = 300 MHz.</li>
                </ul>


                <h6>c. Optical Fibre cable</h6>

                    <li>It is uses electric signals or light to transmit data using total internal reflection.</li>

                    <h6>Features</h6>
                    <ul>
                        <li>Limited distance = around 100 Km</li>
                        <li>Used in = internet.</li>
                        <li>Data rate = 2 Gbps.</li>
                        <li>Bandwidth = 2 GHz.</li>
                    </ul>




            <h5>2. Unguided Media (Wireless Connection)</h5>

                    <li>Data is transmitted from one place to another place through electromagentic waves without using physical conductor.</li>

                <h5>Features</h5>

                <li>Signal energy propogates through air.</li>
                <li>Mainly used for broadcasting purpose.</li>
                <li>Signal propogates in form of electromagentic waves.</li><br/>



            <h5>Types of Unguided Media</h5>

                <p>There are two types of unguided media:-----</p>

                <ol type='a'>
                    <li>Long distance transmission media</li>
                    <li>Short distance transmission media.</li>
                </ol>

                <h5><u>a. Long distance transmission media</u></h5><br/>

                <p><u>i. Radiowaves or Radio Transmission</u></p>

                    <li>It is used for data transmission using radio waves.</li>
                    <li>Frequency = 10KHz to 1 GHz.</li>

                <h6>Features</h6>
                <ul>
                    <li>Used in multi-tasking communication</li>
                    <li>Can travel long and short distance.</li>
                    <li>Omni-directional</li>
                    <li>Frequency dependent.</li>
                    <li>Penetrate building easily.</li>
                </ul>


                <p><u>ii. Microwaves</u></p>

                    <li>Transmission of data by using microwaves having frequency 300 MHz to 300 GHz.</li>
                    <li>Microwaves always travel in straight line.</li><br/>


                <h5><u>b. Short distance transmission media</u></h5><br/>

                    <p><u>i. Infrared</u></p>

                        <li>It is used for data transmission using infrared.</li>
                        <li>Used on VCR,TV,remotes,wireless speakers,automative doors.</li><br/>

                    <p><u>ii. Laser(Light Amplification by Stimulated Emission of Radiation)</u></p>

                        <li>It uses laser transmission and photo-sensitive receiver at each end.</li>
                        <li>It is unidirectional.</li><br/>


                    <p><u>iii. Bluetooth</u></p>

                        <li>It is a short range RF technology that is operates at 2.4 GHz for transmission voice and data.</li>

                    <h6>Features:</h6>
                    <ul>
                        <li>Frequency band=2.4 GHz</li>
                        <li>Data rate = 1 Mbps.</li>
                        <li>Distance = within 32 feets (10 meter)</li>
                    </ul>


                    <p><u>iv. Wifi ( Wireless-Fidelity)</u></p>
                        <li>It uses radiowaves to provides wireless high-speed internet and network connections.</li>
                        <li>Wifi-technology uses wireless routers to connect to internet.</li>
                        <li>Frequency band = 2.4 GHz to 5 GHz</li>






        </div>

    </>
  )
}

export default NetworkMedia;