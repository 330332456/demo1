
function place(res, id){
	var arr = null;
	if (id >= 1 && id <= 6) {
		arr = res[0].recommend;
	} else if(id >= 13 && id <= 20){
		arr = res[3].division[0].list;
	} else if(id >= 26 && id <= 33){
		arr = res[3].division[1].list;
	} else if(id >= 39 && id <= 46){
		arr = res[3].division[2].list;
	} else if(id >= 52 && id <= 59){
		arr = res[3].division[3].list;
	} else if(id >= 21 && id <= 25){
		arr = res[3].division[0].ranking;
	} else if(id >= 34 && id <= 38){
		arr = res[3].division[1].ranking;
	} else if(id >= 47 && id <= 51){
		arr = res[3].division[2].ranking;
	} else if(id >= 60 && id <= 64){
		arr = res[3].division[3].ranking;
	} else if(id >= 8 && id <= 12){
		arr = res[2].hobby;
	} else if(id = 7){
		arr = res[1].surprise;
	}
	return arr;
}
