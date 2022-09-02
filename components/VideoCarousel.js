import "./VideoCarousel.css";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

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
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
    },
    {
      id: 4,
      title: "video 4",
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
    },
    {
      id: 5,
      title: "video 5",
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
    },
    {
      id: 6,
      title: "video 6",
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
    },
    {
      id: 7,
      title: "video 7",
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
    },
    {
      id: 8,
      title: "video 8",
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
    },
    {
      id: 9,
      title: "video 9",
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
    },
    {
      id: 10,
      title: "video 10",
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
    },
    {
      id: 11,
      title: "video 11",
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
    },
    {
      id: 12,
      title: "video 12",
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
    },
    {
      id: 13,
      title: "video 13",
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
    },
    {
      id: 14,
      title: "video 14",
      src: "https://www.youtube.com/embed/nvUGqgegVpE",
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
    </>
  );
};

export default VideoCarousel;
