import "./Categories.css";
import Footer from "./Footer";

function Categories() {
    return (
        <>
            <div className="d-flex">
                <div className="sidebar">
                    <h4>Filters</h4>
                    <div className="filter-category">
                        <h6 data-bs-toggle="collapse" data-bs-target="#categories" aria-expanded="true" aria-controls="categories">
                            Categories <i className="fas fa-chevron-down"></i>
                        </h6>
                        <div className="collapse show" id="categories">
                            <ul className="list-unstyled">
                                <li><a href="#flower"><i className="fas fa-seedling"></i> Flowers</a></li>
                                <li><a href="#fruit"><i className="fas fa-apple-alt"></i> Fruits</a></li>
                                <li><a href="#vegetable"><i className="fas fa-carrot"></i> Vegetables</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="filter-category">
                        <h6 data-bs-toggle="collapse" data-bs-target="#categories" aria-expanded="true" aria-controls="categories">
                            Accessories <i className="fas fa-chevron-down"></i>
                        </h6>
                        <div className="collapse show" id="categories">
                            <ul className="list-unstyled">
                                <li><a href="#Ceramic"><i className="fas fa-glass-whiskey"></i> Ceramic Pot's</a></li>
                                <li><a href="#Metalic"><i className="fas fa-beer"></i> Metalic Pot's</a></li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div className="product-list">
                    <h3>Plant Categories</h3>
                    <div className="row" id="flower">
                        <h4>Flowers</h4>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Rose.jpg" alt="Rose" />
                                <h5>Rose</h5>
                                <p>A symbol of love and beauty, available in a variety of colors with a sweet fragrance.</p>
                                <p className="price">₹50</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Tulipa.jpg" alt="Tulip" />
                                <h5>Tulip</h5>
                                <p>A graceful, flower symbolizing perfect love and often seen in vibrant spring gardens.</p>
                                <p className="price">₹70</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Lilies.jpg" alt="Lilies" />
                                <h5>Lilies</h5>
                                <p>Known for its elegance and purity, often used in bouquets and religious ceremonies.</p>
                                <p className="price">₹50</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Marigold.jpg" alt="Marigold" />
                                <h5>Merigold</h5>
                                <p> A bright, cheerful flower associated with celebrations, festivals, and garlands in India.</p>
                                <p className="price">₹70</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Hibiscus.jpg" alt="Hibiscus" />
                                <h5>Hibiscus</h5>
                                <p> A large, colorful bloom revered for its sacred significance in Hindu worship.</p>
                                <p className="price">₹50</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Jasmine.jpg" alt="Jasmine" />
                                <h5>Jasmine</h5>
                                <p> A fragrant flower that symbolizes purity and is widely used for garlands and perfumes.</p>
                                <p className="price">₹70</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Gerbera.jpg" alt="Gerbera" />
                                <h5>Gerbera</h5>
                                <p>A daisy-like flower that exudes joy and positivity, often seen in colorful bouquets.</p>
                                <p className="price">₹50</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Bougainvillea.jpg" alt="Bougainvillea" />
                                <h5>Bougainvillea</h5>
                                <p> A hardy, vibrant flowering plant known for its paper-like bracts in vivid hues.</p>
                                <p className="price">₹70</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        {/* <!-- More flower items --> */}
                    </div>
                    {/* <hr> */}

                    <div className="row" id="fruit">
                        <h4>Fruits</h4>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="mango.jpg" alt="Mongo" />
                                <h5>Mongo</h5>
                                <p> Known as the "king of fruits," it is sweet, juicy, and tropical, with vibrant orange-yellow flesh.</p>
                                <p className="price">₹120</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="gauva.jpg" alt="Gauva" />
                                <h5>Gauva</h5>
                                <p>A fragrant fruit with green or yellow skin, pink or white flesh, and tiny edible seeds.</p>
                                <p className="price">₹40</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Banana.jpg" alt="Banana" />
                                <h5>Banana</h5>
                                <p> A soft, sweet, and creamy fruit with a yellow peel, popular for its energy-boosting properties.</p>
                                <p className="price">₹120</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="coconut.jpg" alt="Coconut" />
                                <h5>Coconut</h5>
                                <p>A hard-shelled fruit with a fibrous husk, containing sweet water and creamy white flesh.</p>
                                <p className="price">₹40</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Jackfruit.jpg" alt="Jackfruit" />
                                <h5>Jackfruit</h5>
                                <p> A massive tropical fruit with spiky skin, sweet yellow pods inside, and a distinct aroma.</p>
                                <p className="price">₹120</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Kiwi.jpg" alt="Kiwi" />
                                <h5>Kiwi</h5>
                                <p> A small fruit with brown fuzzy skin, bright green flesh, and tiny black seeds; tangy and sweet.</p>
                                <p className="price">₹40</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Dragon Fruit.jpg" alt="Dragon Fruit" />
                                <h5>Dragon Fruit</h5>
                                <p> A vibrant, spiky-skinned fruit with white or pink flesh, dotted with black seeds; mildly sweet.</p>
                                <p className="price">₹120</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Pear.jpg" alt="Pear" />
                                <h5>Pear</h5>
                                <p>A juicy fruit with thin, smooth skin and a soft, sweet, and grainy texture inside.</p>
                                <p className="price">₹40</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy No</button>
                            </div>
                        </div>
                        {/* <!-- More fruit items --> */}
                    </div>
                    {/* <hr> */}

                    <div className="row" id="vegetable">
                        <h4>Vegetables</h4>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Carrot.jpg" alt="Carrot" />
                                <h5>Carrot</h5>
                                <p>A crunchy, sweet root vegetable, typically orange, rich in beta-carotene.</p>
                                <p className="price">₹30</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Tomato.jpg" alt="Tomato" />
                                <h5>Tomato</h5>
                                <p>A juicy, red fruit-vegetable used in cooking, with a slightly tangy flavor.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Coriander.jpg" alt="Carrot" />
                                <h5>Coriander</h5>
                                <p>A fragrant green herb with feathery leaves, used for flavor and garnishing.</p>
                                <p className="price">₹30</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Brinjal.jpg" alt="Tomato" />
                                <h5>Brinjal</h5>
                                <p>A purple, glossy vegetable with spongy flesh, versatile in cooking.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Cauliflower.jpg" alt="Carrot" />
                                <h5>Cauliflower</h5>
                                <p>A white, compact vegetable head surrounded by green leaves, mild in taste.</p>
                                <p className="price">₹30</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Spinach.jpg" alt="Tomato" />
                                <h5>Spinach</h5>
                                <p>A leafy green vegetable, rich in iron and nutrients, used raw or cooked.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Spinach.jpg" alt="Tomato" />
                                <h5>Pumpkin</h5>
                                <p>A leafy green vegetable, rich in iron and nutrients, used raw or cooked.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Lady Fingers.jpg" alt="Tomato" />
                                <h5>Lady finger</h5>
                                <p>A slender green vegetable with a sticky interior, used in various dishes.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        {/* <!-- More vegetable items --> */}
                    </div>
                    {/* <hr> */}
                    <h3>Accessories</h3>
                    <div className="row" id="Ceramic">
                        <h4>Ceramic Pot's</h4>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Carrot.jpg" alt="Carrot" />
                                <h5>Carrot</h5>
                                <p>A crunchy, sweet root vegetable, typically orange, rich in beta-carotene.</p>
                                <p className="price">₹30</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Tomato.jpg" alt="Tomato" />
                                <h5>Tomato</h5>
                                <p>A juicy, red fruit-vegetable used in cooking, with a slightly tangy flavor.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Coriander.jpg" alt="Carrot" />
                                <h5>Coriander</h5>
                                <p>A fragrant green herb with feathery leaves, used for flavor and garnishing.</p>
                                <p className="price">₹30</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Brinjal.jpg" alt="Tomato" />
                                <h5>Brinjal</h5>
                                <p>A purple, glossy vegetable with spongy flesh, versatile in cooking.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Cauliflower.jpg" alt="Carrot" />
                                <h5>Cauliflower</h5>
                                <p>A white, compact vegetable head surrounded by green leaves, mild in taste.</p>
                                <p className="price">₹30</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Spinach.jpg" alt="Tomato" />
                                <h5>Spinach</h5>
                                <p>A leafy green vegetable, rich in iron and nutrients, used raw or cooked.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Spinach.jpg" alt="Tomato" />
                                <h5>Pumpkin</h5>
                                <p>A leafy green vegetable, rich in iron and nutrients, used raw or cooked.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Lady Fingers.jpg" alt="Tomato" />
                                <h5>Lady finger</h5>
                                <p>A slender green vegetable with a sticky interior, used in various dishes.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        {/* <!-- More vegetable items --> */}
                    </div>
                    {/* <hr> */}
                    <div className="row" id="Metalic">
                        <h4>Metalic Pot's</h4>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Carrot.jpg" alt="Carrot" />
                                <h5>Carrot</h5>
                                <p>A crunchy, sweet root vegetable, typically orange, rich in beta-carotene.</p>
                                <p className="price">₹30</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Tomato.jpg" alt="Tomato" />
                                <h5>Tomato</h5>
                                <p>A juicy, red fruit-vegetable used in cooking, with a slightly tangy flavor.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Coriander.jpg" alt="Carrot" />
                                <h5>Coriander</h5>
                                <p>A fragrant green herb with feathery leaves, used for flavor and garnishing.</p>
                                <p className="price">₹30</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Brinjal.jpg" alt="Tomato" />
                                <h5>Brinjal</h5>
                                <p>A purple, glossy vegetable with spongy flesh, versatile in cooking.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Nowt </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Cauliflower.jpg" alt="Carrot" />
                                <h5>Cauliflower</h5>
                                <p>A white, compact vegetable head surrounded by green leaves, mild in taste.</p>
                                <p className="price">₹30</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Spinach.jpg" alt="Tomato" />
                                <h5>Spinach</h5>
                                <p>A leafy green vegetable, rich in iron and nutrients, used raw or cooked.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Nowt </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Spinach.jpg" alt="Tomato" />
                                <h5>Pumpkin</h5>
                                <p>A leafy green vegetable, rich in iron and nutrients, used raw or cooked.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        <div className="col-md-3 cards">
                            <div className="product-item">
                                <img src="Lady Fingers.jpg" alt="Tomato" />
                                <h5>Lady finger</h5>
                                <p>A slender green vegetable with a sticky interior, used in various dishes.</p>
                                <p className="price">₹20</p>
                                <button className="btn btn-outline-success rounded rounded-x">Add To Cart <i
                                    className="fas fa-cart-plus"></i></button>
                                <button className="btn card-btn btn-outline-success rounded rounded-x">Buy Now </button>
                            </div>
                        </div>
                        {/* <!-- More vegetable items --> */}
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Categories;