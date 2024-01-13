import './hotel_cost.css';

const Hotel_cost = () => {
    return (
        <div className="hotel_cost"> 
            <div id='cost' className="parallax__six">
                <div className="cost__main">
                        <div className="container">
                            <div className="headline">
                                <h1>НАШИ ВИДЕО ↓</h1>
                            </div>
                        </div>
                </div>
            </div>
            <div className="container">
                <div className="videos">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xZip_Y3idkU?si=lA1zBhdRtWdV_oCV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Hotel_cost