import React from 'react'
import './feature.css'
import bfs1 from '../../assets/Feature/bfs1.png'
import spray2 from '../../assets/spray2.png'
import bell_icon from '../../assets/Feature/bell_icon.png'
import bfs2 from '../../assets/Feature/bfs2.png'
import star_icon from '../../assets/Feature/star_icon.png'



const FeatureSection = () => {
  return (
  <>
  <div className="padding_xaxis">
  {/* Big feature section */}
 <div className="big_feature_section">
    <div className="feature_section_left">
        <div className="feature_section_img">
            <img src={bfs1} alt="" />
            <img src={spray2} alt="" className='spray5'/>

        </div>
    </div>
    <div className="feature_section_right">
        <div className="sub_heading">features</div>
        <div className="heading">uifry premium</div>
        <div className="description_Container">
            <div className="description_Container_heading">budgeting intervals</div>
            <div className="description_Container_desc">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
            
        </div>
        <div className="description_Container">
            <div className="description_Container_heading">budgeting intervals</div>
            <div className="description_Container_desc">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
            
        </div>
        <div className="description_Container">
            <div className="description_Container_heading">budgeting intervals</div>
            <div className="description_Container_desc">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
            
        </div>
    </div>
</div> 

  {/* Big feature section 2 */}
  <div className="big_feature_section">

    <div className="feature_section_right">
        <div className="sub_heading">Advantage</div>
        <div className="heading">Why Choose uifry</div>
        <div className="description_Container">
            <div className="description_Container_heading">
                <img src={bell_icon} alt="" />

            clever notifications
            </div>
            <div className="description_Container_desc">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
            
        </div>
   
    </div>
    <div className="feature_section_left">
        <div className="feature_section_img">
            <img src={bfs2} alt="" />
            <img src={spray2} alt="" className='spray5'/>

        </div>
    </div>
</div> 

  {/* Big feature section 3 */}
  <div className="big_feature_section">
    <div className="feature_section_left">
        <div className="feature_section_img">
            <img src={bfs1} alt="" />
            <img src={spray2} alt="" className='spray5'/>

        </div>
    </div>
    <div className="feature_section_right">
        <div className="description_Container">
            <div className="description_Container_heading"> <img src={star_icon} alt="" /> Fully Customizable </div>
            <div className="description_Container_desc">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
            
        </div>
 
    </div>
</div> 


 
</div>
  </>
  )
}

export default FeatureSection
