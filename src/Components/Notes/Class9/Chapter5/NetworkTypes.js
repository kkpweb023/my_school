import React from 'react'

const NetworkTypes = () => {
  return (

    <div className="software" style={{textAlign:"justify"}}>            
        
        <h4><u>Types of Netwoks</u></h4><br/>    

            <h5>There are various types of networks:</h5>

            <ol type='1'>
                <li>Local Area Networks(LAN)</li>
                <li>Metropolitan Area Networks(MAN)</li>
                <li>Wide Area Networks(WAN)</li>
            </ol>

            <h5>1. Local Area Netwok (LAN)</h5>

            <ul>
                <li>It is a group of interconnected computers within a small area (room,buliding,factory,office,hospital etc.)</li>
                <li>Two or more computers can be connected through wires or cables from LAN to share files,folders,printers etc.</li>
            </ul>

            <h5>Features</h5>
            <ul>
                <li>LAN can be form from different topology - Star,Ring,Tree etc.</li>
                <li>Data Transfer rate = 10 to 100 Mbps</li>
                <li>Connectivity Range = 1 Km to 10 Km</li>
            </ul>



            <h5>2. Metropolitan Area Netwok (MAN)</h5>

                <ul>
                    <li>A network that can be connected within a city.</li>
                </ul>

                <h5>Features</h5>
                <ul>
                    <li>Connecting a number of LANs into a larger network</li>
                    <li>Owed by orangization or individual.</li>
                    <li>Data transfer rate is lower than LAN.</li>
                    <li>Connectivity range = 5 to 50 KM.</li>
                    <li>Can be in form of Ethernet,ATM,Token-ring.</li>
                    <li>eg: bank with many branches in a city, Cable TV connection</li>
                </ul>



                <h5>3. Wide Area Netwok (WAN)</h5>

                  <ul>
                      <li>A wide area network is a collection of multiple LAN's,MAN's or other network that communicate with one other.</li>

                      <li>Communication mediums used by WAN are - PSTN (Public Switched Telephone Netwok) or Satellite links.</li>

                      <li>It covers over country or longer distance.</li>

                      <li>"Internet" is the biggest WAN in the world.</li>
                  </ul>

                  <h5>Features</h5>
                  <ul>
                      <li>It is worldwide network.</li>
                      <li>Contains multiples LAN's and MAN's.</li>
                      <li>Uses satellites and microwaves relay.</li>
                      <li>Connectivity range = 100KM to several 1000KM.</li>
                      <li>Data transfer rate depends upon the ISP provider.</li>
                  </ul>

          <h4><u>Internet</u></h4><br/> 

          <p>Internet = Inter + Network = Interconnected of network</p>

            <ul>
                <li>A internet is the global system of interconnected computer network that is accessed by the world wide web to use TCP/IP protocol to communicate b/w networks or devices.</li>
            </ul>


            <ul>
                <li>In education field.</li>
                <li>Scientific purpose.</li>
                <li>Medical field</li>
            </ul>

















    </div>
  )
}

export default NetworkTypes;