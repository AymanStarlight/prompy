"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
	return (
		<div className="mt-10 prompt_layout">
			{data.map((post) => (
				<PromptCard
					key={post._id}
					post={post}
					handleTagClick={handleTagClick}
				/>
			))}
		</div>
	);
};

function Feed() {
	const [searchText, setSearchText] = useState("");
	const [posts, setPosts] = useState([]);
	const [sPosts, setSPosts] = useState([]);

	const [queries, setQueries] = useState(null);

	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
		handleSearch();
	};

	const handleSearch = () => {
		for (let tgs of queries.tags) {
			if (tgs.toLowerCase().includes(searchText)) {
				setSPosts(posts.filter((post) => post.tag === tgs));
			} else {
			}
		}
		for (let uss of queries.users) {
			if (uss.toLowerCase().includes(searchText)) {
				setSPosts(posts.filter((post) => post.creator.username === uss));
			} else {
			}
		}
	};

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("api/prompt");
			const data = await response.json();

			setPosts(data);
		};

		fetchPosts();
	}, []);

	useEffect(() => {
		const us = posts.map((post) => post.creator.username);
		const ts = posts.map((post) => post.tag);

		setQueries({
			users: us,
			tags: ts,
		});

		if (searchText.length < 2) {
			setSPosts([]);
		}
	}, [searchText]);

	return (
		<section className="feed">
			<form
				className="relative w-full flex-center"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					type="text"
					className="search_input peer"
					placeholder="Search for tags or usernames"
					value={searchText}
					onChange={handleSearchChange}
					required
				/>
			</form>
			{sPosts.length !== 0 ? (
				<PromptCardList data={sPosts} handleTagClick={() => {}} />
			) : (
				<PromptCardList data={posts} handleTagClick={() => {}} />
			)}
		</section>
	);
}

export default Feed;
