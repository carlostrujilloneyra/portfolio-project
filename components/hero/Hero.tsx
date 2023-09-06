'use client'

import Typewriter from 'typewriter-effect';

export const Hero = () => {
	return (
		<>
			<div className="container grid grid-cols-1 gap-y-12 sm:gap-y-8 py-8 sm:py-12 lg:gap-y-0 lg:grid-cols-2 lg:gap-x-9 min-[1250px]:grid-cols-hero-grid-max padding-x">
				<h1 className="text-whiteColor font-extrabold text-4xl sm:text-5xl leading-[42px] sm:leading-[54px] text-center lg:text-left mb-7 sm:mb-9 lg:text-[52px] lg:leading-[57px] min-[1500px]:leading-[64px] lg:mb-0">¡Hola!, me llamo Carlos y soy <span className="frontend-gradient">
					<Typewriter
						options={{
							strings: [
								'Desarrollador Frontend',
								'Programador Web',
								'React Developer',
								'Desarollador Web'
							],
							deleteSpeed: 80,
							wrapperClassName: 'frontend-gradient',
							cursorClassName: 'cursor-typewriter',
							autoStart: true,
							loop: true,
							delay: 120,
						}
						}
					/>
				</span>
				</h1>

				<div>
					<h2 className="text-whiteColor font-bold text-3xl sm:text-[32px] lg:text-[40px] mb-4 lg:mb-5">Acerca de mí</h2>
					<p className="text-colorText font-light text-[17px] text-justify leading-[27px]">Apasionado, responsable y altamente organizado, poseo habilidades para trabajar de manera efectiva en equipo y con capacidad de adaptación a cambios. Me considero una persona comprometida con el inicio y el desarrollo de diversos proyectos tecnológicos.</p>
				</div>

			</div>
		</>
	)
}
