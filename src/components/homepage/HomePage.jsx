import Image from 'next/image';
import React from 'react';
import HeroImage from '@image/hero-image.png';
import Button from '../Button';

export default function HomePage() {
	return (
		<>
			<section className="borderTest relative z-10 h-screen overflow-hidden">
				<div className="relative flex h-screen flex-col items-center">
					<Image
						className="supportForSafari   h-screen brightness-50 contrast-75 tablet-md:object-cover "
						src={HeroImage}
						alt="A macbook"
						placeholder="blur"
						width={'100%'}
						height={'100%'}
						priority={true}
					/>
					<article
						className={` absolute top-1/4  px-6 android-md:w-[22rem] tablet:left-8 tablet:w-[22rem] tablet-md:w-[22rem]  `}
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

					<div className="absolute -bottom-[6.438rem] -left-[2rem] h-[12rem] w-[100rem] rotate-[7deg] bg-slate-50  ">
						<h2 className="relative -top-12 ml-8 -rotate-[7deg] text-2xl font-semibold  text-gray-700">
							Should you signup?
						</h2>
					</div>
				</div>
			</section>
			{/* SECOND SECTION */}
			<section className="borderTest h-screen py-4">
				<article className="borderTest my-4 mx-2 pt-4">
					<p className="mb-4 font-semibold text-gray-700">
						Signing up lets you track your progress, rewards, follow and
						interacts with others in the community.
					</p>

					<div className="borderTest flex items-center justify-center">
						<span className=" inline-block  h-1 w-full border-t-2 border-slate-400 "></span>
						<Button path={'/signup'} type={'fill'}>
							Sign up
						</Button>
					</div>
				</article>

				<article className="">
					<p>
						Signing up lets you track your progress, rewards, follow and
						interacts with others in the community.
					</p>

					<div>
						<hr />
						<Button path={'/guest'} type={'no-fill'}>
							Guest
						</Button>
					</div>
				</article>
			</section>
		</>
	);
}
