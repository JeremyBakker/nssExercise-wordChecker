$("#submit").click((event)=>{
	let wordsArray = $("#textInput").val().split(" ");
	checkWordCount(wordsArray);
	duplicateCheck(wordsArray);
	verifyAlphaNumeric(wordsArray);
});


function checkWordCount (words) {
	if (words.length > 100) {
		return false;
	}
}

function duplicateCheck(words) {
	words.sort(function(a,b){
		var wordA = a.toLowerCase();
		var wordB = b.toLowerCase();
		if (wordA < wordB) {
			return - 1;
		}
		if (wordA > wordB) {
			return + 1;
		}
		return 0;
	});
	for (var i = 0; i < words.length; i++) {
		if (words[i] === words[i+1] && i !== (words.length)) {
			$("#textInput").val("");
			alert("Please verify that there are no duplicates.");
			return false;
		}
	}
}

function verifyAlphaNumeric(words){
	console.log("typeof", typeof words);
	for (var i = 0; i < words.length; i++){
		if (/[^a-zA-Z0-9]/.test(words[i])) {
			alert("Please enter only alphanumeric characters.")
			return false;
		} 
	}
};
