import Image from 'next/image';
import React from 'react';
import HeroImage from '@image/hero-image.png';

export default function HomePage() {
	return (
		<section>
			<div className="relative">
				<Image src={HeroImage} alt="A macbook" placeholder="blur" priority />
				<article className={`borderTest absolute top-2 w-96 `}>
					<h1 className={`text-6xl text-white `}>Dev up</h1>
					<p
						className="text-bold
					text-white
					
					"
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
						placeat mollitia inventore sequi nemo facilis deserunt non nulla
						adipisci eum.
					</p>
				</article>
			</div>

			<article></article>
		</section>
	);
}
