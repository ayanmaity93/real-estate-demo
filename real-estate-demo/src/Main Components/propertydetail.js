import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';

function PropertyDetail () {

    const [isDetails,setDetails] = useState('');

    useEffect(() => {
        fetch("propertiesDetail.json",{
        method: "GET"})
        .then(res => res.json())
        .then(
            (result) => {
                let propertyImages = result.propertiesList.propertyImages.map((item)=>
                    <div className="single_property">
                        <img src={require("./../assets/images/banner/"+item.imagePath)} alt="" />
                    </div>
                );
                let desc = result.propertiesList.fullDesc.map((item)=>
                    <p>{item.text} </p>
                );
                result.propertyImages = propertyImages;
                result.desc = desc;
                setDetails(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error);
            }
        )
    },[]);


    if(!isDetails){
        return(
            <p>Details Loading...</p>
        );
    } else {
        return(
            <>
                <div className="property_details_banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-8 col-lg-6">
                                <div className="comfortable_apartment">
                                    <h4>{isDetails.propertiesList.name}</h4>
                                    <p> <img src={require("./../assets/images/svg_icon/location.svg")} alt="" /> {isDetails.propertiesList.address}</p>
                                    <div className="quality_quantity d-flex">
                                        <div className="single_quantity">
                                            <img src={require("./../assets/images/svg_icon/color_box.svg")} alt="" />
                                            <span>{isDetails.propertiesList.size}</span>
                                        </div>
                                        <div className="single_quantity">
                                            <img src={require("./../assets/images/svg_icon/color_bed.svg")} alt="" />
                                            <span>{isDetails.propertiesList.propertyBeds}</span>
                                        </div>
                                        <div className="single_quantity">
                                            <img src={require("./../assets/images/svg_icon/color_bath.svg")} alt="" />
                                            <span>{isDetails.propertiesList.propertyBath}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-4 col-lg-6">
                                <div className="prise_quantity">
                                    <h4>{isDetails.propertiesList.fee}</h4>
                                    <a href="">{isDetails.propertiesList.contact}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="property_details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="property_banner">
                                    <div className="property_banner_active">
                                        <Carousel autoPlay={true} showStatus={false} showIndicators={false} infiniteLoop={true} useKeyboardArrows={true} stopOnHover={true}>
                                            {isDetails.propertyImages}
                                        </Carousel> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="details_info">
                                    <h4>Description</h4>
                                    {isDetails.desc}
                                </div>
                                <div className="contact_field">
                                    <h3>Contact Us</h3>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6">
                                                <input type="text" placeholder="Your Name" />
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                            <div className="col-xl-12">
                                                <input type="number" placeholder="Phone no." />
                                            </div>
                                            <div className="col-xl-12">
                                            <textarea name="" id="" cols="30" rows="10" placeholder="Message" ></textarea>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="send_btn">
                                                    <button type="submit" className="send_btn">Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

}

export default PropertyDetail;