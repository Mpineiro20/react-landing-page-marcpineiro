import React from "react";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Card from "../component/card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center">
				<Card title={"Card Number One"} img={"https://a.cdn-hotels.com/gdcs/production64/d142/a34f9d10-b69b-11e8-a095-0242ac11000d.jpg"} />
				<Card title={"Card Number Two"} img={"https://lp-cms-production.imgix.net/2021-05/shutterstockRF_1563449509.jpg?auto=compress&fit=crop&format=auto&q=50&w=1200&h=800"} />
				<Card title={"Card Number Three"} img={"https://media.kensingtontours.com/image/upload/g_auto,f_auto,q_auto,w_1366,h_768,c_fill/kt/live/cms/stories/wpblogs/greece-word-exploring-eating-athens-mykonos-santorini/GettyImages-528893342"} />
				<Card title={"Card Number Four"} img={"https://media.boatbookings.com//images/greece/mykonos.jpg?auto=webp&format=pjpg&fit=crop&height=486&width=728"} />

			</div>
				<Footer />
				
		</div>
	);
};

export default Home;