import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import API_CONFIG from "../../config";

const Home = () => {
  const [movies, setMovies] = useState([]); // เก็บข้อมูลหนัง
  const [currentPage, setCurrentPage] = useState(1); // หน้าปัจจุบัน
  const [loading, setLoading] = useState(false); // สถานะโหลดข้อมูล
  const [totalPages, setTotalPages] = useState(1); // จำนวนหน้าทั้งหมด

  const fetchMovies = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(${API_CONFIG.BASE_URL}/movie/popular, {
        params: {
          api_key: API_CONFIG.API_KEY,
          language: API_CONFIG.LANGUAGE,
          page,
        },
      });
      setMovies((prevMovies) => [...prevMovies, ...response.data.results]); // รวมข้อมูลใหม่กับข้อมูลเดิม
      setTotalPages(response.data.total_pages); // อัปเดตจำนวนหน้าทั้งหมด
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(currentPage); // โหลดข้อมูลครั้งแรก
  }, [currentPage]);

  const handleSlideChange = (swiper) => {
    const { isEnd } = swiper; // ตรวจสอบว่าถึงสไลด์สุดท้ายหรือไม่
    if (isEnd && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1); // โหลดหน้าถัดไป
    }
  };

  return (
    <div>
      <h1>Popular Movies</h1>

      {loading && <div className="loader">Loading...</div>}

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={handleSlideChange} // ดักการเปลี่ยนสไลด์
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;