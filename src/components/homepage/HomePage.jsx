import Image from 'next/image';
import React from 'react';
import HeroImage from '@image/hero-image.png';
import Button from '../Button';

export default function HomePage() {
	return (
		<section>
			<div className="relative">
				<Image
					className="supportForSafari"
					src={HeroImage}
					alt="A macbook"
					placeholder="blur"
					priority
				/>
				<article className={`borderTest absolute top-2 w-96 `}>
					<h1 className={`text-6xl text-white `}>Dev up</h1>
					<p
						className="text-bold
					text-white
					
					"
					>
						Kick start your career with Devon and be a part of massive tech
						industry that always pays.
					</p>

					<div className="borderTest flex w-full justify-between">
						<Button path={'/signup'} type={'fill'}>
							Sign up
						</Button>
						<Button path={'/guest'} type={'no-fill-dark'}>
							Guest
						</Button>
					</div>
				</article>
			</div>

			<article></article>
		</section>
	);
}
