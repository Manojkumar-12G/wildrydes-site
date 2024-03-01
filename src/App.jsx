// import { useState } from "react"; 
import NavBar from './NavBar';
import Carousel from './Carousel';
import StartYourProject from './StartYourProject';
import OurAdvantagesSection from './OurAdvantages';
import OurServices from './OurServices';
import FooterSection from './FooterSection';

const items = [
  {
    header: 'First Slide We ARE EXPERTS-1',
    body: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit Nesciunt sunt cupiditate, aut quis pariatur sint harum dolore ipsam rem deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit Nesciunt sunt cupiditate, aut quis pariatur sint harum dolore ipsam rem delenitiLorem ipsum dolor sit amet, consectetur adipisicing elit Nesciunt sunt cupiditate, aut quis pariatur sint harum dolore ipsam rem deleniti repudiandae, voluptatum dicta dignissimos? Aperiam, sed! Quo tempore debitis nostrum..',
  },
  {
    header: 'Second Slide We ARE EXPERTS-2',
    body: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sunt cupiditate, aut quis pariatur sint harum dolore ipsam rem deleniti repudiandae, voluptatum dicta dignissimos? Aperiam, sed! Quo tempore debitis nostrum.',
  },
  {
    header: 'Third Slide We ARE EXPERTS-3',
    body: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sunt cupiditate, aut quis pariatur sint harum dolore ipsam rem deleniti repudiandae, voluptatum dicta dignissimos? Aperiam, sed! Quo tempore debitis nostrum.',
  },
];

function App() {
    return (
        <div>
            <NavBar />
            <Carousel items={items} />
            <OurAdvantagesSection />
            <StartYourProject />
            <OurServices />
            <FooterSection />
        </div>
    )
}


export default App
