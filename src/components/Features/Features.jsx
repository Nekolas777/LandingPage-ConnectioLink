import { FeatureCard } from "./FeatureCard"

import { features } from '../../data/features-data'

export const Features = () => {

    return (
        <section className="bg-section py-20" id="feature">
            <div className="container-section">
                <div className="grid grid-rows-4 grid-cols-1 gap-20 font-poppins
          md:grid-rows-2 md:grid-cols-2 md:gap-y-20 md:gap-x-20 lg:px-16">
                    {
                        features.map(item =>
                            <FeatureCard
                                key={item.id} {...item}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}