import React from "react";
import ReactLoading from "react-loading";

export default function LoadingPage() {
	return (
		<div>
            <div className="bg-white-A700 flex flex-col items-center justify-center mx-auto w-full h-screen">
			<ReactLoading
				type="spinningBubbles"
				color="#545ff8"
				height={'30%'}
				width={'15%'}
			/>
            </div>
		</div>
	);
}
