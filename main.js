var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var resumeData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        email: document.getElementById('email').value,
        religion: document.getElementById('religion').value,
        address: document.getElementById('address').value,
        mobile: document.getElementById('mobile').value,
        dob: document.getElementById('dob').value,
        nationality: document.getElementById('country').value,
        objectives: document.getElementById('objectives').value,
        skills: Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(function (el) { return el.value; }),
        experience: document.getElementById('experience').value,
        education: document.getElementById('education').value,
    };
    displayResume(resumeData);
});
function displayResume(data) {
    resumeOutput.innerHTML = "\n        <h2>Your Resume</h2>\n        <p><strong>First Name:</strong> ".concat(data.firstName, "</p>\n        <p><strong>Last Name:</strong> ").concat(data.lastName, "</p>\n        <p><strong>Gender:</strong> ").concat(data.gender, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Religion:</strong> ").concat(data.religion, "</p>\n        <p><strong>Address:</strong> ").concat(data.address, "</p>\n        <p><strong>Mobile Number:</strong> ").concat(data.mobile, "</p>\n        <p><strong>Date of Birth:</strong> ").concat(data.dob, "</p>\n        <p><strong>Nationality:</strong> ").concat(data.nationality, "</p>\n        <p><strong>Objectives:</strong> ").concat(data.objectives, "</p>\n        <p><strong>Skills:</strong> ").concat(data.skills.join(', '), "</p>\n        <p><strong>Experience:</strong> ").concat(data.experience, "</p>\n        <p><strong>Education:</strong> ").concat(data.education, "</p>\n    ");
}
