import bootstrap from 'bootstrap'
import relojdama from '../../Assets/img/relojdama.jpg'
import portada1 from '../../Assets/img/portada1.jpg'
import portada2 from '../../Assets/img/portada2.jpg'
import portada3 from '../../Assets/img/portada3.jpg'
import './Carousel.css'


const Carousel =  () => {
    return(
        <div className='carousel-container'>
 <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
<img src={portada1}></img>
    </div>
    <div className="carousel-item">
    <img src={portada2}></img>
    </div>
    <div className="carousel-item">
    <img src={portada3}></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Carousel