//This is empty on purpose! Your code to build the resume will go here.

// var bio stores necessary information to create the bio section of the website
var bio = {
	"name": "Veeraseth Wongsirikul",
	"role": "Entrepreneur",
	"contacts": {
		"mobile": "+66-86-3306000",
		"email": "veeraseth@yahoo.com",
		"github": "koogarang",
		"twitter": "@koogarang",
		"location": "Bangkok"
	},
	"welcomeMessage": "Hello!!",
	"biopic": ["images/me.jpg"],
	"skills": ["Excel", "Powerpoint", "HTML", "Business"]
};

// bio.display insert the data from var bio into an appropriate area of the resume
bio.display = function() {

	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

// to add the skills section in the resume
	$("#header").append(HTMLskillsStart);
	for(var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}

	$("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts,#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts,#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts,#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts,#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

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

// work.display insert the data from var work into an appropriate area of the resume

work.display = function() {
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

work.display();

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
		"major": ["MBA"],
		"dates": "2016",
		"url": "http://www.nus.edu/"
	}, {
		"name": "Thammasat University",
		"degree": "Bachelor Degree",
		"location": "Thailand",
		"major": ["Economics", "Marketing"],
		"dates": "2009",
		"url": "http://www.tu.ac.th/"
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
