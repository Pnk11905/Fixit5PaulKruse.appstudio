//3. ScenarioGradeSwitch

let user_grade = prompt('Enter a letter grade');
switch (user_grade) {
case 'A':
alert('Great job! Your grade is an A.');
break;
case 'B':
alert('Good job. Your grade is a B.')
break;
case 'C':
alert('Passed. Your grade is a C.')
break;
case 'D':
alert('Not so good. Your grade is a D.')
break;
case 'F':
alert('Failed. Your grade is an F.')
default:
alert('Uh oh. That is not a sufficient letter grade.')
break;
}