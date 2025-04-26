import { Link } from "react-router-dom";
import '../App.css'

const Cards = () => {
    return (
        <div className="container mt-5">
            <div className="row rows-col-12 rows-col-md-6 rows-col-lg-4">
                <div className="col">
                    <div className="card">
                        <img
                            src="https://images8.alphacoders.com/112/1126614.jpg"
                            className="card-img-top"
                            alt="Senku"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <Link to="/ai">
                                <button className="btn btn-primary">AI</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src="https://images8.alphacoders.com/112/1126614.jpg"
                            className="card-img-top"
                            alt="Senku"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <Link to="/ai">
                                <button className="btn btn-primary">AI</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src="https://images8.alphacoders.com/112/1126614.jpg"
                            className="card-img-top"
                            alt="Senku"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <Link to="/ai">
                                <button className="btn btn-primary">AI</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;