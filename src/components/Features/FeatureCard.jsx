
export const FeatureCard = ({ name, description, img }) => {

    return (
        <article className="text-primary text-center text-wrap
            flex flex-col items-center px-0 sm:px-5">
            <img className="w-32 h-32" src={img} alt={name} />
            <h2 className="text-2xl font-semibold mt-5 mb-4">{name}</h2>
            <p className="text-lg text-slate-700 leading-relaxed">{description}</p>
        </article>
    )

}