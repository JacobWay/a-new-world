import React from "react";

function PortfolioItems(props) {
    const sparrow= require("../../assets/images/doodles/sparrow.jpg");
    const saucerAndCup = require("../../assets/images/doodles/saucerAndCup.jpg");
    const oldMan = require("../../assets/images/doodles/oldMan.jpg");
    const someone = require("../../assets/images/doodles/someone.jpg");
    const roomAlongRiver = require("../../assets/images/doodles/roomAlongRiver.jpg");
    const missRabbit = require("../../assets/images/doodles/missRabbit.jpg");
    let data = [{
        obj: sparrow,
        category: '动物',
        num: 3
    },{
        obj: saucerAndCup,
        category: '静物',
        num: 2
    },{
        obj: oldMan,
        category: '人物',
        num: 1
    },{
        obj: someone,
        category: '人物',
        num: 1
    },{
        obj: roomAlongRiver,
        category: '静物',
        num: 2
    },{
        obj: missRabbit,
        category: '动物',
        num: 3
    }];

    const element = ( 
        <ul class = "portfolio-items fixed" > 
        {
            data.map((item, index) => {
                return (
                    <li class={ 'item term-' + (item.num) } key={"image_" + index}>
                        <div class="portfolio-item">
                            <div class="portfolio-item-preview">
                                <img src={ item.obj.src } srcSet={ item.obj.srcSet } alt="portfolio" />
                                <div class="portfolio-item-overlay">
                                    <div class="portfolio-item-overlay-actions">
                                        <a class="magnificPopup-gallery portfolio-item-zoom" href={ item.obj.src }> +
                    </a>
                                        <a class="ajax-popup-link portfolio-item-link" href="project.html">>
                    </a>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-item-description">
                                <h3> 图片
                                </h3>
                                <p> { item.category }
                                </p>
                            </div>
                        </div>
                    </li>
                )
            })
        } 
        </ul>
    );

    return element;
}

export default PortfolioItems
