import React from "react";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const images = [
  {
    src: require("../images/library.jpg"),
    description:
      "NIT Trichy has a modern central library with more than two and a half lakh of documents consisting of technical books, reports, standards, compact disks and back volumes of journals. The library subscribes to more than two hundred print periodicals, more than five thousand e-Journals and more than six hundred e-books besides a holding of around eighteen thousand back volumes of journals. The library also contains around two lakh books in the Book Bank scheme. The institute is holding membership with British Council Library, Chennai. They are also holding membership with Developing Library Network, New Delhi and providing Inter-Library Loan services to the users. The library also provides air-conditioned and Wi-Fi enabled reading halls. It is situated opposite to the civil engineering department building. The building also houses the Centre for Entrepreneurial Development and Incubation (CEDI). The old library building temporarily houses the Indian Institute of Management, Tiruchirappalli.",
  },
  {
    src: require("../images/clock.jpg"),
    description:
      "The administrative building with its clock tower is one of the institute's landmarks. This building houses the administrative offices and also the offices of the director and deans. The eastern and western wings of this building were occupied by the physics and chemistry departments respectively prior to the opening of new building buildings for the same departments in 2016.",
  },
  {
    src: require("../images/3.jpg"),
    description:
      "The Third i building and octagon is the institute's primary computer centre, with eight computer labs, printing facilities and a variety of engineering software for use by students. The Octagon also serves as a central hub for interconnecting the campus-wide LAN. This LAN caters to totally six thousand users across the campus and has a 10 Gbit/s fibre optic backbone. The original facility, opened in 1990, was extended into the second building in 2006; there are plans to further expand the facility in view of the increase in student enrollment. A brand new computer centre was inaugurated in the year 2016 which houses more than three hundred computers.",
  },
  {
    src: require("../images/festember.jpg"),
    description:
      "Festember is the annual national-level cultural festival of the institute. Held every year since 1975 during the month of September, this event encompasses music, dance and literary competitions, with thousands of participants from colleges all over the country vying for the trophy. The event has seen performances by Indian musicians including Karthik, Srinivas, Naresh Iyer, Kadri Gopalnath, Sivamani and Benny Dayal as well as bands like Indian Ocean, Euphoria and Silk Route. 'ProNites' or 'ProShows', Festember's most anticipated events, usually form the grand finale after the valediction ceremony. Also on the agenda are the various literary competitions split up between English, Hindi and Tamil, along with the cultural and arts events. Festember derives its name from the phrase, A Fest to Remember and not from A-Fest in September as is popularly believed due to its falling in the month of September every year.",
  },
  {
    src: require("../images/gate.jpg"),
    description:
      "The campus spans 800 acres (3.2 km2) and is one of the largest academic campuses in India. The main entrance is located on the southern end of the campus, facing National Highway 67. There is one other entrance, popularly called the Staff Gate. The institute's academic facilities are located in the southern half of the campus; these include the department buildings, laboratories and workshops, lecture halls, computer centres and the central library. The campus has separate buildings for the departments of nine engineering, architecture, management, computer applications, energy and environment engineering.",
  },
  {
    src: require("../images/lab.jpg"),
    description:
      "The Octagon is the institute's primary computer centre, with eight computer labs, printing facilities and a variety of engineering software for use by students. The Octagon also serves as a central hub for interconnecting the campus-wide LAN. This LAN caters to totally six thousand users across the campus and has a 10 Gbit/s fibre optic backbone. The original facility, opened in 1990, was extended into the second building in 2006; there are plans to further expand the facility in view of the increase in student enrollment. A brand new computer centre was inaugurated in the year 2016 which houses more than three hundred computers.",
  },
  {
    src: require("../images/tnp.jpg"),
    description:
      "The Training and Placement Building is where the training for the placement of students happen. The TnP does a really good job of providing placements to students.",
  },
  {
    src: require("../images/Alumni.jpg"),
    description:
      " National Institute of Technology, Tiruchirappalli alumni include Chief Executive Officers and top executives of Fortune India 500 and Forbes Global 2000 companies such as Natarajan Chandrasekaran, chairman of Tata Sons;Rajesh Gopinathan, former CEO and managing director of Tata Consultancy Services; T. V. Narendran, CEO and managing director of Tata Steel; K. R. Sridhar, CEO and founder of Bloom Energy and R. Ravimohan, former executive director of Reliance Industries.In the academic world, they include deans and chairs of faculties such as Nagi Naganathan, president of the Oregon Institute of Technology; Guruswami Ravichandran, chair of the Division of Engineering and Applied Science and Professor of Aerospace and Mechanical Engineering at the California Institute of Technology; Ramesh R. Rao, director of the California Institute for Telecommunications and Information Technology and Professor of Electrical and Computer Engineering at the University of California, San Diego; Nambirajan Seshadri, Professor of Practice of Electrical and Computer Engineering at the University of California, San Diego, Rajkumar Chellaraj, CFO and associate dean of the Stanford Graduate School of Business; Venkat Selvamanickam, Professor of Mechanical Engineering and Physics, director of the Texas Center for Superconductivity at the University of Houston; and Nagarajan Ranganathan, Distinguished Professor of Computer Science and Engineering at the University of South Florida.",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Campus Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              data-src={image.src}
              className="lazyload"
              alt={`Campus ${index + 1}`}
            />
            <p className="description">{image.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Gallery;
