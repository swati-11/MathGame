//start-reset button:check playing or not
var playing = false;
var score;
var time;
var action;
var correctAnswer;

document.getElementById("start-reset").onclick= function(){
	if (playing == true){
		//if playing: reload the box
		location.reload();
	
	}
	else{
		playing = true;
		//if not playing: show start game, set score =01
		score =0;
		document.getElementById("scorevalue").innerHTML= score;
		document.getElementById("start-reset").innerHTML= "Reset Game"; //change button to reset

		//show countdown box
		show("time-remaining");
		time=20;
		document.getElementById("timeremainingvalue").innerHtml = time;

		//hide game over box 
		hide("game-over");
		Startcountdown();
        generateQA();

	}
	
}
//start countdown


//reduce time by 1 sec in loop  //time left? 
		 //yes : continue
	//no : game over,start again




	
//start countdown
function Startcountdown(){   
	
	action = setInterval(function(){
		time-=1; 
		document.getElementById("timeremainingvalue").innerHTML = time;
         if (time==0)	
		 {
			 Stopcountdown();
			 show("game-over");
			 document.getElementById("game-over").innerHTML="<p>game over</p><p>your score is:"+ score+"</p>" ;
			 hide("time-remaining");
			 document.getElementById("start-reset").innerHTML= "Start Game"; //change button to start game

			 hide("correct");
			 hide("wrong");
			 playing = false;
			 
			 
			  //document.getElementById("start-reset").onclick = location.reload();
		 }			

	}
	,1000);
}	
	
//stop countdown
function Stopcountdown(){
	
clearInterval(action);
}

//hide element
function hide(id){
	document.getElementById(id).style.display="none";
}

//show element
function show(id){
	document.getElementById(id).style.display="block";
}
	
//generate new QA


function generateQA(){
var x = 1+Math.round(9*Math.random());
var y = 1+ Math.round(9*Math.random());	
document.getElementById("question").innerHTML= x + "x" + y ;
 correctAnswer = x*y;
//we will first generate a randon number btwn 1-4 and then place the correct answer in box of tha number
	var correctPosition= 1+Math.round(3* Math.random());
	
	document.getElementById("box"+correctPosition).innerHTML= correctAnswer;//fill one box with corrct answer
	
	var answers=[correctAnswer];	
	for(i=1;i<5;i++)
		{ 
		
		if(i != correctPosition)
		{
			
		      //check if wrong answer present in answer array 
			do{
			wrongAnswer =(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
			} while(answers.indexOf(wrongAnswer)>-1)
			
		     document.getElementById("box"+i).innerHTML= wrongAnswer;
			 answers.push(wrongAnswer);
		}
		}
			
		
		
}
	
	//if we click on answrbox

	
	//new ques
	//no?
	// show strt again box
	
	
for (i=1;i<5;i++){
	
	document.getElementById("box"+i).onclick = function(){
		if(playing ==true){ //if playing?
			
			//correct?
			if(this.innerHTML== correctAnswer){ //this -> the box we clicked.z
					//yes: show correct box, increase score

				score++;
			document.getElementById("scorevalue").innerHTML= score;
			//hide wrong box
			hide("wrong");
			show("correct");
			setTimeout(function(){
				hide("correct");
			},1000);
			//generate QA
			generateQA();
				
			}
			else{
				//wrong answer
				hide("correct");
			show("wrong");
			setTimeout(function(){
				hide("wrong");
			},1000);
				
			}
			
			
		}
	}
	
	
	
	
}
	










