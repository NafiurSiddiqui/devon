import Image from 'next/image';
import React from 'react';
import HeroImage from '@image/hero-image.png';

export default function HomePage() {
	return (
		<section>
			<div>
				<Image
					src={HeroImage}
					alt="A macbook"
					placeholder="blur"
					// fill
					priority
				/>
			</div>

			<article></article>
		</section>
	);
}
