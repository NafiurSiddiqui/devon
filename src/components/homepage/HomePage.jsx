import Image from 'next/image';
import React from 'react';
import HeroImage from '@image/hero-image.png';
import Button from '../Button';

export default function HomePage() {
	return (
		<>
			<section className=" relative z-10 h-screen overflow-hidden">
				<div className="relative flex h-screen flex-col items-center ">
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
						className={`borderTest  absolute top-[20%]  px-6  android-md/2:w-[28rem] tablet:left-8 tablet:w-[30rem] tablet-md:w-[36rem] desktop:w-[44rem] desktop-md:left-32  `}
					>
						<h1
							className={`pb-4 text-5xl font-bold text-slate-100  desktop:text-5xl`}
						>
							Dev up
						</h1>
						<p
							className="text-bold
					 my-1
					text-base
					text-white
					tablet:pr-4
					tablet:text-lg
				
					desktop:text-xl
					"
						>
							Kick start your career with Devon and be a part of massive tech
							industry that always pays.
						</p>

						<div className=" mt-16 flex justify-between tablet:w-[26rem]  ">
							<Button path={'/signup'} type={'fill'}>
								Sign up
							</Button>
							<Button path={'/guest'} type={'no-fill-dark'}>
								Guest
							</Button>
						</div>
					</article>

					<div className="absolute -bottom-[9rem] -left-[2rem] h-[14rem] w-[150rem] rotate-[7deg] bg-slate-50   ">
						<h2 className="laptop:-top-22 relative -top-24 ml-16 h-80 -rotate-[7deg] text-xl font-semibold  text-stone-600 tablet-md:text-2xl  desktop-md:-top-20 desktop-md:ml-44">
							Should you signup?
						</h2>
					</div>
				</div>
			</section>
			{/* SECOND SECTION */}
			<div className=" mb-8 justify-center tablet:flex ">
				<section className="  py-4 px-2 leading-6 android-md/2:px-4  tablet:w-4/5 desktop:w-3/5 ">
					<div className=" tablet:flex tablet:justify-start">
						<article className="my-10 mx-2 rounded border border-stone-300 p-6   tablet:max-w-lg tablet-md:px-6 laptop:w-[50rem] laptop:px-8  ">
							<p className="mb-4 text-sm font-semibold leading-6 text-stone-700 	laptop:text-lg  desktop-md:text-xl">
								Signing up lets you track your progress, rewards, follow and
								interacts with others in the community.
							</p>

							<div className=" flex items-center justify-between">
								<span className=" inline-block  h-1 w-[45%] border-t-2 border-slate-400 pr-4 tablet-md:w-2/5"></span>
								<Button path={'/signup'} type={'fill'} singleBtn={true}>
									Sign up
								</Button>
							</div>
						</article>
					</div>

					<div className=" tablet:flex tablet:justify-end">
						<article className="my-10 mx-2 rounded border border-stone-300 p-6 tablet:max-w-lg   tablet-md:px-6 laptop:w-[50rem] laptop:px-8">
							<p className="mb-4 text-sm font-semibold leading-6 text-stone-700 laptop:text-lg  desktop-md:text-xl">
								Or you can start learning right away without saving your
								progress.
							</p>

							<div className=" flex items-center justify-between">
								<span className=" inline-block  h-1 w-[45%] border-t-2 border-slate-400 pr-4 "></span>
								<Button path={'/guest'} type={'no-fill'} singleBtn={true}>
									Guest
								</Button>
							</div>
						</article>
					</div>
				</section>
			</div>
		</>
	);
}
