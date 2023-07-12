"use client";

import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavBar() {
	const isUserLoggedIn = true;
	const [providers, setProviders] = useState(null);
	const [toggleDropDown, setToggleDropDown] = useState(false);

	// useEffect(() => {
	// 	const setUpProviders = async () => {
	// 		const response = await getProviders();

	// 		setProviders(response);
	// 	};

	// 	setProviders();
	// }, []);

	return (
		<nav className="flex-between w-full mb-16 pt-3">
			<Link href="/" className="flex gap-2 flex-center">
				<Image
					src="/assets/images/logo-robot.svg"
					alt="Prompy Logo"
					width={40}
					height={40}
					className="object-contain"
				/>
				<p className="logo_text">Prompy</p>
			</Link>

			{/* Desktop Navigation */}

			<div className="sm:flex hidden">
				{isUserLoggedIn ? (
					<div className="flex gap-3 md:gap-5">
						<Link href="create-propmt" className="black_btn">
							Create Post
						</Link>

						<button type="button" onClick={signOut} className="outline_btn">
							Sign Out
						</button>

						<Link href="/profile">
							<Image
								src="assets/images/logo.svg"
								width={37}
								height={37}
								className="rounded-full"
								alt="profile"
							/>
						</Link>
					</div>
				) : (
					<>
						{providers &&
							object.values(providers).map((provider) => (
								<button
									type="button"
									key={provider.name}
									onClick={signIn(provider.id)}
									className="black_btn"
								>
									Sign In
								</button>
							))}
					</>
				)}
			</div>

			{/* Mobile Navigation */}

			<div className="sm:hidden flex relative">
				{isUserLoggedIn ? (
					<div className="flex">
						<Image
							src="assets/images/logo.svg"
							width={37}
							height={37}
							className="rounded-full"
							alt="profile"
							onClick={() => setToggleDropDown((prev) => !prev)}
						/>

						{toggleDropDown && (
							<div className="dropdown">
								<Link
									href="/profile"
									className="dropdown_link"
									onClick={() => setToggleDropDown(false)}
								>
									My Profile
								</Link>
								<Link
									href="/create-prompt"
									className="dropdown_link"
									onClick={() => setToggleDropDown(false)}
								>
									Create Prompt
								</Link>
								<button
									type="button"
									onClick={() => {
										setToggleDropDown(false);
										signOut();
									}}
									className="mt-5 w-full black_btn"
								>
									Sign Out
								</button>
							</div>
						)}
					</div>
				) : (
					<>
						{providers &&
							object.values(providers).map((provider) => (
								<button
									type="button"
									key={provider.name}
									onClick={signIn(provider.id)}
									className="black_btn"
								>
									Sign In
								</button>
							))}
					</>
				)}
			</div>
		</nav>
	);
}

export default NavBar;