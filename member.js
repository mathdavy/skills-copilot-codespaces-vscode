function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberContent = document.getElementById("memberContent");
    var skillsContent = document.getElementById("skillsContent");
    var projectsContent = document.getElementById("projectsContent");
    var contactContent = document.getElementById("contactContent");
    member.style.backgroundColor = "#f5f5f5";
    skills.style.backgroundColor = "#fff";
    projects.style.backgroundColor = "#fff";
    contact.style.backgroundColor = "#fff";
    member.style.color = "#000";
    skills.style.color = "#000";
    projects.style.color = "#000";
    contact.style.color = "#000";
    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    projectsContent.style.display = "none";
    contactContent.style.display = "none";
}