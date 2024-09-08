import React from "react";
import Service from "./Service";

import { GiThermometerCold } from "react-icons/gi";
import { PiWallLight } from "react-icons/pi";
import { LiaTapeSolid } from "react-icons/lia";

function Services() {
  return (
    <div className="block">
      <h2 className="heading">Our Services</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed nam unde
        fugiat possimus. Quidem nam voluptatum impedit reprehenderit vero quam.
      </p>
      <div className="my-16 flex flex-col md:flex-row gap-8 justify-center items-center">
        <Service
          name="Insulation"
          icon={<GiThermometerCold size={80} />}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                       fuga."
        />
        <Service
          name="Drywall"
          icon={<PiWallLight size={80} />}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                       fuga."
        />
        <Service
          name="Taping"
          icon={<LiaTapeSolid size={80} />}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                       fuga."
        />
      </div>
    </div>
  );
}

export default Services;
