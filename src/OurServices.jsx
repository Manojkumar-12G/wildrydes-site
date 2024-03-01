import './OurServices.css'; // Import the CSS file


  const services = [
    {
      id: 1,
      title: 'WEB DESIGN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'GRaPHIC DESIGN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      title: 'BRANDING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      title: 'MARKETING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  

function OurServices() {
    return (
        <section className="our-services-section">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="service-cards">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="circle">
                  <span className="star-icon">&#9733;</span>
               </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#yu" className="read-more-link">
                  Read More
                </a>
              </div>
            ))}
          </div>
        </section>
      );
}

export default OurServices
