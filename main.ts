interface ResumeData {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    religion: string;
    address: string;
    mobile: string;
    dob: string;
    nationality: string;
    objectives: string;
    skills: string[];
    experience: string;
    education: string;
}

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resume-output') as HTMLElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const resumeData: ResumeData = {
        firstName: (document.getElementById('first-name') as HTMLInputElement).value,
        lastName: (document.getElementById('last-name') as HTMLInputElement).value,
        gender: (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        religion: (document.getElementById('religion') as HTMLInputElement).value,
        address: (document.getElementById('address') as HTMLInputElement).value,
        mobile: (document.getElementById('mobile') as HTMLInputElement).value,
        dob: (document.getElementById('dob') as HTMLInputElement).value,
        nationality: (document.getElementById('country') as HTMLSelectElement).value,
        objectives: (document.getElementById('objectives') as HTMLTextAreaElement).value,
        skills: Array.from(document.querySelectorAll('input[name="skills"]:checked')).map((el) => (el as HTMLInputElement).value),
        experience: (document.getElementById('experience') as HTMLSelectElement).value,
        education: (document.getElementById('education') as HTMLSelectElement).value,
    };

    displayResume(resumeData);
});

function displayResume(data: ResumeData): void {
    resumeOutput.innerHTML = `
        <h2>Your Resume</h2>
        <p><strong>First Name:</strong> ${data.firstName}</p>
        <p><strong>Last Name:</strong> ${data.lastName}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Religion:</strong> ${data.religion}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Mobile Number:</strong> ${data.mobile}</p>
        <p><strong>Date of Birth:</strong> ${data.dob}</p>
        <p><strong>Nationality:</strong> ${data.nationality}</p>
        <p><strong>Objectives:</strong> ${data.objectives}</p>
        <p><strong>Skills:</strong> ${data.skills.join(', ')}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Education:</strong> ${data.education}</p>
    `;
}
