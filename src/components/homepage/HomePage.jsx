import Image from 'next/image';
import React from 'react';
import HeroImage from '@image/hero-image.png';
import Button from '../Button';

export default function HomePage() {
	return (
		<section className="relative z-10 ">
			<div className="relative ">
				<Image
					className="supportForSafari  h-96 object-fill"
					src={HeroImage}
					alt="A macbook"
					placeholder="blur"
					width={'100%'}
					priority
				/>
				<article className={`borderTest absolute top-1/4 ml-4 w-full  `}>
					<h1 className={`text-4xl text-white sm:text-6xl `}>Dev up</h1>
					<p
						className="text-bold
					borderTest w-5/6
					text-white
					
					"
					>
						Kick start your career with Devon and be a part of massive tech
						industry that always pays.
					</p>

					<div className="borderTest flex w-5/6 justify-between">
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
