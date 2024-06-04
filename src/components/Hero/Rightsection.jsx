import React from "react";
import frontimg from "../../assets/Hero/front_img.png"
import frontimg2 from "../../assets/Hero/ifront.png"
import frontimg3 from "../../assets/Hero/iPhone13.png"
import spray2 from '../../assets/spray2.png'




const Rightsection = () => {
  return (
    <>
      <div className="right_section">
      <section>
        <div className="right_img">
            <img src={frontimg} alt="" className="front" />
            <img src={frontimg3} alt="" className="front2" />
            <img src={frontimg2} alt="" className="front1" />
        <img src={spray2} alt="" className='spray3'/>


        </div>
      </section>
      </div>
   
    </>
  );
};

export default Rightsection;
