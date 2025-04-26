import sasukeImg from '../assets/Anime/sasuke-4k.jpg'
import narutoImg from '../assets/Anime/naruto-wallper.png'
import ichigoImg from '../assets/Anime/ichigo-bankai.jpg'
import '../App.css'
const Scroll = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={sasukeImg} className="d-block scrollImage" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={narutoImg} className="d-block scrollImage" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={ichigoImg} className="d-block scrollImage" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default Scroll