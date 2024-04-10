import { Button } from "../Button/Button"
import { ServiceIcon } from "./ServiceIcon"

import PartnerOne from "../../assets/partner-logo-1.png"
import PartnerTwo from "../../assets/partner-logo-2.png"
import PartnerThree from "../../assets/partner-logo-3.png"
import PartnerFour from "../../assets/partner-logo-4.png"

const icons = [PartnerOne, PartnerTwo, PartnerThree, PartnerFour];

export const Service = () => {
    return (
        <section id="service" className="bg-section-alpha py-20">
            <div className="container-section font-lora grid grid-rows-custom md:grid-rows-1 
                grid-cols-1 md:grid-cols-2 gap-14 md:gap-0 px-0 lg:px-5">
                <div className="px-0 flex flex-col justify-center items-center
                    md:items-start text-center md:text-start gap-10">
                    <h1 className="text-black text-balance leading-normal md:leading-normal tracking-wide text-4xl md:text-5xl">
                        Taking care for your wellbeing and mental health with <span className="text-dark-green font-medium">the best partners</span>
                    </h1>
                    <Button name="Know More" />
                </div>
                <div className="grid grid-rows-auto grid-cols-2 
                    place-items-center gap-5 md:gap-10 p-0">
                    {
                        icons.map((icon, index) => 
                            <ServiceIcon
                                key={ index }
                                icon={ icon }
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}
