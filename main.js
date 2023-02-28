const request = new Request("http://api.aladhan.com/v1/timingsByCity?city=Letterkenny&country=Ireland&method=3");



fetch(request)
	.then(res => res.json())
	.then(main => {
		let fajr = (main.data.timings.Fajr)
		document.getElementById("time-fajr").innerHTML = fajr;

		let sunrise = (main.data.timings.Sunrise)
		document.getElementById("time-sunrise").innerHTML = sunrise;

		let dhuhr = (main.data.timings.Dhuhr)
		document.getElementById("time-dhuhr").innerHTML = dhuhr;

		let asr = (main.data.timings.Asr)
		document.getElementById("time-asr").innerHTML = asr;

		let maghrib = (main.data.timings.Maghrib)
		document.getElementById("time-maghrib").innerHTML = maghrib;

		let isha = (main.data.timings.Isha)
		document.getElementById("time-isha").innerHTML = isha;
	})




