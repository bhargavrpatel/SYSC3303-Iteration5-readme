var contentsArray = ["../README.html","changelog.html","notes.html","fileStructure.html","eclipseSetup.html","normalOperation.html","testingIT2.html","testingIT3.html","testingIT4.html","testingIT5.html"];
var solveURLs = function(contentsArray, currentIndex, prevBool) {
	 if (prevBool == true && currentIndex >= 1) {
		 var currentIndex = currentIndex-1;
		 return contentsArray[currentIndex];
	 } else if(currentIndex < contentsArray.length-1) {
		 var currentIndex = currentIndex+1;
		 return contentsArray[currentIndex];
	 } else {
		 return "#";
	 }
 }