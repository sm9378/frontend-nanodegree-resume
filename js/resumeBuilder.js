var bio = {
	"name" : "Sean Magrann",
	"role" : "Applications Developer",
	"contacts" : {
		"email" : "sm9378@att.com",
		"mobile" : "(678) 310-7330",
		"github" : "sm9378",
		"location" : "Canton, GA"
	},
	"welcomeMessage" : "Sed turpis tellus, condimentum id laoreet sed, interdum eget tortor. Ut porttitor nisl at nibh tempor auctor. Etiam in nisl tincidunt, dignissim turpis ut, placerat tortor.",
	"skills" : ["Home Network Specialist", "Full Stack Web Developer(Future)", "iOS Developer(Future)"],
	"picture" : "images/me.jpg"
};
var work = {
	"jobs": [
	{
		"employer": "Bellsouth Telecommunications",
		"title": "Services Technician",
		"location": "Plantation, FL, US",
		"dates": "2000-2004",
		"description": "Responsible for installation and repair of consumer and business POTS & ADSL services. "
	},
	{
		"employer": "Bellsouth Telecommunications",
		"title": "Manager - Network Services/ADSL",
		"location": "Coral Springs, FL, US",
		"dates": "2004-2006",
		"description": "Managed an installation and repair crew of Services Technicians for North Broward POTS & ADSL services.  "
	},
	{
		"employer": "Bellsouth Telecommunications",
		"title": "Specialist - Network Support",
		"location": "Hollywood, FL, US",
		"dates": "2006-2008",
		"description": "Served as the Broward District Quality Manager. Responsible for ensuring Managers and Technicians were adhering to corporate Quality Assurance Poilicies."
	},
	{
		"employer": "AT&T Services, Inc.",
		"title": "Manager - Network Services/U-Verse",
		"location": "Fort Lauderdale, FL, US",
		"dates": "2008-2010",
		"description": "Managed an installation and repair crew of Premises Technicians for North Broward U-Verse services."
	},
	{
		"employer": "AT&T Services, Inc.",
		"title": "Senior Technical Process & Quality Manager",
		"location": "Atlanta, GA, US",
		"dates": "2010-Present",
		"description": "Responsible for technical implementation of new and existing broadband services and equipment."
	}
	]
}
var projects = {
	"projects": [
	{
		"title": "Project 1",
		"dates": "2014",
		"description": "Sed turpis tellus, condimentum id laoreet sed, interdum eget tortor. Ut porttitor nisl at nibh tempor auctor. Etiam in nisl tincidunt, dignissim turpis ut, placerat tortor.",
		"image": "images/fry.jpg"
	},
	{
		"title": "Project 2",
		"dates": "2015",
		"description": "Sed turpis tellus, condimentum id laoreet sed, interdum eget tortor. Ut porttitor nisl at nibh tempor auctor. Etiam in nisl tincidunt, dignissim turpis ut, placerat tortor.",
		"image": "images/fry.jpg"
	},
	{
		"title": "Project 3",
		"dates": "2016",
		"description": "Sed turpis tellus, condimentum id laoreet sed, interdum eget tortor. Ut porttitor nisl at nibh tempor auctor. Etiam in nisl tincidunt, dignissim turpis ut, placerat tortor.",
		"image": "images/fry.jpg"
	}
	]
}

var education = {
	"schools": [
	{
		"name": "Broward College",
		"location": "Coconut Creek, FL, US",
		"dates": "1990-1991",
		"degree": "none",
		"major": "Business Management"
	},
	{
		"name": "Santa Fe College",
		"location": "Gainesville, FL, US",
		"dates": "1992-1993",
		"degree": "none",
		"major": "Business Management"
	},
	{
		"name": "Udacity",
		"location": "Marietta, GA, US",
		"dates": "2017",
		"degree": "Nanodegree",
		"major": "Full Stack Web Developer"
	}
	]
}
var formattedName = HTMLheaderName.replace('%data%',bio.name)
var formattedRole = HTMLheaderRole.replace('%data%',bio.role)
var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github)
var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email)
var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile)
var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location)

$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);
$("#topContacts").prepend([formattedLocation]);
$("#topContacts").prepend([formattedGithub]);
$("#topContacts").prepend([formattedEmail]);
$("#topContacts").prepend([formattedMobile]);

$("#footerContacts").prepend([formattedLocation]);
$("#footerContacts").prepend([formattedGithub]);
$("#footerContacts").prepend([formattedEmail]);
$("#footerContacts").prepend([formattedMobile]);


var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcome);
$("#header").append(HTMLskillsStart);

function displaySkills() {
	for (skill = 0; skill < bio.skills.length; skill++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills:last").append(formattedSkill);
	}
}
displaySkills();

function displayWork() {
	for (j = 0; j < work.jobs.length; j++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

function displayProject() {
	for (p = 0; p < projects.projects.length; p++) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
		$(".project-entry:last").append(formattedProjectDesc);

		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[p].image);
		$(".project-entry:last").append(formattedProjectImage);
	}
}
displayProject();

function displaySchool() {
	for (s = 0; s < education.schools.length; s++) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[s].name);
		$(".education-entry:last").append(formattedSchoolName);

		// var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
		// $(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[s].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
}
displaySchool();

$("#mapDiv").append(googleMap);
