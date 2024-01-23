
import React, { useState } from 'react';
import Slider from 'react-slick';                                                                                         
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import './Fourthpage.css';

const FourthPage = () => {
  const navigate = useNavigate(); 
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for movies with query: ${searchQuery}`);
  };
 
  const handleNext = () => {
    navigate('/moviesearch');
  };
  const carouselImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9hXsuBhmBji9WMd5yXXJbTs6yxGorpGiVw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvPk78q_aO7f2D_3NLt_uHf2cU_IqnKKD2zQzt-nunlehSFE-Foart5EYYw3lEyFR-ng&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhOM3Wq3f4_RPEyUalstbd7_p9hIeCtQ2Fzhz7-ADlvtUf6G9WX6gdiwmbZxnwCIMvyw&usqp=CAU',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RcQtcMWdt4iuwDnexi55bZ6yVdrOYlhxDw&usqp=CAU',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ28gF3pUuVhqADWjstB2ZfDPOq0FA6gwuQw&usqp=CAU',
    'https://e1.pxfuel.com/desktop-wallpaper/155/381/desktop-wallpaper-3-tamil-movie-three-movie-thumbnail.jpg',
    'https://im.jdmagicbox.com/comp/jd_social/news/2019apr24/image-1556095837292-8uq5wwy7st.jpg',
    'https://4.bp.blogspot.com/-cxpXnrB9kvU/TmrZwOQVp0I/AAAAAAAACig/h4OdQUOAjqQ/s1600/Mayakkam-Enna-Movie-Poster-Photos-Ninja+Romeo-4.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIO7NhxUJN1BJ_wI0NyLc3ReG2q49-beehiBFlOsjuUeqhYBDr8VZ9ECinJq_PVnqRd4&usqp=CAU',
  ];
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div className="FourthPage">
     
      <Slider {...carouselSettings}>
        {carouselImages.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Movie ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default FourthPage;


