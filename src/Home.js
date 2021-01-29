import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jgp" alt=""/>
                
                <div className="home__row">
                    <Product id="12321341" title="The Lean startup: How Constant Innovation Creates Radically Succesful Businesses PaperBack" price={299.99} image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg'} rating={5}/>
                
                    
                    <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} rating={4} image="https://www.kenwoodworld.com/WebImage/Global/Product%20images/Kmix%20products/KMX754RD/KMX754RD_800x600.png"/>
                </div>
                <div className="home__row">
                    <Product id="4903850" title="
                    Apple MacBook Pro 15″ Touch Bar Space Grey" price={25999.99} rating={3} image="https://i0.wp.com/laptopmedia.com/wp-content/uploads/2019/06/Apple-MacBook-Pro-15-Touch-Bar-Mid-2019-silver-1.jpg?fit=987%2C917&ssl=1" />
                
                    <Product id="23445930" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={298.99} rating={5} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
               
                    <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={3598.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
                    </div>
                    
                    <div className="home__row">
                    <Product id="90829322" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={15094.98} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
                </div>
                </div>
            </div>
        
    )
}

export default Home
