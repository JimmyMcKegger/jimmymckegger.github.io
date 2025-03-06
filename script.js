const countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();

const x = setInterval(function () {
	const now = new Date().getTime();

	const distance = countDownDate - now;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

	if (distance < 0) {
		clearInterval(x);
		document.querySelector(".countdown").innerHTML = "We're Live!";
	}
}, 1000);
