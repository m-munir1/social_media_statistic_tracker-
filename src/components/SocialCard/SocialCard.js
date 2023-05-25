import React from 'react'
import './SocialCard.css';
const SocialCard = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='mt-5 mb-5'>
                            <div className='social_card fb_card d-flex'>
                                <div className='icon_div'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </div>
                                <div>
                                    <p className='card_count mb-0'>8692</p>
                                    <p className='mb-0 small'>Likes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='mt-5 mb-5'>
                            <div className='social_card insta_card d-flex'>
                                <div className='icon_div'>
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <div>
                                    <p className='card_count mb-0'>7843</p>
                                    <p className='mb-0 small'>Followers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='mt-5 mb-5'>
                            <div className='social_card youtube_card d-flex'>
                                <div className='icon_div'>
                                    <i className="fa-solid fa-play"></i>
                                </div>
                                <div>
                                    <p className='card_count mb-0'>8721</p>
                                    <p className='mb-0 small'>Subscribers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='mt-5 mb-5'>
                            <div className='social_card twittwer_card d-flex'>
                                <div className='icon_div'>
                                    <i className="fa-brands fa-twitter"></i>
                                </div>
                                <div>
                                    <p className='card_count mb-0'>7814</p>
                                    <p className='mb-0 small'>Tweets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialCard