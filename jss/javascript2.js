let suggestions = [
	"Telugu","English","Tamil","Hindi",
	"Malayalam","Marathi",
	"Eenadu","Sakshi","Andhra prabha","Andhra jyothy","Suryaa","Vaartha","Andhra bhoomi","Prajasakti","One India Telugu",
    "The Times of India","Hidustan Times","The Indian Express","Economic Times","Deccan Chronicle","The Hindu",
    "Amar Ujala","Dainik Jagran","Rajasthan Patrika","punjab kesari","Hidustan Times","Navabharat",
    "Dina Thanthi","Dinamalar","Dinakaran","Theekkathir","Tamil Murasu","Hindu Tamil",
    "Loksatta","Pudhari","Tarun Bharat",
    "Mangalam","Mathrubhumi","Rashtradeepika","Thejas","Chandrika","Deepika"
];
let inputkeypairs = {
    "Telugu" : "telugu.html",
    "English" : "english.html",
    "Hindi" : "hindi.html",
    "Malayalam" : "malayalam.html",
    "Marathi" : "marathi.html",
    "Tamil" : "tamil.html",
    "Eenadu" : "https://epaper.eenadu.net/",
    "Sakshi" : "https://epaper.sakshi.com/",
    "Andhra prabha" : "https://epaper.prabhanews.com/",
    "Andhra jyothy" : "https://www.andhrajyothy.com/",
    "Suryaa" : "http://epaper.suryaa.com/",
    "Vaartha" : "https://epaper.vaartha.com/",
    "Andhra bhoomi" : "http://www.andhrabhoomi.net/",
    "Prajasakti":"http://epaper.prajasakti.com/",
    "One India Telugu" : "https://telugu.oneindia.com/",
    "The Times of India" : "https://timesofindia.indiatimes.com/",
    "Hidustan Times" : "https://www.hindustantimes.com/",
    "The Indian Express" : "https://indianexpress.com/",
    "Economic Times" : "https://economictimes.indiatimes.com/",
    "Deccan Chronicle" : "http://www.deccanchronicle.com/",
    "The Hindu" : "https://www.thehindu.com/",
    "Amar Ujala":"https://epaper.amarujala.com/",
    "Dainik Jagran":"https://epaper.jagran.com/epaper/",
    "Rajasthan Patrika":"https://epaper.patrika.com/",
    "punjab kesari":"https://epaper.punjabkesari.in/",
    "Hidustan Times":"https://www.hindustantimes.com/",
    "Navabharat":"http://epaper.enavabharat.com/",
    "Dina Thanthi":"https://www.dailythanthi.com/",
    "Dinamalar":"https://m.dinamalar.com/",
    "Dinakaran":"https://m.dinakaran.com/",
    "Theekkathir":"https://theekkathir.in/",
    "Tamil Murasu":"https://www.tamilmurasu.com.sg/",
    "Hindu Tamil":"https://www.hindutamil.in/",
    "Loksatta":"https://epaper.loksatta.com/",
    "Pudhari":"https://www.pudhari.news/",
    "Tarun Bharat":"https://epaper.tarunbharat.com/",
    "Mangalam":"https://epaper.mangalam.com/",
    "Mathrubhumi":"https://epaper.mathrubhumi.com/",
    "Rashtradeepika":"https://epaper.deepika.com/",
    "Thejas":"https://www.thejasnews.com/",
    "Chandrika":"http://epaper.chandrikadaily.com/",
    "Deepika":"https://epaper.deepika.com/"



};
const searchwrapper = document.getElementById("searchbar");
const inputbox = searchwrapper.querySelector("input");
const suggbox = searchwrapper.querySelector(".autocom-box");
//if user press any key and release
inputbox.onkeyup = (e)=>{
	let userData = e.target.value;//user entered data
	let emptyArray = [];
	if(userData){
		emptyArray = suggestions.filter((data)=>{
			return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
		});
		emptyArray = emptyArray.map((data)=>{
			return data = "<li>"+data+"<li>";
		});
		console.log(emptyArray);
		searchwrapper.classList.add("active");
        showsuggestions(emptyArray);
        let allList = suggbox.querySelectorAll("li");
        for(let i = 0;i<allList.length;i++){
            allList[i].setAttribute("onclick","select(this)");
        }
	}
	else{
        searchwrapper.classList.remove("active");
	}
}
function select(element){
    let selectUserData = element.textContent;
    inputbox.value = selectUserData;
    searchwrapper.classList.remove("active");
}
function showsuggestions(list){
	let listData;
	if(!list.length){
            uservalue = inputbox.value;
            listData = "<li>"+uservalue+"<li>";
	}
	else{
		listData = list.join("");
	}
    suggbox.innerHTML = listData;
}
function searchnewspaper(){
    let inputvalue = inputbox.value;
    if(inputvalue){
        window.open(inputkeypairs[inputvalue]);
    }
}