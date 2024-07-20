// import "./CollapsibleExample.css";
// import CollapsibleExample from './CollapsibleExample';
import './App.css';

import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './CollapsibleExample';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./SearchUi.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import FooterComponent from './Footer';

import service1 from "./assets/products/Home-Maintenance.jpg";
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgs.ca%2F&psig=AOvVaw0wRWq11wT_In0IHAejYHeK&ust=1721003673041000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiD0rekpYcDFQAAAAAdAAAAABAE
import service2 from "./assets/products/image1s.jpeg";
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.obrienrealestate.com.au%2Fannual-home-maintenance-checklist%2F&psig=AOvVaw1cUk_UqEFlpnvOI2yB0myv&ust=1721003715749000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMisssukpYcDFQAAAAAdAAAAABAE
import service3 from "./assets/products/property-maintenance-checklist.png";
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fgenerationhomesnw.com%2Fhome-maintenance-guide%2F&psig=AOvVaw2nN6DZVAxAe4_DvzHrg8c2&ust=1721003772244000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjxnqTlpKWHAxUip4kEHT2yBu4QjRx6BAgAEBU
import service4 from "./assets/products/spring-home-maintenance-checklist-step-1.jpg";
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rbcinsurance.com%2Fen-ca%2Fspring-home-maintenance-a-simple-4-point-checklist-to-help-protect-your-home-exterior%2F&psig=AOvVaw0MxfhyUhbipszMuHnqin-E&ust=1721003792087000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjFsN_upKWHAxVJuYkEHW2hCbEQjRx6BAgAEBU
import service5 from "./assets/products/images.jpeg"
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.homedepot.com%2Fc%2Fai%2Fspring-home-maintenance-checklist%2F9ba683603be9fa5395fab9017ae07544&psig=AOvVaw3p7IK-m9WipUxYeYucDupp&ust=1721003822621000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjS_ab9pKWHAxXltYkEHWsaCXYQjRx6BAgAEBU


const products = [
    {
        id: 1,
        name: "House Cleaning Service",
        imgSrc: service1,
        description: "Comprehensive house cleaning service including vacuuming, dusting, mopping, and bathroom cleaning.",
        price: "$120",
        priceOld: "$150"
    },
    {
        id: 2,
        name: "Lawn Mowing Service",
        imgSrc: service2,
        description: "Professional lawn mowing service to keep your yard looking neat and tidy all year round.",
        price: "$50",
        priceOld: "$70"
    },
    {
        id: 3,
        name: "Plumbing Services",
        imgSrc: service3,
        description: "Expert plumbing services including leak repairs, pipe installation, and drain cleaning.",
        price: "$90",
        priceOld: "$110 per hour"
    },
    {
        id: 4,
        name: "Electrical Repairs",
        imgSrc: service4,
        description: "Reliable electrical repair services for fixing wiring issues, installing fixtures, and more.",
        price: "$100",
        priceOld: "$130 per hour"
    },
    {
        id: 5,
        name: "Window Cleaning",
        imgSrc: service5,
        description: "Professional window cleaning service to keep your windows spotless and streak-free.",
        price: "$80",
        priceOld: "$100"
    },
    {
        id: 6,
        name: "Roofing Services",
        imgSrc: "https://via.placeholder.com/150",
        description: "Expert roofing services including repairs, replacements, and inspections.",
        price: "$300",
        priceOld: "$350"
    },
    {
        id: 7,
        name: "HVAC Maintenance",
        imgSrc: "https://via.placeholder.com/150",
        description: "Comprehensive HVAC maintenance to ensure your heating and cooling systems run efficiently.",
        price: "$150",
        priceOld: "$200"
    },
    {
        id: 8,
        name: "Painting Services",
        imgSrc: "https://via.placeholder.com/150",
        description: "Professional painting services for both interior and exterior projects.",
        price: "$200",
        priceOld: "$250"
    }
];



function SearchUi() {

    let navigate = useNavigate();

    const handleClick = (product) => {
        navigate(`/explore/product/`, { state: { product } });
    };

    const [shuffledProducts, setShuffledProducts] = useState(products);

    const shuffleProducts = () => {
        const shuffled = products.sort(() => 0.5 - Math.random());
        setShuffledProducts([...shuffled]);
    };
    return (
        <div className="Ap">
            <CollapsibleExample />

            <section class="section-content padding-y custom-search" style={{ marginTop: '50px' }}>
                <div class="container">
                    <div class="row">
                        <aside class="col-md-3">

                            <div class="card">
                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                                          
                                            <h6 class="title">City</h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_1">
                                        <div class="card-body">
                                            <form class="pb-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search" />
                                                    <div class="input-group-append">
                                                        <button class="btn " type="button" onClick={shuffleProducts}><i class="fa fa-search"></i></button>
                                                    </div>
                                                </div>
                                            </form>

                                        
                                        </div>
                                    </div>
                                </article>
                            
                                {/* <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
                                            
                                            <h6 class="title">Price range </h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_3">
                                        <div class="card-body">
                                         
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label>Min</label>
                                                    <input class="form-control" placeholder="$0" type="number" />
                                                </div>
                                                <div class="form-group text-right col-md-6">
                                                    <label>Max</label>
                                                    <input class="form-control" placeholder="$1,0000" type="number" />
                                                </div>
                                            </div>
                                            <button  onClick={shuffleProducts} class="btn btn-block btn-primary">Apply</button>
                                        </div>
                                    </div>
                                </article> */}
                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_budget" aria-expanded="true" class="">
                                          
                                            <h6 class="title">Your Budget</h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_budget">
                                        <div class="card-body">
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts} type="checkbox" />
                                                <span  onClick={shuffleProducts} class="btn">$0 - $100</span>
                                            </label>
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts} type="checkbox" />
                                                <span  onClick={shuffleProducts} class="btn">$100 - $200</span>
                                            </label>
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts} type="checkbox" />
                                                <span  onClick={shuffleProducts} class="btn">$200+</span>
                                            </label>
                                        </div>
                                    </div>
                                </article>

                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_job" aria-expanded="true" class="">
                                           
                                            <h6 class="title">Job Type</h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_job">
                                        <div class="card-body">
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts} type="checkbox" />
                                                <span  onClick={shuffleProducts} class="btn">Cleaning</span>
                                            </label>
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts} type="checkbox" />
                                                <span   onClick={shuffleProducts} class="btn">Renovation</span>
                                            </label>
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts} type="checkbox" />
                                                <span  onClick={shuffleProducts} class="btn">Repair</span>
                                            </label>
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts} type="checkbox" />
                                                <span  onClick={shuffleProducts} class="btn">Landscaping</span>
                                            </label>
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts} type="checkbox" />
                                                <span  onClick={shuffleProducts} class="btn">Regular Maintenance</span>
                                            </label>
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts} type="checkbox" />
                                                <span  onClick={shuffleProducts} class="btn">Wildlife Control</span>
                                            </label>
                                        </div>
                                    </div>
                                </article>

                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_dwelling" aria-expanded="true" class="">
                                            
                                            <h6 class="title">Dwelling Type</h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_dwelling">
                                        <div class="card-body">
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts} type="checkbox" />
                                                <span  onClick={shuffleProducts} class="btn ">Industrial</span>
                                            </label>
                                            <label class="checkbox-btn">
                                                <input onClick={shuffleProducts} type="checkbox" />
                                                <span  onClick={shuffleProducts}class="btn ">Commercial</span>
                                            </label>
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts}type="checkbox" />
                                                <span  onClick={shuffleProducts}class="btn ">Personal</span>
                                            </label>
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts}type="checkbox" />
                                                <span  onClick={shuffleProducts}class="btn ">Government</span>
                                            </label>
                                        </div>
                                    </div>
                                </article>

                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_work_area" aria-expanded="true" class="">
                                            
                                            <h6 class="title">Work Area</h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_work_area">
                                        <div class="card-body">
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts}type="checkbox" />
                                                <span  onClick={shuffleProducts}class="btn ">Lawn</span>
                                            </label>
                                            <label class="checkbox-btn">
                                                <input onClick={shuffleProducts} type="checkbox" />
                                                <span  onClick={shuffleProducts}class="btn ">Basement</span>
                                            </label>
                                            <label class="checkbox-btn">
                                                <input  onClick={shuffleProducts}type="checkbox" />
                                                <span  onClick={shuffleProducts}class="btn ">Lobby</span>
                                            </label>
                                        </div>
                                    </div>
                                </article>

                            </div>
                        </aside>
                        <main class="col-md-9">
                            <header class="border-bottom mb-4 pb-3">
                                <div class="form-inline">
                                    <span class="mr-md-auto">{products.length} Items found </span>
                                
                                </div>
                            </header>
                            {shuffledProducts.map(product => (
                                <article className="card card-product-list" key={product.id} style={{padding: "15px", margin: "10px"}}>
                                    <div className="row no-gutters">
                                      
                                        <aside className="col-md-3 d-flex justify-content-center align-items-center">
                                            <a href="#" className="img-wrap">
                                                <span className="badge badge-danger"> NEW </span>
                                                <img src={product.imgSrc} alt={product.name} style={{ width: '150px', height: '150px', objectFit: 'cover', padding: '12px', borderRadius: '20px' }} />
                                            </a>
                                        </aside>

                                        <div className="col-md-6">
                                            <div className="info-main">
                                                <a href="#" className="h5 title">{product.name}</a>
                                                <p>{product.description}</p>
                                            </div>
                                        </div>
                                        <aside className="col-sm-3">
                                            <div className="info-aside">
                                                <div className="price-wrap">
                                                    <span className="price h5">{product.price}</span>
                                                    {/* {product.priceOld && <del className="price-old">{product.priceOld}</del>} */}
                                                </div>
                                                <br />
                                                <p>
                                                    <button onClick={() => handleClick(product)} className="btn btn-primary btn-block">Details</button>
                                                </p>
                                            </div>
                                        </aside>
                                    </div>
                                </article>
                            ))}




                            {/*  */}


                            <article class="card card-product-list hidden">
                                <div class="row no-gutters">
                                    <aside class="col-md-3">
                                        <a href="#" class="img-wrap">
                                            <span class="badge badge-danger"> NEW </span>
                                            <img src="assets/images/items/3.jpg" />
                                        </a>
                                    </aside>
                                    <div class="col-md-6">
                                        <div class="info-main">
                                            <a href="#" class="h5 title"> Great product name goes here  </a>
                                           
                                            <p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                                        </div>
                                    </div>
                                    <aside class="col-sm-3">
                                        <div class="info-aside">
                                            <div class="price-wrap">
                                                <span class="price h5"> $140 </span>
                                                <del class="price-old"> $198</del>
                                            </div>
                                         
                                            <br />
                                            <p>
                                                <a onClick={handleClick} class="btn btn-primary btn-block"> Details </a>
                                               
                                            </p>
                                        </div>
                                    </aside>
                                </div>
                            </article>
                            <article class="card card-product-list hidden">
                                <div class="row no-gutters">
                                    <aside class="col-md-3">
                                        <a href="#" class="img-wrap"><img src="assets/images/items/4.jpg" /></a>
                                    </aside>
                                    <div class="col-md-6">
                                        <div class="info-main">
                                            <a href="#" class="h5 title"> Great product name goes here  </a>
                   

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                                        </div>
                                    </div>
                                    <aside class="col-sm-3">
                                        <div class="info-aside">
                                            <div class="price-wrap">
                                                <span class="price h5"> $56 </span>
                                                <del class="price-old"> $85</del>
                                            </div>
                                
                                            <br />
                                            <p>
                                                <a onClick={handleClick} class="btn btn-primary btn-block"> Details </a>
                                                
                                            </p>
                                        </div>
                                    </aside>
                                </div>
                            </article>

                            <article class="card card-product-list hidden">
                                <div class="row no-gutters">
                                    <aside class="col-md-3">
                                        <a href="#" class="img-wrap"><img src="assets/images/items/5.jpg" /></a>
                                    </aside>
                                    <div class="col-md-6">
                                        <div class="info-main">
                                            <a href="#" class="h5 title"> Great product name goes here  </a>
                                        

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                                        </div>
                                    </div>
                                    <aside class="col-sm-3">
                                        <div class="info-aside">
                                            <div class="price-wrap">
                                                <span class="price h5"> $56.00 </span>
                                            </div>
                                            {/* <p class="text-success">Free shipping</p> */}
                                            <br />
                                            <p>
                                                <a onClick={handleClick} class="btn btn-primary btn-block"> Details </a>
                                              
                                            </p>
                                        </div>
                                    </aside>
                                </div>
                            </article>

                            <article class="card card-product-list hidden">
                                <div class="row no-gutters">
                                    <aside class="col-md-3">
                                        <a href="#" class="img-wrap"><img src="assets/images/items/6.jpg" /></a>
                                    </aside>
                                    <div class="col-md-6">
                                        <div class="info-main">
                                            <a href="#" class="h5 title"> Product name can be here  </a>
                       

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                                        </div>
                                    </div>
                                    <aside class="col-sm-3">
                                        <div class="info-aside">
                                            <div class="price-wrap">
                                                <span class="price h5"> $62 </span>
                                            </div>
                                        
                                            <br />
                                            <p>
                                                <a onClick={handleClick} class="btn btn-primary btn-block"> Details </a>
                                               
                                            </p>
                                        </div>
                                    </aside>
                                </div>
                            </article>
                            <nav class="mt-4" aria-label="Page navigation sample">
                                <ul class="pagination">
                                    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </main>
                    </div>
                </div>
            </section>

           

            <FooterComponent />

        </div>
    );
}
export default SearchUi;