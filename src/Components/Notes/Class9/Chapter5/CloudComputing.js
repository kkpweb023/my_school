import React from 'react';


const CloudComputing = () => {
  return (

    <div className="software" style={{textAlign:"justify"}}>            
        
        <h4><u>Cloud Computing</u></h4><br/>    

            <p>Cloud Computing is a technology that uses remote servers on the internet to store,manage and access data online rather than on local drives.</p>


            <h5>Uses of Cloud computing</h5>

                <p>Cloud computing can be used for:-</p>

            <ul>
                <li>Developing new applications and services</li>
                <li>Storage,back-up and recovery of data.</li>
                <li>Hosting blogs and website.</li>
                <li>Data analysis and delivering software on demand.</li>
            </ul>

            <h5>Characteristics of cloud computing</h5>
            <ul>
                <li>It allows sharing resources among users very fast.</li>
                <li>Multiple users and applications can work in less cost.</li>
                <li>It enables the users to access systems using a web browser their location or devices.</li>
            </ul>

            <h5>Cloud- Services Model</h5>

                <p>Three services models of cloud computing are : -</p>

                <center>
                    <img
                    src={
                        "https://res.cloudinary.com/dp2exjpd5/image/upload/v1695225104/Pic9_dgh1sd.jpg"
                    }
                    alt="software"
                    className="soft_image"
                    />
                </center>


                
            <h5>(i) InfraStructure as a Service(IaaS)</h5>
            <ul>
                <li>It provides fundamental resources such as - physical machine,virtual machines and virtual storage.</li>
                <li>Also known as Hardware as a Services(HaaS).</li>
            </ul>


            <h5>(ii) Platform as a Service(PaaS)</h5>
            <ul>
                <li>PaaS provides computational resources i.e. provides runtime enviroment which allows programmers(developers) to easily create,test,run and deploy web applications.</li>
            </ul>


            <h5>(iii) Software as a Service(SaaS)</h5>
            <ul>
                <li>It is software which is owned managed and delivered by one or more users.</li>

                <li>It allows to provide software application as a service to the end users.</li>
            </ul>


            <h5>Types of Cloud</h5>

                <p>Two types of cloud: - :-</p>

            <ol>
                <li>Public cloud</li>
                <li>Private cloud</li>
            </ol>


            <h5>1. Public cloud</h5>
            <ul>
                <li>Also refer to a "common cloud service".</li>
                <li>It is a computing services offered by third-party providers over public internet.</li>
                <li>It operate on the pay-as-per-use model.</li>
                <li>It provide: web-based email, online office applications, storage,testing etc.</li>
                <li>example: Microsoft Azure, google drive, Amazon cloud drive, iCloud etc.</li>
            </ul>


            <h5>2. Private cloud</h5>
            <ul>
                <li>Also know as "internal cloud or corporate cloud".</li>
                <li>It consists of computing resources used and owned by one business or organization.</li>
                <li>It provides a high level of security and privacy to data through firewalls and internal hosting.</li>
                <li>example: HP data center,Microsoft,Ubuntu etc.</li>
            </ul>


            <h5>Multimedia</h5>
                <p>It is a combination of many types of media in one application.</p>

            <h6>Major Five Components of Multimedia</h6>
            <ul>
                <li>Text = .text</li>
                <li>Graphics and Images = .jpg,.jpeg,.png etc</li>
                <li>Audio = .mp3,.wma,.wav etc</li>
                <li>Video = .avi,.wmv,.mp4 etc</li>
                <li>Animation = .fla,.gif,.mov, .svg etc</li>
            </ul>


            
            <h5>Social Networking</h5>

            <ul>
                <li>It is the use of internet based social media programs to make connections with friends,family, classmates,customers and clients.</li>
                <li>It includes:- blogs,microblogs,forums,social networks,wikis chat-room etc.</li>
                <li>eg:Instagram,Facebook,<br/>LinkdIn,Myspace,
                Twitter,<br/>Sanpchat,Youtube,Wordpress etc.</li>
            </ul>







    </div>
  )
}

export default CloudComputing;