import React from 'react';




const List = () => {
  return (

    <>
        <div className="software" style={{textAlign:"justify"}}>

            <h4>List</h4>

                <ul>
                  <li>It is an ordered sequence which is mutable and made up of one or more elements of same or different type.</li>
                </ul>


            <h4><u>List Manipulation</u></h4>

                  <div>There are different types of List Manipulation in python:-</div>
       
                  <h5>1. Concatenation list</h5>
                      <ul>
                      <li>It is used to join two or more list using symbol +.</li>
                      </ul>

                      <div>Example:</div>
                      <div>
                        l1 = [1,3,5,7,9] <br />
                        l2 = [2,4,6,8,10] <br />
                        print(l1 + l2)<br />
                        <li>o/p: [1,2,3,4,5,6,7,8,9,10]</li>
                      </div><br />



                  <h5>2. Repetition list</h5>
                      <ul>
                      <li>It allows us to replicate the contents of alist using repetition operator(*).</li>
                      </ul>

                      <div>Example:</div>
                      <div>
                        l1 = [1,3,5,7] <br />
                        print(l1*3)<br />
                        <li>o/p: [1,3,5,7,1,3,5,7,1,3,5,7]</li>
                      </div><br />



                  <h5>3. Membership list</h5>
                      <ul>
                      <li>It checks if the element is present in the list and returns True,else return false.</li>
                      </ul>

                      <div>Example:</div>
                      <div>
                        l1 = ["W","H","S"] <br />
                        print(W in l1)<br />
                        <li>o/p: true</li>
                      </div><br />


                  <h5>4. Slicing</h5>
                      <ul>
                      <li>It checks if the element is present in the list and returns True,else return false.</li>
                      </ul>

                      <div>Example:</div>
                      <div>
                        l1 = ["W","H","S","T","F","C"] <br />
                        print(l1[3:5])<br />
                        <li>o/p: ["T","F"]</li><br />

                        print(l1[: :2])<br />
                        <li>o/p: ["W","S","F"]</li><br />

                        print(l1[: :-1])<br />
                        <li>o/p: ["C","F","T","S","H","W"]</li><br />

                        
                        print(l1[:5])<br />
                        <li>o/p: ["W","H","S","T","F"]</li>
                      </div><br />





        </div>

    </>
  )
}

export default List;