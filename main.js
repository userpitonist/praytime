var json = {
			"feb1" : [{"fajr":"6:16"}, {"sunrise":"8:21"}, {"dhuhr":"12:44"}, {"asr":"14:42"}, {"maghrib":"17:09"}, {"isha":"19:07"}],
			"feb2" : [{"fajr":"6:15"}, {"sunrise":"8:19"}, {"dhuhr":"12:45"}, {"asr":"14:44"}, {"maghrib":"17:11"}, {"isha":"19:08"}],
			"feb3" : [{"fajr":"6:13"}, {"sunrise":"8:17"}, {"dhuhr":"12:45"}, {"asr":"14:45"}, {"maghrib":"17:13"}, {"isha":"19:10"}],	
			"feb4" : [{"fajr":"6:12"}, {"sunrise":"8:15"}, {"dhuhr":"12:45"}, {"asr":"14:47"}, {"maghrib":"17:15"}, {"isha":"19:12"}],
			"feb5" : [{"fajr":"6:10"}, {"sunrise":"8:13"}, {"dhuhr":"12:45"}, {"asr":"14:49"}, {"maghrib":"17:17"}, {"isha":"19:14"}],
			"feb6" : [{"fajr":"6:08"}, {"sunrise":"8:11"}, {"dhuhr":"12:45"}, {"asr":"14:50"}, {"maghrib":"17:20"}, {"isha":"19:15"}],
			"feb7" : [{"fajr":"6:07"}, {"sunrise":"8:09"}, {"dhuhr":"12:45"}, {"asr":"14:52"}, {"maghrib":"17:22"}, {"isha":"19:17"}],
			"feb8" : [{"fajr":"6:05"}, {"sunrise":"8:07"}, {"dhuhr":"12:45"}, {"asr":"14:53"}, {"maghrib":"17:24"}, {"isha":"19:19"}],
			"feb9" : [{"fajr":"6:03"}, {"sunrise":"8:05"}, {"dhuhr":"12:45"}, {"asr":"14:55"}, {"maghrib":"17:26"}, {"isha":"19:21"}],
			"feb10" : [{"fajr":"6:02"}, {"sunrise":"8:03"}, {"dhuhr":"12:45"}, {"asr":"14:57"}, {"maghrib":"17:28"}, {"isha":"19:23"}],
			"feb11" : [{"fajr":"6:00"}, {"sunrise":"8:01"}, {"dhuhr":"12:45"}, {"asr":"14:58"}, {"maghrib":"17:30"}, {"isha":"19:25"}],
			"feb12" : [{"fajr":"5:58"}, {"sunrise":"7:59"}, {"dhuhr":"12:45"}, {"asr":"15:00"}, {"maghrib":"17:32"}, {"isha":"19:26"}],
			"feb13" : [{"fajr":"5:56"}, {"sunrise":"7:57"}, {"dhuhr":"12:45"}, {"asr":"15:02"}, {"maghrib":"17:34"}, {"isha":"19:28"}],
			"feb14" : [{"fajr":"5:54"}, {"sunrise":"7:55"}, {"dhuhr":"12:45"}, {"asr":"15:03"}, {"maghrib":"17:36"}, {"isha":"19:30"}],
			"feb15" : [{"fajr":"5:52"}, {"sunrise":"7:53"}, {"dhuhr":"12:45"}, {"asr":"15:05"}, {"maghrib":"17:38"}, {"isha":"19:32"}],
			"feb16" : [{"fajr":"5:50"}, {"sunrise":"7:51"}, {"dhuhr":"12:45"}, {"asr":"15:06"}, {"maghrib":"17:40"}, {"isha":"19:34"}],
			"feb17" : [{"fajr":"5:48"}, {"sunrise":"7:48"}, {"dhuhr":"12:45"}, {"asr":"15:08"}, {"maghrib":"17:43"}, {"isha":"19:36"}],
			"feb18" : [{"fajr":"5:46"}, {"sunrise":"7:46"}, {"dhuhr":"12:45"}, {"asr":"15:09"}, {"maghrib":"17:45"}, {"isha":"19:38"}],
			"feb19" : [{"fajr":"5:44"}, {"sunrise":"7:44"}, {"dhuhr":"12:45"}, {"asr":"15:11"}, {"maghrib":"17:47"}, {"isha":"19:40"}],
			"feb20" : [{"fajr":"5:42"}, {"sunrise":"7:42"}, {"dhuhr":"12:45"}, {"asr":"15:13"}, {"maghrib":"17:49"}, {"isha":"19:42"}],
			"feb21" : [{"fajr":"5:40"}, {"sunrise":"7:39"}, {"dhuhr":"12:45"}, {"asr":"15:14"}, {"maghrib":"17:51"}, {"isha":"19:44"}],
			"feb22" : [{"fajr":"5:37"}, {"sunrise":"7:37"}, {"dhuhr":"12:44"}, {"asr":"15:16"}, {"maghrib":"17:53"}, {"isha":"19:46"}],
			"feb23" : [{"fajr":"5:35"}, {"sunrise":"7:35"}, {"dhuhr":"12:44"}, {"asr":"15:17"}, {"maghrib":"17:55"}, {"isha":"19:47"}],
			"feb24" : [{"fajr":"5:33"}, {"sunrise":"7:32"}, {"dhuhr":"12:44"}, {"asr":"15:19"}, {"maghrib":"17:57"}, {"isha":"19:49"}],
			"feb25" : [{"fajr":"5:31"}, {"sunrise":"7:30"}, {"dhuhr":"12:44"}, {"asr":"15:20"}, {"maghrib":"17:59"}, {"isha":"19:51"}],
			"feb26" : [{"fajr":"5:28"}, {"sunrise":"7:28"}, {"dhuhr":"12:44"}, {"asr":"15:22"}, {"maghrib":"18:01"}, {"isha":"19:53"}],
			"feb27" : [{"fajr":"5:26"}, {"sunrise":"7:25"}, {"dhuhr":"12:44"}, {"asr":"15:23"}, {"maghrib":"18:03"}, {"isha":"19:55"}],
			"feb28" : [{"fajr":"5:24"}, {"sunrise":"7:23"}, {"dhuhr":"12:43"}, {"asr":"15:25"}, {"maghrib":"18:05"}, {"isha":"19:57"}]
			};





switch(new Date().getDate()) {
	case 1:
		document.getElementById("time-fajr").innerHTML = json.feb1[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb1[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb1[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb1[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb1[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb1[5].isha;

		break;

	case 2:
		document.getElementById("time-fajr").innerHTML = json.feb2[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb2[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb2[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb2[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb2[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb2[5].isha;

		break;

	case 3:
		document.getElementById("time-fajr").innerHTML = json.feb3[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb3[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb3[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb3[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb3[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb3[5].isha;

		break;

	case 4:
		document.getElementById("time-fajr").innerHTML = json.feb14[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb4[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb4[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb4[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb4[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb4[5].isha;

		break;

	case 5:
		document.getElementById("time-fajr").innerHTML = json.feb5[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb5[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb5[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb5[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb5[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb5[5].isha;

		break;

	case 6:
		document.getElementById("time-fajr").innerHTML = json.feb6[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb6[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb6[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb6[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb6[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb6[5].isha;

		break;

	case 7:
		document.getElementById("time-fajr").innerHTML = json.feb7[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb7[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb7[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb7[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb7[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb7[5].isha;

		break;

	case 8:
		document.getElementById("time-fajr").innerHTML = json.feb8[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb8[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb8[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb8[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb8[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb8[5].isha;

		break;

	case 9:
		document.getElementById("time-fajr").innerHTML = json.feb9[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb9[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb9[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb9[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb9[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb9[5].isha;

		break;

	case 10:
		document.getElementById("time-fajr").innerHTML = json.feb10[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb10[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb10[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb10[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb10[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb10[5].isha;

		break;

	case 11:
		document.getElementById("time-fajr").innerHTML = json.feb11[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb11[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb11[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb11[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb11[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb11[5].isha;

		break;

	case 12:
		document.getElementById("time-fajr").innerHTML = json.feb12[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb12[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb12[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb12[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb12[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb12[5].isha;

		break;

	case 13:
		document.getElementById("time-fajr").innerHTML = json.feb13[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb13[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb13[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb13[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb13[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb13[5].isha;

		break;

	case 14:
		document.getElementById("time-fajr").innerHTML = json.feb14[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb14[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb14[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb14[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb14[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb14[5].isha;

		break;

	case 15:
		document.getElementById("time-fajr").innerHTML = json.feb15[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb15[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb15[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb15[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb15[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb15[5].isha;

		break;

	case 16:
		document.getElementById("time-fajr").innerHTML = json.feb16[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb16[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb16[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb16[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb16[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb16[5].isha;

		break;

	case 17:
		document.getElementById("time-fajr").innerHTML = json.feb17[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb17[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb17[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb17[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb17[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb17[5].isha;

		break;

	case 18:
		document.getElementById("time-fajr").innerHTML = json.feb18[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb18[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb18[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb18[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb18[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb18[5].isha;

		break;

	case 19:
		document.getElementById("time-fajr").innerHTML = json.feb19[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb19[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb19[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb19[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb19[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb19[5].isha;

		break;

	case 20:
		document.getElementById("time-fajr").innerHTML = json.feb20[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb20[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb20[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb20[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb20[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb20[5].isha;

		break;

	case 21:
		document.getElementById("time-fajr").innerHTML = json.feb21[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb21[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb21[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb21[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb21[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb21[5].isha;

		break;

	case 22:
		document.getElementById("time-fajr").innerHTML = json.feb22[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb22[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb22[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb22[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb22[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb22[5].isha;

		break;

	case 23:
		document.getElementById("time-fajr").innerHTML = json.feb23[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb23[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb23[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb23[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb23[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb23[5].isha;

		break;

	case 24:
		document.getElementById("time-fajr").innerHTML = json.feb24[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb24[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb24[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb24[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb24[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb24[5].isha;

		break;

	case 25:
		document.getElementById("time-fajr").innerHTML = json.feb25[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb25[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb25[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb25[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb25[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb25[5].isha;

		break;

	case 26:
		document.getElementById("time-fajr").innerHTML = json.feb26[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb26[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb26[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb26[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb26[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb26[5].isha;

		break;

	case 27:
		document.getElementById("time-fajr").innerHTML = json.feb27[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb27[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb27[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb27[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb27[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb27[5].isha;

		break;

	case 28:
		document.getElementById("time-fajr").innerHTML = json.feb28[0].fajr;

		document.getElementById("time-sunrise").innerHTML = json.feb28[1].sunrise;

		document.getElementById("time-dhuhr").innerHTML = json.feb28[2].dhuhr;

		document.getElementById("time-asr").innerHTML = json.feb28[3].asr;

		document.getElementById("time-maghrib").innerHTML = json.feb28[4].maghrib;

		document.getElementById("time-isha").innerHTML = json.feb28[5].isha;

		break;

}









