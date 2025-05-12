import { Link } from "react-router-dom";
import '../App.css';
import './Styles/cards.css'
const Cards = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="cyber-card">
                        <div className="cyber-img-container">
                            <img
                                src="https://images8.alphacoders.com/112/1126614.jpg"
                                className="cyber-img"
                                alt="Senku"
                            />
                        </div>
                        <div className="cyber-card-body">
                            <h5 className="cyber-title">Neon Genesis</h5>
                            <p className="cyber-text">
                                Immerse yourself in the digital future with cutting-edge technology.
                            </p>
                            <Link to="/ai" className="cyber-link">
                                <button className="cyber-btn">Enter Grid</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="cyber-card">
                        <div className="cyber-img-container">
                            <img
                                src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/the_eminence_in_shadow-episode_06-figure_04.jpg"
                                className="cyber-img"
                                alt="Senku"
                            />
                        </div>
                        <div className="cyber-card-body">
                            <h5 className="cyber-title">Data Flow</h5>
                            <p className="cyber-text">
                                Feel the pulse of information streams in the neural network.
                            </p>
                            <Link to="/anime" className="cyber-link">
                                <button className="cyber-btn">Sync Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="cyber-card">
                        <div className="cyber-img-container">
                            <img
                                src="https://i.ytimg.com/vi/quLV7EhZdis/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBwgWih_MA8=&rs=AOn4CLAF452r4A7gquluaNP7kSvupzDFXA"
                                className="cyber-img"
                                alt="Senku"
                            />
                        </div>
                        <div className="cyber-card-body">
                            <h5 className="cyber-title">Quantum Core</h5>
                            <p className="cyber-text">
                                Unleash the power of quantum computing in your projects.
                            </p>
                            <Link to="/ai-chat" className="cyber-link">
                                <button className="cyber-btn">Activate</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Cards;