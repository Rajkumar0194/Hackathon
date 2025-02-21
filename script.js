document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const linkedin = document.getElementById('linkedin').value;
    const role = document.getElementById('role').value;
    const experience = document.getElementById('experience').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const template = document.getElementById('template').value;

    // Construct resume content
    const resumeHTML = `
        <html>
        <head>
            <title>${firstName} ${lastName} - Resume</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    margin: 0;
                }
                .template {
                    border: 1px solid #ddd;
                    padding: 20px;
                    margin-bottom: 20px;
                    max-width: 800px;
                    margin: auto;
                }
                .template h1 {
                    font-size: 32px;
                    color: #333;
                    margin-bottom: 10px;
                }
                .template h2 {
                    font-size: 24px;
                    color: #555;
                    border-bottom: 2px solid #333;
                    padding-bottom: 5px;
                    margin: 15px 0 10px;
                }
                .template p {
                    font-size: 16px;
                    color: #555;
                    margin-bottom: 10px;
                }
                .horizontal-line {
                    border-bottom: 2px solid #333;
                    margin: 20px 0;
                }
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                ul {
                    padding-left: 20px;
                }
                .professional {
                    font-family: 'Georgia', serif;
                }
                .creative {
                    text-align: center;
                    color: blue;
                    font-family: 'Verdana', sans-serif;
                }
                .classic {
                    font-style: italic;
                    color: #444;
                    font-family: 'Times New Roman', serif;
                }
            </style>
        </head>
        <body>
            <div class="${template} template">
                <div class="header">
                    <div>
                        <h1>${firstName} ${lastName}</h1>
                        <p>Role: ${role}</p>
                        <p>Experience: ${experience} years</p>
                    </div>
                    <div>
                        <p>Email: ${email}</p>
                        <p>Mobile: ${mobile}</p>
                        <p>LinkedIn: <a href="https://linkedin.com/in/${linkedin}" target="_blank">${linkedin}</a></p>
                    </div>
                </div>

                <div class="horizontal-line"></div>

                <h2>Professional Summary</h2>
                <p>${role} with ${experience} years of experience. Software intern in web application development. Assisted in creating new features that boosted user engagement by 25%, which directly contributed to increased customer satisfaction. Collaborated with senior developers to troubleshoot bugs, achieving a 30% reduction in reported issues, which enhanced overall application reliability. Skilled in coding optimization, team collaboration, and problem-solving, offering strong support in technical projects that drive user experience improvements.</p>

                <h2>Work Experience</h2>
                <p>Role: Software intern</p>
                <p>Experience: 4 years</p>
                <ul>
                    <li>Developed features that boosted user engagement.</li>
                    <li>Troubleshot bugs, reducing issues by 30%.</li>
                    <li>Optimized code, improving application speed.</li>
                    <li>Collaborated with teams to improve workflows.</li>
                </ul>

                <h2>Skills</h2>
                <ul>
                    <li>Web Development</li>
                    <li>Bug Fixing</li>
                    <li>Code Optimization</li>
                    <li>Team Collaboration</li>
                    <li>Problem-Solving</li>
                </ul>

                <h2>Strengths</h2>
                <ul>
                    <li>Adaptability</li>
                    <li>Communication Skills</li>
                    <li>Attention to Detail</li>
                </ul>
            </div>
        </body>
        </html>
    `;

    // Open resume in a new tab
    const newTab = window.open();
    newTab.document.write(resumeHTML);
    newTab.document.close();
});
