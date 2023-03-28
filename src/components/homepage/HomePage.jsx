import Image from 'next/image';
import React from 'react';
import HeroImage from '@image/hero-image.png';
import Button from '../Button';

export default function HomePage() {
	return (
		<>
			<section className=" relative z-10 h-screen overflow-hidden">
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
						className={` absolute top-1/4  px-6 android-md:w-[22rem] tablet:left-8 tablet:w-[30rem] tablet-md:w-[36rem] desktop:w-[44rem] desktop-md:left-32  `}
					>
						<h1
							className={`pb-4 text-6xl font-bold text-slate-100 tablet-md:text-8xl desktop:text-9xl`}
						>
							Dev up
						</h1>
						<p
							className="text-bold
					 my-7
					text-lg
					text-white
					tablet:pr-4
					tablet:text-2xl
					desktop:text-4xl
					"
						>
							Kick start your career with Devon and be a part of massive tech
							industry that always pays.
						</p>

						<div className=" mt-16 flex justify-between tablet:w-[22rem] tablet-md:w-[32rem] ">
							<Button path={'/signup'} type={'fill'}>
								Sign up
							</Button>
							<Button path={'/guest'} type={'no-fill-dark'}>
								Guest
							</Button>
						</div>
					</article>

					<div className="absolute -bottom-[11rem] -left-[2rem] h-[14rem] w-[150rem] rotate-[7deg] bg-slate-50   ">
						<h2 className="laptop:-top-22 tablet-md:4xl relative -top-20 ml-16 h-80 -rotate-[7deg] text-2xl  font-semibold text-stone-600  laptop:text-4xl desktop-md:ml-20">
							Should you signup?
						</h2>
					</div>
				</div>
			</section>
			{/* SECOND SECTION */}
			<div className=" mb-8 justify-center tablet:flex tablet-md:h-[60vh]">
				<section className="  py-4 px-2 leading-6 android-md/2:px-4  tablet:w-4/5 desktop:w-3/5 ">
					<div className=" ">
						<article className="my-10 mx-2 rounded border border-stone-300 p-6   tablet-md:w-4/5 tablet-md:px-6 laptop:w-[50rem] laptop:px-8">
							<p className="mb-4 font-semibold text-stone-700 tablet:text-xl tablet-md:w-4/5  desktop-md:text-3xl">
								Signing up lets you track your progress, rewards, follow and
								interacts with others in the community.
							</p>

							<div className=" flex items-center justify-between">
								<span className=" inline-block  h-1 w-[55%] border-t-2 border-slate-400 pr-4 tablet-md:w-2/5"></span>
								<Button path={'/signup'} type={'fill'}>
									Sign up
								</Button>
							</div>
						</article>
					</div>

					<div className=" tablet:flex tablet:justify-end">
						<article className="my-10 mx-2 rounded border border-stone-300 p-6   tablet-md:w-4/5 tablet-md:px-6 laptop:w-[50rem] laptop:px-8">
							<p className="mb-4 font-semibold text-stone-700 tablet:text-xl tablet-md:w-4/5  desktop-md:text-3xl">
								Or you can start learning right away without saving your
								progress.
							</p>

							<div className=" flex items-center justify-between">
								<span className=" inline-block  h-1 w-[55%] border-t-2 border-slate-400 pr-4 tablet-md:w-3/5"></span>
								<Button path={'/guest'} type={'no-fill'}>
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
