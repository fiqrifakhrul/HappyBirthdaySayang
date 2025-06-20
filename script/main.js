window.addEventListener("load", () => {
	Swal.fire({
		title: "Do You want to play music?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes",
		cencelButtonText: "NO",
	}).then((result) => {
		if (result.isConfirmed) {
			document.querySelector(".music").play();
		}
		animationTimeLine();
	});
});

const animationTimeLine = () => {
	//split char that needs to be animated individualy
	const textboxChars = document.getElementsByClassName("textbox__chat")[0];
	const hbd = document.getElementsByClassName("wish-hbd")[0];

	textboxChars.innerHTML = `<span>${textboxChars.innerHTML
		.split("")
		.join("</span><span>")}</span>`;
	hbd.innerHTML = `<span>${hbd.innerHTML
		.split("")
		.join("</span><span>")}</span>`;

	const ideaTextTrans = {
		opacity: 0,
		y: -20,
		rotationX: 5,
		skewX: "15deg",
	};
	const ideaTextTransLeave = {
		opacity: 0,
		y: 20,
		rotationY: 5,
		skewX: "-15deg",
	};

	// hbd.innerHTML = `<span>${hbd.innerHTML
	// 	.split("")
	// 	.join("</span><span>")}</span>`;

	const tl = new gsap.timeline();
	//const tl = new TimeLineMax();

	tl.to(".container", 0.6, {
		visibility: "visible",
	})
		.from(".one", 0.7, {
			opacity: 0,
			y: 10,
		})
		.from(".two", 0.4, {
			opacity: 0,
			y: 10,
		})
		.to(
			".one",
			0.7,
			{
				opacity: 0,
				y: 10,
			},
			"+=3"
		)
		.to(
			".two",
			0.7,
			{
				opacity: 0,
				y: 10,
			},
			"-=1"
		)
		.from(".three", 0.7, {
			opacity: 0,
			y: 10,
		})
		.to(
			".three ",
			0.7,
			{
				opacity: 0,
				y: 10,
			},
			"+=3"
		)
		.from(".four", 0.7, {
			opacity: 0,
			scale: 0.2,
		})
		.from(".fake__button", 0.3, {
			opacity: 0,
			scale: 0.2,
		})
		.staggerTo(
			".textbox__chat span",
			1.5,
			{
				visibility: "visible",
			},
			0.05
		)
		.to(
			"fake__button",
			0.1,
			{
				backgroundColor: "rgb(127,206,248)",
			},
			"+=4"
		)
		.to(
			".four",
			0.5,
			{
				opacity: 0,
				scale: 0.2,
				y: -150,
			},
			"+=1"
		)

		.from(".idea-1", 0.9, ideaTextTrans)
		.to(".idea-1", 0.7, ideaTextTransLeave, "+=2")
		.from(".idea-2", 0.9, ideaTextTrans)
		.to(".idea-2", 0.7, ideaTextTransLeave, "+=2")
		.from(".idea-3", 0.9, ideaTextTrans)
		.to(".idea-3 strong", 0.5, {
			scale: 1.2,
			x: 10,
			backgroundColor: "rgb(21,161,237",
			color: "#fff",
		})
		.to(".idea-3", 0.7, ideaTextTransLeave, "+=2")
		.from(".idea-4", 0.7, ideaTextTrans)
		.to(".idea-4", 0.7, ideaTextTransLeave, "+=2")
		.from(
			".idea-5",
			0.7,
			{
				rotationX: 15,
				rotationZ: -10,
				skewY: "-15deg",
				y: 50,
				z: 10,
				opacity: 0,
			},
			"+=1.5"
		)
		.to(".idea-5 span", 0.7, {
			rotation: 90,
			x: 0,
		})
		.to(
			".idea-5",
			0.7,
			{
				opacity: 0,
				scale: 0.2,
			},
			"+=2"
		)

		.staggerFrom(
			".idea-6 span",
			0.8,
			{
				scale: 3,
				opacity: 0,
				rotation: 15,
				ease: Expo.easeOut,
			},
			0.2
		)
		.staggerTo(
			".idea-6 span",
			0.8,
			{
				cale: 3,
				opacity: 0,
				rotation: -15,
				ease: Expo.easeOut,
			},
			0.2,
			"+=1.5"
		)

		.staggerFromTo(
			".baloons img",
			2,
			{
				opacity: 0,
				y: 1400,
			},
			{
				opacity: 1,
				y: -1000,
			},
			0.2
		)
		.from(
			".profile",
			0.5,
			{
				opacity: 0,
				scale: 1.5,
				x: 25,
				y: -25,
				rotationZ: -45,
			},
			"-=2"
		)
		.staggerFrom(
			".wish-hbd span",
			0.7,
			{
				opacity: 0,
				y: -50,
				rotation: 150,
				skewX: "30deg",
				ease: Elastic.easeOut.config(1, 0.5),
			},
			0.1
		)
		.staggerFromTo(
			".wish-hbd span",
			0.7,
			{
				scale: 1.4,
				rotateY: 150,
			},
			{
				scale: 1,
				rotateY: 0,
				color: "#ff60b",
				ease: Expo.easeOut,
			},
			0.1,
			"party"
		)
		.from(
			".wish h5",
			0.5,
			{
				opacity: 0,
				y: 10,
				skewX: "-15deg",
			},
			"party"
		)

		.staggerTo(
			".eight svg",
			0.8,
			{
				opacity: 0,
				visibility: "visible",
				scale: 80,
				reapeat: 2,
				repeatDelay: 0.6,
			},
			0.3
		)
		.to(".six", 0.5, {
			opacity: 0,
			y: 30,
			zIndex: "-1",
		})

		.staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
		.to(
			".last-smile",
			0.5,
			{
				rotation: 90,
			},
			"+=1"
		);

	// restart animation on click
	const replayBtn = document.getElementById("replay");
	replayBtn.addEventListener("click", () => {
		tl.restart();
	});
};
