import './OurAdvantages.css'; 

function OurAdvantagesSection(){
  const advantages = [
    {
      id: 1,
      imageSrc: 'images/bulbimage2.jpg', // Replace with actual image source
      title: 'INNOVATION',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      imageSrc: 'images/clockimage.png', // Replace with actual image source
      title: 'QUALITY',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      imageSrc: 'images/likebutton.png', // Replace with actual image source
      title: 'EXPERIENCE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      imageSrc: 'images/messageimage.png', // Replace with actual image source
      title: 'HAPPY CLIENTS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 5,
      imageSrc: 'images/peopleimage.png', // Replace with actual image source
      title: 'SUPPORT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <section className="our-advantages-section">
      <h2>Our Advantages</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <div className="advantage-list">
        {advantages.map((advantage) => (
          <div key={advantage.id} className="advantage-item">
            <div>
            <img src={advantage.imageSrc} alt={`Advantage ${advantage.id}`} />
            </div>
            <h3>{advantage.title}</h3>
            <p>{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAdvantagesSection;
