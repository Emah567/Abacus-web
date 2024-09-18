  document.addEventListener('DOMContentLoaded', function () {
            const btnSchool = document.getElementById('btn_school');
            const btnTeacher = document.getElementById('btn_teacher');
            const studentSection = document.getElementById('student_section');
            const teacherSection = document.getElementById('teacher_section');
            const commonSection = document.getElementById('common_section');

            // Add event listeners to buttons
            btnSchool.addEventListener('click', function () {
                hideSections();
                showSection(studentSection);
                showSection(commonSection);
                toggleActiveButton(btnSchool);
            });

            btnTeacher.addEventListener('click', function () {
                hideSections();
                showSection(teacherSection);
                showSection(commonSection);
                toggleActiveButton(btnTeacher);
            });

            // Function to hide both sections initially
            function hideSections() {
                studentSection.style.display = 'none';
                teacherSection.style.display = 'none';
                commonSection.style.display = 'none';

                studentSection.style.opacity = '0';
                teacherSection.style.opacity = '0';
                commonSection.style.opacity = '0';

                studentSection.style.maxHeight = '0';
                teacherSection.style.maxHeight = '0';
                commonSection.style.maxHeight = '0';
            }

            // Function to show sections with animation
            function showSection(section) {
                section.style.display = 'block';  // Make the section visible first
                setTimeout(function () {
                    section.style.opacity = '1';  // Fade in
                    section.style.maxHeight = section.scrollHeight + 'px';  // Ensure it grows to fit the content
                }, 10);  // Slight delay for smooth transition
            }

            // Toggle active button styles
            function toggleActiveButton(activeButton) {
                btnSchool.classList.remove('active');
                btnTeacher.classList.remove('active');
                activeButton.classList.add('active');
            }
        });