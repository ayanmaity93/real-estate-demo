import React, { useState, useEffect } from 'react';

function QuesAndAns(object){
    const [flagStatus,onFlagChange] = useState(false);
    const [classQue,onClassQue] = useState("btn btn-link collapsed");
    const [classAns,onClassAns] = useState("collapse");
    let QuesAns =object.properties;

    function appendClass(){
        if(flagStatus){
            onClassQue("btn btn-link collapsed");
            onClassAns("collapse");
        }else{
            onClassQue("btn btn-link");
            onClassAns("collapse show");
        }
        onFlagChange(!flagStatus);
    }

    return(
        <div className="card">
            <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                    <button className={classQue} onClick={appendClass}>
                            {QuesAns.question}
                    </button>
                </h5>
            </div>
            {/* <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion"> */}
            <div className={classAns}>
                <div className="card-body">{QuesAns.answer}</div>
            </div>
        </div>
    );
}

function FAQs(){
    const [QuesAnsList,setQuesAnsList] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/qna.json",{
          method: "GET"})
        .then(res => res.json())
        .then(
            (result) => {
                let QuesAnsList = result.QuesAnsArray.map((item)=>
                    <QuesAndAns key={item.id} properties={item}></QuesAndAns>
                );
                setQuesAnsList(QuesAnsList);
            },
            (error) => {
                console.log(error);
            }
        )
    },[]);

    if(QuesAnsList){
        return(
            <div className="accordion_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq_ask">
                                <h3>Frequently ask</h3>
                                <div id="accordion">
                                    {QuesAnsList}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="accordion_thumb">
                                <img src={require("./../assets/images/banner/accordion.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
        <p>Loading Popular Properties..</p>
        ) 
    }
}
export default FAQs;
export {QuesAndAns};