import React from 'react'
import '../style/cards.css'
const BronzeFFC = () => {
    return (
    <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="ffc/bronze" target="_blank">See Bronze Customers</a>
                    </h3>
                    <p>Our bronze customers have traveled a maximum of 15000 miles.</p>
                </div>
            </div>
         
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <i class="fa fa-twitter-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="ffc/silver" target="_blank">See Silver Customers</a>
                    </h3>
                    <p>Our silver customers have traveled a minimum of 15000 and a maximum of 20000 miles.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <i class="fa fa-github-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="ffc/gold" target="_blank">See Gold Customers</a>
                    </h3>
                    <p>Our gold customers have traveled a minimum of 20000 miles.</p>
                </div>
            </div>
        </div>
    </div>

    )
}

export default BronzeFFC