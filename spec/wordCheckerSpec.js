// 1. There should be a function defined with the name `checkWordCount`.
// 2. That function should return false if a string sent to it has more than 100 words in it.
// 3. There should be a function defined with the name `duplicateCheck`.
// 4. That function should return false if a string has duplicate words in it.
// 5. There should be a function defined with the name `verifyAlphaNumeric`.
// 6. That function should return false if there are any non-alphanumeric characters in a string.

describe("Word Checker", function() {

	it("should have a checkWordCount function", function(){
		expect(checkWordCount).toBeDefined();
	});

	it("should return false if string has more than 100 words", function() {
		expect(checkWordCount(words)).toBeFalsy();
	});

	it("should have a duplicateCheck function", function(){
		expect(duplicateCheck).toBeDefined();
	});

	it("should return false if a string has duplicate words in it", function(){
		expect(duplicateCheck(words)).toBeFalsy();
	});

	it("should have a verifyAlphaNumeric function", function(){
		expect(verifyAlphaNumeric).toBeDefined();
	});

	it("should return false if any non-alphanumeric characters are in the string", function(){
		expect(duplicateCheck(words)).toBeFalsy();
	})
});