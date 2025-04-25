import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const carouselData = [
  {
    id: "1",
    text: "LET THERE BE LIGHT",
    authorName: "Alex Johnson",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    text: "DOOMS DAY RIGHT",
    authorName: "Jamie Smith",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    text: "AND THIS GOES FOREVER",
    authorName: "Taylor Rodriguez",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "4",
    text: "AFRAID OF TIME",
    authorName: "Morgan Chen",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "5",
    text: "NOT DOING MUCH IS MY TYPE",
    authorName: "Sarah Lee",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "6",
    text: "LET THERE BE LIGHT",
    authorName: "Alex Johnson",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "7",
    text: "DOOMS DAY RIGHT",
    authorName: "Jamie Smith",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "8",
    text: "AND THIS GOES FOREVER",
    authorName: "Taylor Rodriguez",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "9",
    text: "AFRAID OF TIME",
    authorName: "Morgan Chen",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "10",
    text: "NOT DOING MUCH IS MY TYPE",
    authorName: "Sarah Lee",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "11",
    text: "LET THERE BE LIGHT",
    authorName: "Alex Johnson",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "12",
    text: "DOOMS DAY RIGHT",
    authorName: "Jamie Smith",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "13",
    text: "AND THIS GOES FOREVER",
    authorName: "Taylor Rodriguez",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "14",
    text: "AFRAID OF TIME",
    authorName: "Morgan Chen",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "15",
    text: "NOT DOING MUCH IS MY TYPE",
    authorName: "Sarah Lee",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const moveCarousel = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
      }
    };

    const interval = setInterval(moveCarousel, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="p-6">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">Members</h2>
    <div className="grid grid-cols-6 gap-4">
      {carouselData.map((item) => (
        <Link
          to={`/batch/year/department/${item.authorName.toLowerCase().replace(/\s+/g, '-')}`}
          key={item.id}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-200"
        >
          <img
            src={item.image}
            alt={item.authorName}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h4 className="font-medium text-lg mb-2">{item.authorName}</h4>
          <p className="text-center text-gray-600">{item.text}</p>
        </Link>
      ))}
    </div>
  </div>
  );
};

export default Carousel;
