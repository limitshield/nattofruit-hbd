const i_play = "./icons/play.svg";
const i_stop = "./icons/stop.svg";
const i_vol = "./icons/volume.svg";
const i_dl = "./icons/download.png";
const link = "./files/radio.mp3";


document.addEventListener("DOMContentLoaded",()=>{
	const e = document.getElementsByClassName('audioPlayer');
	const arr = Array.from(e);
	arr.map( (_e, _k )=>{ init(_e, _k); });
});

function init(_d, key){
	
	const _rS = document.createElement('p');
	_rS.className = 'rowSeek rowAudio';
	_d.appendChild(_rS);
	const _rV = document.createElement('p');
	_rV.className = 'rowVol rowAudio';
	_d.appendChild(_rV);
	
	const el_a = document.querySelectorAll('audio')[key];
	
	/*再生アイコン*/
	const el_iplay = document.createElement('img');
	el_iplay.className = 'play';
	el_iplay.setAttribute('src', i_play);
	_rS.appendChild(el_iplay);
	/*音量アイコン*/
	const el_ivol = document.createElement('img');
	el_ivol.className = 'volume';
	el_ivol.setAttribute('src', i_vol);
	_rV.appendChild(el_ivol);
	
	/*音量調整*/
	const el_vol = document.createElement('input');
	el_vol.type = "range";
	el_vol.max = 1;
	el_vol.min = 0;
	el_vol.value = 0.5;
	el_vol.step = 0.01;
	el_vol.className = 'vol';
	_rV.appendChild(el_vol);
	/*音量%*/
	const el_volper = document.createElement('span');
	el_volper.innerHTML = "100%";
	el_volper.className = "volper";
	_rV.appendChild(el_volper);

	/*シークバー*/
	const el_seek = document.createElement('input');
	el_seek.type = "range";
	el_seek.max = 1;
	el_seek.min = 0;
	el_seek.value = 0;
	el_seek.step = 0.01;
	el_seek.className = 'seek';
	_rS.appendChild(el_seek);
	/*シークバー秒数*/
	const el_time = document.createElement('span');
	el_time.innerHTML = "0:00";
	el_time.className = "time";
	_rS.appendChild(el_time);


	/*DL*/
	const el_dl = document.createElement('a');
	el_dl.setAttribute("href", link);
	el_dl.innerHTML = "DL";
	_d.appendChild(el_dl);
	
	/*諸々イベント*/
	el_iplay.addEventListener('click', ()=>playFunc(el_a));
	el_vol.addEventListener('input', ()=>volFunc(el_a));
	el_seek.addEventListener('input', ()=>seekFunc(el_a));
	
	/*シークバー強引バインディング*/
	setInterval(()=>seekGet(el_a),100);
	
}

function playFunc(e){
	let p = e.parentElement.getElementsByClassName("play")[0];
	//console.log(e);
	if(e.paused){
		e.play();
		/* set play icon */
		p.src = i_stop;
	}else{
		e.pause();
		/* set pause icon */
		p.src = i_play;
	}
}

function volFunc(e){
	el_vol = e.parentElement.getElementsByClassName("vol")[0];
	el_volper = e.parentElement.getElementsByClassName("volper")[0];
	e.volume = el_vol.value;
	el_volper.innerHTML = (parseInt(e.volume*100)).toString()+"%";
}

function seekFunc(e){
	el_seek = e.parentElement.getElementsByClassName("seek")[0];
	e.currentTime = el_seek.value * e.duration;
}

function seekGet(e){
	el_seek = e.parentElement.getElementsByClassName("seek")[0];
	el_time = e.parentElement.getElementsByClassName("time")[0];
	el_seek.value = e.currentTime / e.duration;
	el_time.innerHTML = ''+(parseInt(e.currentTime / 60)) + ":" + ('00' + (parseInt(e.currentTime % 60))).slice(-2);
	/* 最後まで再生したら最初に戻る(繰り返し再生はしない) */
	if(e.ended){
		e.currentTime = 0;
		e.paused = true;
		e.parentElement.getElementsByClassName("play")[0].src = i_play;
	}
}
