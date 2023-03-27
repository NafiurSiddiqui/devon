import Image from 'next/image';
import React from 'react';
import HeroImage from '@image/hero-image.png';
import Button from '../Button';

export default function HomePage() {
	return (
		<>
			<section className="borderTest relative z-10 h-screen">
				<div className="relative flex h-screen flex-col justify-center">
					<Image
						className="supportForSafari  h-screen brightness-50 contrast-75 tablet:h-full tablet-md:object-cover "
						src={HeroImage}
						alt="A macbook"
						placeholder="blur"
						width={'100%'}
						height={'100%'}
						priority={true}
					/>
					<article
						className={` absolute top-1/4 w-[90%] px-4 android-md:w-[22rem] tablet:left-8 tablet:w-[22rem] tablet-md:w-[22rem]  `}
					>
						<h1 className={`sm:text-6xl pb-4 text-4xl text-slate-100 `}>
							Dev up
						</h1>
						<p
							className="text-bold
					 
					mb-7
					text-white
					"
						>
							Kick start your career with Devon and be a part of massive tech
							industry that always pays.
						</p>

						<div className=" flex justify-between">
							<Button path={'/signup'} type={'fill'}>
								Sign up
							</Button>
							<Button path={'/guest'} type={'no-fill-dark'}>
								Guest
							</Button>
						</div>
					</article>

					<div className="w-ful relative bottom-10 w-full bg-slate-300 pt-8 pb-14 ">
						<h2>Why should you signup</h2>
					</div>
				</div>
			</section>
			<section>
				<h1>Second page</h1>
			</section>
		</>
	);
}
