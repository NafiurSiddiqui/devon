import Image from 'next/image';
import React from 'react';
import HeroImage from '@image/hero-image.png';
import Button from '../Button';

export default function HomePage() {
	return (
		<section className="relative z-10 ">
			<div className="relative flex justify-center leading-6  ">
				<Image
					className="supportForSafari  h-96 brightness-50 contrast-75  "
					src={HeroImage}
					alt="A macbook"
					placeholder="blur"
					width={'100%'}
					priority
				/>
				<article className={`borderTest absolute top-1/4 px-4  sm:w-4/5  `}>
					<h1 className={`pb-4 text-4xl text-slate-100 sm:text-6xl `}>
						Dev up
					</h1>
					<p
						className="text-bold
					borderTest 
					mb-7
					text-white
					"
					>
						Kick start your career with Devon and be a part of massive tech
						industry that always pays.
					</p>

					<div className="borderTest flex justify-between">
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
