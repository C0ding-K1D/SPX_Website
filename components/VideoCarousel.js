import "./VideoCarousel.css";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import tv from "../assets/tv.jpg";
import interview from "../assets/interview.png";

const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      title: "video 1",
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
    },
    {
      id: 2,
      title: "video 2",
      src: "https://www.youtube.com/embed/sSzAHi6vncU",
    },
    {
      id: 3,
      title: "video 3",
      src: "https://www.youtube.com/embed/LQnF-J6JwGM",
    },
    {
      id: 4,
      title: "video 4",
      src: "https://www.youtube.com/embed/FVMbB9Zr_l0",
    },
    {
      id: 5,
      title: "video 5",
      src: "https://www.youtube.com/embed/1zpq20tiu-I",
    },
    {
      id: 6,
      title: "video 6",
      src: "https://www.youtube.com/embed/D4t-VMvvQ6s",
    },
    {
      id: 7,
      title: "video 7",
      src: "https://www.youtube.com/embed/fyJKzBKH1h0",
    },
    {
      id: 8,
      title: "video 8",
      src: "https://www.youtube.com/embed/gnO2Wzuuruk",
    },
    {
      id: 9,
      title: "video 9",
      src: "https://www.youtube.com/embed/oUfOvTH0UU4",
    },
    {
      id: 10,
      title: "video 10",
      src: "https://www.youtube.com/embed/vXdL9aEMRcY",
    },
    {
      id: 11,
      title: "video 11",
      src: "https://www.youtube.com/embed/hZbwL-RPy7Y",
    },
    {
      id: 12,
      title: "video 12",
      src: "https://www.youtube.com/embed/eww5Avy3Uwo",
    },
    {
      id: 13,
      title: "video 13",
      src: "https://www.youtube.com/embed/JA6KKoydtPg",
    },
  ];

  return (
    <>
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                width="100%"
                pip={true}
                controls={true}
                playing={false}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="media-container">
        <img className="tv-icon" src={tv} alt="" />
        <h1 className="media-heading">SPX Performed X-Ray's on ASAP Rocky</h1>
        <p className="video-text">for</p>
        <img className="interview-img" src={interview} alt="" />
        <p className="video-text">Magazine</p>
      </div>
    </>
  );
};

export default VideoCarousel;
