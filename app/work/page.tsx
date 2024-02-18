import Link from "next/link"

export default function Page() {
	return (
		<section>
			<h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
			<div className="prose prose-neutral dark:prose-invert">
				<p>
					On my way to make people's life easier with love, here's a summary of
					my work so far.
				</p>
				<hr className="my-6 border-neutral-100 dark:border-neutral-800" />
				<h2 className="font-medium text-xl mb-1 tracking-tighter">Realsoft</h2>
				<p className="text-neutral-600 dark:text-neutral-400 text-sm">
					Fullstack developer
				</p>
				<p>
					I joined <a href="https://realsoft.uz">Realsoft</a> on September 2023
					as a fullstack developer. I have been working with the{" "}
					<strong>React.js</strong> and <strong>Vue.js</strong> teams to ship
					beatiful, robust and accessible user interfaces
				</p>
				<ul>
					<li>
						In September, I started my internship by helping the{" "}
						<Link href="https://expert.uz">expert.uz</Link> team to build the{" "}
						<Link href="https://expert.uz/pages/community_catalog">
							<strong>community</strong>
						</Link>{" "}
						module almost from scratch. I used tools like{" "}
						<strong>PostgreSQL</strong> and <strong>Vue.js</strong>. We{" "}
					</li>
					<li>
						In November, I was promoted to Junior fullstack developer at
						Realsoft and started working on the project called{" "}
						<Link href="https://kh.smart-agro.uz/">Smart Agro</Link>. My goal
						was to build an interactive map. I used the{" "}
						<Link href="https://leafletjs.com/">
							<strong>Leaflet.js</strong>
						</Link>
						library to build an awesome, accessible, very unique interactive map
					</li>
					<li>
						Starting January 2024, I joined the{" "}
						<Link href="https://realpay.uz/">
							<strong>Realpay </strong>
						</Link>
						team to help them build user interfaces for their payment system. I
						am collaborating with <strong>Java</strong> and{" "}
						<strong>React.js</strong> developers team
					</li>
				</ul>
				<hr />
				<h2 className="font-medium text-xl mb-1 tracking-tighter">
					Freelancing
				</h2>

				<p>
					Besides working at <a href="https://realsoft.uz">Realsoft</a>, I
					actively spend my time <strong>freelancing</strong>. I have managed to
					finish a few projects using technologies like
					<strong>React.js</strong> and <strong>Next.js</strong> for clients
					from <strong>Uzbekistan</strong>
				</p>
				<ul>
					<li>
						<h3>
							<Link href="https://isnur.uz">Isnur.uz</Link>
						</h3>
						<p>
							I helped the{" "}
							<strong>
								<Link href="https://isnur.uz">Isnur.uz</Link>
							</strong>{" "}
							company to showcase their products by building an e-commerce
							website. I helped the frontend dev of the company by building a
							backend using <strong>Express.js</strong> and integrating with it
							using <strong>HTML</strong>, <strong>CSS</strong> and{" "}
							<strong>Javascript</strong>
						</p>
					</li>
					<li>
						<h3>
							<Link href="https://www.elitegroup.uz">ELITE GROUP</Link>
						</h3>
						<p>
							I helped the{" "}
							<strong>
								<Link href="https://www.elitegroup.uz">ELITE GROUP</Link>
							</strong>{" "}
							company to showcase their products by building an e-commerce
							website. I built an e-commerce website using{" "}
							<strong>Next.js</strong> and <strong>Sanity.io</strong>
						</p>
					</li>
				</ul>
			</div>
		</section>
	)
}
