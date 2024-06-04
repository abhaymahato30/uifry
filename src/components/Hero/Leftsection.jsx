import React from 'react'
import arrowLogo from '../../assets/Hero/arrow.png'
import videobutton from'../../assets/Hero/video_logo.png'
import hero_bottom_img from '../../assets/Hero/hero_bottom_img.png'
import spray2 from '../../assets/spray2.png'
const Leftsection = () => {
  return (
   <>
   <div className="left_section">

      <section>
        <div className="hero_tittle mt-10">

            <p>Make The Best Financial Decisions</p>
        <img src={spray2} alt="" className='spray2'/>

        </div>
     </section>

     <section>
        <div className="subheading">
            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
     </section>

     {/* button section */}
     
     <section>
        <div className="hero_buttons">
            <button className='black_button'>Get started
            <img src={arrowLogo} alt="" />
            </button>
            <button className='video_button'>
                <div className="video_logo">
                <img src={videobutton} alt=""  className='videobutton'/>
                </div>
             
            </button>
           
        </div>
     </section>

     {/* image bottom */}
     <section>
        <div className="bottom_img">
            <img src={hero_bottom_img} alt="" />
        </div>
     </section>
     </div>
   </>
  )
}

export default Leftsection
