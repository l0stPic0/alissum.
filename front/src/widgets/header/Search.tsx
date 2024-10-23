import type { FC } from "react";

const Search: FC = () => {
	return (
		<label className="relative text-secondary">
			<button
				className="rounded-full size-10 bg-white flex items-center justify-center absolute left-1 top-1/2 -translate-y-1/2"
				type="button"
				aria-label="Поиск"
			>
				<svg
					width="15"
					height="14"
					viewBox="0 0 15 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13.7998 13L10.8998 10.1M12.4665 6.33333C12.4665 9.27885 10.0787 11.6667 7.13314 11.6667C4.18762 11.6667 1.7998 9.27885 1.7998 6.33333C1.7998 3.38781 4.18762 1 7.13314 1C10.0787 1 12.4665 3.38781 12.4665 6.33333Z"
						stroke="currentColor"
						strokeWidth="1.66667"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
			<input
				className="bg-secondary/10 rounded-full placeholder:text-secondary py-3 pl-14 pr-4 font-medium"
				type="text"
				placeholder="Поиск"
			/>
		</label>
	);
};

export default Search;
