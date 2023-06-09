import Carousel from 'react-bootstrap/Carousel';
import CLA2 from '../../Imgenes/CLA2.jpg';
import CLA3 from '../../Imgenes/CLA3.jpg';
import imagen1 from '../../Imgenes/imagen1.png';
import imagen2 from '../../Imgenes/imagen2.png';
import imagen3 from '../../Imgenes/imagen3.png';
import imgNoti from '../../Imgenes/noticia1.jpg';
import './Carousel.css'


function Carrusel() {
  return (
    <Carousel className='carousell'fade>
      <Carousel.Item className='divImg'>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='divImg'>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='divImg'>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;