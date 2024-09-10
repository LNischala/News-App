// import React, { Component } from 'react'
// import loading from './loading.gif'
// export default class Slider extends Component {
//     render() {
//         return (
//             <div>
//                 <div id="carouselExampleIndicators" class="carousel slide">
//                     <div class="carousel-indicators bg-dark text-white">
//                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                     </div>
//                     <div class="carousel-inner bg-dark text-white">
//                         <div class="carousel-item active">
//                             <img src={loading} class="d-block w-100" alt="..."/>
//                         </div>
//                         <div class="carousel-item">
//                             <img src={loading} class="d-block w-100" alt="..."/>
//                         </div>
//                         <div class="carousel-item">
//                             <img src={loading} class="d-block w-100" alt="..."/>
//                         </div>
//                     </div>
//                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Previous</span>
//                     </button>
//                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Next</span>
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }

import React from 'react';

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner w-100"  >
                    <div className="carousel-item active w-100">
                        <img src="https://images.unsplash.com/photo-1616261167032-b16d2df8333b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-flex w-100" style={{ objectFit: 'cover', height: '650px' }} alt="slide-1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 style={{color:'black'}}>Welcome to NewsToday</h3>
                            <h5 style={{color:'black'}}>Stay updated with the latest news from around the world. </h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ objectFit: 'cover', height: '650px' }} alt="slide-2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Real time updates</h3>
                            <h5>Get the latest headlines and breaking news as they happen. Our app provides real-time updates to keep you informed and engaged.</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="slide-3" style={{ objectFit: 'cover', height: '650px' }}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3 style={{color:'black'}}>Customizable Categories</h3>
                            <h5 style={{color:'black'}}>Customize your news feed by selecting your favorite categories. Whether you're interested in Sports, Health, or Business, we've got you covered.</h5>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;
