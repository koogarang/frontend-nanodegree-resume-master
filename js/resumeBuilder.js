//This is empty on purpose! Your code to build the resume will go here.

// var bio stores necessary information to create the bio section of the website
var bio = {
	"name": "Veeraseth Wongsirikul",
	"role": "Entrepreneur",
	"welcomeMessage": "Hello!!",
	"biopic": ["images/me.jpg"],
	"skills": ["Excel", "Powerpoint", "HTML", "Business"],
	"contacts": {
		"mobile": "+66-86-3306000",
		"email": "veeraseth@yahoo.com",
		"github": "koogarang",
		"twitter": "@koogarang",
		"location": "Bangkok"
	}
};

// bio.display insert the data from var bio into an appropriate area of the resume
bio.display = function() {

	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

// to add the skills section in the resume only if at least one skill is available in bio.skills
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
};

bio.display();

// var work stores necessary information to create the work section of the website
var work = {
	"jobs": [{
		"employer": "Mandarin Spinning",
		"title": "Assistant Manager",
		"location": "Bangkok",
		"dates": "2012-2014",
		"description": "Family owned textile manufacturer"
	}, {
		"employer": "KPMG",
		"title": "Tax Associate",
		"location": "Bangkok",
		"dates": "2010-2012",
		"description": "Worked in different field of taxation"
	}]
};

// displaywork insert the data from var work into an appropriate area of the resume

function displaywork() {
	for(var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displaywork();

// var projects  stores necessary information to create the work section of the website
var projects = {
	"projects": [{
		"title": "Mandarin inventory",
		"dates": "2013",
		"description": "Helps with inventory system in the company",
		"images": [""]
	}, {
		"title": "KPMG flood relief",
		"dates": "2012",
		"description": "Helps with in-house CSR projects",
		"images": ["images/flood.jpg"]
	}]
};

// projects.display insert the data from var work into an appropriate area of the resume
projects.display = function() {
	for(var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
		for(var n = 0; n < projects.projects[i].images.length; n++) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[n]);
			$(".project-entry:last").append(formattedImage);
		}
	}
};

projects.display();

// var education stores necessary information to create the education section of the website
var education = {
	"schools": [{
		"name": "National Univeristy of Singapore",
		"degree": "Master Degree",
		"location": "Singapore",
		"dates": "2016",
		"url": "http://www.nus.edu/",
		"major": ["MBA"]
	}, {
		"name": "Thammasat University",
		"degree": "Bachelor Degree",
		"location": "Thailand",
		"dates": "2009",
		"url": "http://www.tu.ac.th/",
		"major": ["Economics", "Marketing"]
	}],
	"onlineCourses": [{
		"title": "Intro to Programming Nanodegree",
		"school": "Udacity",
		"dates": "2016",
		"url": "http://www.udacity.com"
	}]
};

// education.display insert the data from var work into an appropriate area of the resume
education.display = function() {
	for(var i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);

		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].major));
	}
	for(var i = 0; i < education.onlineCourses.length; i++) {
		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		$(".education-entry:last").append(formattedTitle + formattedSchool);

		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
	}
};

education.display();

//Add google map
$("#mapDiv").append(googleMap);
