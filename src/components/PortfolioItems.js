import React from "react";

function PortfolioItems(props) {
    const imageBaseUrl = "/a-new-world/assets/images/";
    const sparrowImageUrl = imageBaseUrl + "doodles/sparrow.jpg";
    const sparrowImage = require("../../assets/images/doodles/sparrow.jpg");
    console.log("sparrowImage ... ", sparrowImage);
        //<img srcSet={responsiveImage.srcSet} src={responsiveImage.src} />
    let data = [{
        obj: sparrowImage,
        category: '动物'
    }];

    const element = ( 
        <ul class = "portfolio-items fixed" > 
        {
            data.map((item, index) => {
                return (
                    <li class={ 'item term-' + (index + 1) } key={"image_" + index}>
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
