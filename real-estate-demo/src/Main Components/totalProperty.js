import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';


function TotalProperties () {

    const [isTotalCount,setTotalCount] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/totalproperty.json",{
          method: "GET"})
        .then(res => res.json())
        .then(
            (result) => {
                setTotalCount(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error);
            }
        )
      },[]);
    if(isTotalCount)
    {
        return(
            <div className="counter_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-4">
                            <div className="single_counter">
                                
                                <CountUp start={0} end={parseInt(isTotalCount.propertyCount.sale)} delay={0} duration={50}>
                                    {({ countUpRef }) => (
                                        <>
                                            <h3> <span  className="counter" ref={countUpRef} ></span> <span>+</span> </h3>
                                            <p>Properties for sale</p>
                                        </>
                                    )}
                                </CountUp>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single_counter">
                                <CountUp start={0} end={parseInt(isTotalCount.propertyCount.rent)} delay={0} duration={50}>
                                    {({ countUpRef }) => (
                                        <>
                                            <h3> <span  className="counter" ref={countUpRef} ></span> </h3>
                                            <p>Properties for rent</p>
                                        </>
                                    )}
                                </CountUp>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single_counter">
                                <CountUp start={0} end={parseInt(isTotalCount.propertyCount.pg)} delay={0} duration={50}>
                                    {({ countUpRef }) => (
                                        <>
                                            <h3> <span  className="counter" ref={countUpRef} ></span> </h3>
                                            <p>Properties for PG</p>
                                        </>
                                    )}
                                </CountUp>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    } else {
        return(
            <div></div>
        )
    }
}

export default TotalProperties;