import React, {useState, useEffect} from 'react';

function OurAgents () {

    const [isAgents,setAgents] = useState('');

    useEffect(() => {
        fetch("agents.json",{
        method: "GET"})
        .then(res => res.json())
        .then(
            (result) => {
                let agents = result.agentsList.map((item)=>
                    <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                        <div className="single_team">
                            <div className="team_thumb">
                                <img src={require("./../assets/images/team/"+item.profilePic)} alt="" />
                                <div className="social_link">
                                        <ul>
                                            <li><a href="#">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li><a href="#">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li><a href="#">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team_info text-center">
                                <h3>{item.name}</h3>
                                <p>{item.designation}</p>
                            </div>
                        </div>
                    </div>
                );
                setAgents(agents);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error);
            }
        )
    },[]);


    if(!isAgents){
        return(
            <p>Agents Loading...</p>
        );
    } else {
        return(
            <>
                <div className="team_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section_title mb-40 text-center">
                                    <h3>Our Agents</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {isAgents} 
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default OurAgents;