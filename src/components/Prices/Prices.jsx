import { Button } from '../Button/Button';
import './Prices.css';

export const Prices = () => {
    return (
        <section id="prices" className="py-20 bg-section-alpha">
            <div className="container-section flex flex-col gap-10">
                <h1 className="font-lora text-center md:text-start font-medium text-5xl text-black">Join our exclusive commmunity</h1>
                <p className="font-poppins text-center md:text-start text-xl leading-relaxed mb-5">Subscribe to join our exclusive community. Connect with others, share insights,<br />and grow together on your path to emotional well-being.</p>
                <div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 px-0 md:px-20 lg:px-0 lg:grid-cols-3 gap-10 font-poppins">
                    <article className="price py-8 rounded-lg px-10 flex flex-col gap-10 bg-slate-50">
                        <h3 className='text-center text-blue-800 font-medium'>Freemium</h3>
                        <h1 className='text-center text-5xl text-blue-800'>0$<span className='ml-1 text-sm text-sky-600'>/month</span></h1>
                        <div className='self-start md:self-center lg:self-start'>
                            <ul className="ml-5 order-list flex flex-col gap-6">
                                <li>Acceso a foros en linea</li>
                                <li>Talleres y eventos gratuitos</li>
                                <li>Personalizacion de perfil</li>
                                <li>Reserva de citas por pago</li>
                                <li>Acceso a talleres por pago</li>
                                <li className='invisible'>Relleno</li>
                                <li className='invisible'>Relleno</li>
                            </ul>
                        </div>
                        <Button
                            name="Choose Plan"
                        />
                    </article>
                    <article className="price py-8 rounded-lg px-10 flex flex-col gap-10 bg-slate-50">
                        <h3 className='text-center text-blue-800 font-medium'>Community</h3>
                        <h1 className='text-center text-5xl text-blue-800'>24.99$<span className='ml-1 text-sm text-sky-600'>/month</span></h1>
                        <div className='self-start md:self-center lg:self-start'>
                            <ul className="ml-5 order-list flex flex-col gap-6">
                                <li>Acceso a foros en linea</li>
                                <li>Talleres y eventos exclusivos</li>
                                <li>Personalizacion de perfil</li>
                                <li>Terapia personalizada individual</li>
                                <li>Gráfica de analisis emocional</li>
                                <li>Reserva de cinco citas gratuitas</li>
                                <li>Acceso a comunidades de apoyo</li>
                            </ul>
                        </div>
                        <Button
                            name="Choose Plan"
                        />
                    </article>
                    <article className="price py-8 rounded-lg px-10 flex flex-col gap-10 bg-slate-50">
                        <h3 className='text-center text-blue-800 font-medium'>Premium</h3>
                        <h1 className='text-center text-5xl text-blue-800'>12.99$<span className='ml-1 text-sm text-sky-600'>/month</span></h1>
                        <div className='self-start md:self-center lg:self-start'>
                            <ul className="ml-5 order-list flex flex-col gap-6">
                                <li>Acceso a foros en linea</li>
                                <li>Talleres y eventos exclusivos</li>
                                <li>Personalizacion de perfil</li>
                                <li>Gráfica de analisis emocional</li>
                                <li>Reserva de tres citas gratuitas</li>
                                <li>Acceso a comunidades de apoyo</li>
                                <li className='invisible'>Relleno</li>
                            </ul>
                        </div>
                        <Button
                            name="Choose Plan"
                        />
                    </article>
                </div>
            </div>
        </section>
    )
}
