import React from "react";
import CountryCard from "./CountryCard";
import img3 from "../../assets/Images/index-3.jpg";
import img4 from "../../assets/Images/zanz.jpeg";
import img5 from "../../assets/Images/UG.jpg";
import img6 from "../../assets/Images/kenya.jpg";
import img1 from "../../assets/Images/congo.jpg";
const countries = [
  {
    country: "Rwanda",
    tours: 1,
    image: img3,
    description:
  " Embarking on a gorilla trek in the misty, emerald peaks of Rwanda is an experience that transcends words. The heart pounds with anticipation as we step into the lush, untamed wilderness, surrounded by the raw beauty of the Volcanoes National Park. Every footstep feels sacred, a pilgrimage through nature's sanctuary. Suddenly, we are face-to-face with the gentle giants of the forest — the mountain gorillas. Time seems to stand still. There’s a powerful, almost indescribable connection that stirs deep emotions. Their soulful eyes meet ours, silently telling stories of survival, strength, and the shared threads of life that bind all living beings. It’s a moment of profound humility and gratitude. Watching these magnificent creatures interact with their families, so tender and yet so strong, reminds us of the fragile balance of life and the urgency to protect it. The experience is not just an encounter — it’s a stirring, transformative journey into the heart of nature, leaving us with a sense of wonder that lingers long after the trek has ended. It feels sacred, a pilgrimage through nature's sanctuary."
},

  {
    country: "Tanzania",
    tours: 3,
    image: img4,
    description:
      "Our journey to Zanzibar was nothing short of magical, a serene escape to paradise where the rhythm of the Indian Ocean kisses the white-sand shores. The air was filled with the fragrance of exotic spices, as if history itself was whispering tales of ancient trade routes and cultural fusion. Every corner of this island felt alive with a sense of mystique and timeless beauty.\n\n" +
      "As we walked through the narrow, winding streets of Stone Town, we were transported to a different era. The intricate carvings on the wooden doors, the bustling markets, and the rich blend of African, Arabic, and European influences created an atmosphere that was both enchanting and humbling. Here, history breathes, and we found ourselves lost in the stories etched into the very fabric of this island.\n\n" +
      "But it was the crystal-clear waters that stole our hearts. The vibrant coral reefs teemed with life, offering a kaleidoscope of colors as we snorkeled through the warm, gentle waves. The sunsets in Zanzibar were nothing short of breathtaking, painting the sky with shades of pink, orange, and gold as the day quietly melted into night." +
      "Zanzibar wasn’t just a destination — it was an awakening of the senses, a retreat where the soul finds peace in nature’s purest form. Every sound of the ocean, every warm breeze, every smile from the locals reminded us of the simple joys of life. We left with our hearts full, forever touched by the beauty and serenity of this unforgettable island.",
  },

  {
    country: "Kenya",
    tours: 2,
    image: img6,
    description:
      "Our journey through the Kenyan forests, immersed in the rich culture of the Maasai tribe, was truly unforgettable. The natural beauty of the landscape — vast savannahs, dense forests, and the distant calls of wildlife — made every moment feel magical. \n\n" +
      "Meeting the Maasai was profound. Their deep connection to the land, vibrant traditions, and welcoming spirit left us in awe. We learned about their way of life, sharing stories around a fire under the stars. It was a humbling experience that reminded us of the importance of harmony with nature and community. This trip will stay with us forever.",
  },

  {
    country: "Uganda",
    tours: 1,
    image: img5,
    description:
      "Our time in the Ugandan forest was like stepping into a hidden paradise. The dense greenery opened up to reveal a serene swamp, where antelopes gathered in peaceful numbers. Watching them gracefully sip from the water, surrounded by the stillness of nature, felt almost otherworldly.\n\n" +
      "The sight of so many antelopes, moving in harmony, was a reminder of the beauty and balance of life in the wild. The quiet rustle of the forest and the gentle sounds of the animals created a tranquil, unforgettable moment that connected us deeply to the wilderness.",
  },

  {
    country: "DRC",
    tours: 5,
    image: img1,
    description:
      "Our experience at the Livingstone Falls in Congo was nothing short of breathtaking. The sheer power of the falls left us in awe, with the thunderous roar of the water crashing against the rocks creating a humbling sense of nature’s might. Mist rose from the falls, dancing in the sunlight and casting rainbows in the air, a beautiful contrast to the wild, untamed energy of the river.\n\n" +
      "Standing there, we were overcome by the raw beauty of the landscape — the rushing waters carving their way through the rugged terrain. It was a moment of awe and reflection, where the force of nature and the peace of the surroundings collided, leaving us with a lasting memory of Congo’s untamed wilderness.",
  },
];

const CountryList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-8 bg-white">
      {countries.map((item, index) => (
        <CountryCard
          key={index}
          country={item.country}
          tours={item.tours}
          image={item.image}
          description={item.description ?? "No description available"}
        />
      ))}
    </div>
  );
};

export default CountryList;
