import React from 'react';

function Gallery(props) {
    return (
        <div>
            <div>
                {/* - */}
                <div className="gallery-sidebar t-center p-l-60 p-r-60 p-b-40">
                    {/* - */}
                    <h4 className="txt20 m-b-33">
                        Gallery
                    </h4>
                    
                </div>
                {/* Title Page */}
                <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15" style={{ backgroundImage: 'url(images/bg-title-page-02.jpg)' }}>
                    <h2 className="tit6 t-center">
                        Gallery
                    </h2>
                </section>
                {/* Gallery */}
                <div className="section-gallery p-t-118 p-b-100">
                    <div className="wrap-label-gallery filter-tope-group size27 flex-w flex-sb-m m-l-r-auto flex-col-c-sm p-l-15 p-r-15 m-b-60">
                        <button className="label-gallery txt26 trans-0-4 is-actived" data-filter="*">
                            All Photo
                        </button>
                        <button className="label-gallery txt26 trans-0-4" data-filter=".interior">
                            Interior
                        </button>
                        <button className="label-gallery txt26 trans-0-4" data-filter=".food">
                            Food
                        </button>
                        <button className="label-gallery txt26 trans-0-4" data-filter=".events">
                            Events
                        </button>
                        <button className="label-gallery txt26 trans-0-4" data-filter=".guests">
                            Vip guests
                        </button>
                    </div>
                    <div className="wrap-gallery isotope-grid flex-w p-l-25 p-r-25">
                        {/* - */}
                        <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events guests">
                            <img src="images/photo-gallery-13.jpg" alt="IMG-GALLERY" />
                            <div className="overlay-item-gallery trans-0-4 flex-c-m">
                                <a className="btn-show-gallery flex-c-m fa fa-search" href="images/photo-gallery-13.jpg" data-lightbox="gallery" />
                            </div>
                        </div>
                        {/* - */}
                        <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom food">
                            <img src="images/photo-gallery-14.jpg" alt="IMG-GALLERY" />
                            <div className="overlay-item-gallery trans-0-4 flex-c-m">
                                <a className="btn-show-gallery flex-c-m fa fa-search" href="images/photo-gallery-14.jpg" data-lightbox="gallery" />
                            </div>
                        </div>
                        {/* - */}
                        <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events">
                            <img src="images/photo-gallery-15.jpg" alt="IMG-GALLERY" />
                            <div className="overlay-item-gallery trans-0-4 flex-c-m">
                                <a className="btn-show-gallery flex-c-m fa fa-search" href="images/photo-gallery-15.jpg" data-lightbox="gallery" />
                            </div>
                        </div>
                        {/* - */}
                        <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom food">
                            <img src="images/photo-gallery-16.jpg" alt="IMG-GALLERY" />
                            <div className="overlay-item-gallery trans-0-4 flex-c-m">
                                <a className="btn-show-gallery flex-c-m fa fa-search" href="images/photo-gallery-16.jpg" data-lightbox="gallery" />
                            </div>
                        </div>
                        {/* - */}
                        <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom food">
                            <img src="images/photo-gallery-17.jpg" alt="IMG-GALLERY" />
                            <div className="overlay-item-gallery trans-0-4 flex-c-m">
                                <a className="btn-show-gallery flex-c-m fa fa-search" href="images/photo-gallery-17.jpg" data-lightbox="gallery" />
                            </div>
                        </div>
                        {/* - */}
                        <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom interior guests">
                            <img src="images/photo-gallery-18.jpg" alt="IMG-GALLERY" />
                            <div className="overlay-item-gallery trans-0-4 flex-c-m">
                                <a className="btn-show-gallery flex-c-m fa fa-search" href="images/photo-gallery-18.jpg" data-lightbox="gallery" />
                            </div>
                        </div>
                        {/* - */}
                        <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom interior">
                            <img src="images/photo-gallery-19.jpg" alt="IMG-GALLERY" />
                            <div className="overlay-item-gallery trans-0-4 flex-c-m">
                                <a className="btn-show-gallery flex-c-m fa fa-search" href="images/photo-gallery-19.jpg" data-lightbox="gallery" />
                            </div>
                        </div>
                        {/* - */}
                        <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom interior">
                            <img src="images/photo-gallery-20.jpg" alt="IMG-GALLERY" />
                            <div className="overlay-item-gallery trans-0-4 flex-c-m">
                                <a className="btn-show-gallery flex-c-m fa fa-search" href="images/photo-gallery-20.jpg" data-lightbox="gallery" />
                            </div>
                        </div>
                        {/* - */}
                        <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events">
                            <img src="images/photo-gallery-21.jpg" alt="IMG-GALLERY" />
                            <div className="overlay-item-gallery trans-0-4 flex-c-m">
                                <a className="btn-show-gallery flex-c-m fa fa-search" href="images/photo-gallery-21.jpg" data-lightbox="gallery" />
                            </div>
                        </div>
                    </div>
                    <div className="pagination flex-c-m flex-w p-l-15 p-r-15 m-t-24 m-b-50">
                        <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
                        <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
                        <a href="#" className="item-pagination flex-c-m trans-0-4">3</a>
                    </div>
                </div>
                {/* Sign up */}
                <div className="section-signup bg1-pattern p-t-85 p-b-85">
                    <form className="flex-c-m flex-w flex-col-c-m-lg p-l-5 p-r-5">
                        <span className="txt5 m-10">
                            Specials Sign up
                        </span>
                        <div className="wrap-input-signup size17 bo2 bo-rad-10 bgwhite pos-relative txt10 m-10">
                            <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="email-address" placeholder="Email Adrress" />
                            <i className="fa fa-envelope ab-r-m m-r-18" aria-hidden="true" />
                        </div>
                        {/* Button3 */}
                        <button type="submit" className="btn3 flex-c-m size18 txt11 trans-0-4 m-10">
                            Sign-up
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Gallery;