//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
            const ageForm = document.getElementById('ageForm');

            ageForm.addEventListener('submit', function (e) {
                e.preventDefault();

                const ageInput = document.getElementById('age');
                const nameInput = document.getElementById('name');

                // Check if inputs are empty
                if (!ageInput.value.trim() || !nameInput.value.trim()) {
                    alert('Both age and name are required.');
                    return;
                }

                // Simulate asynchronous processing with a delay
                setTimeout(() => {
                    const age = parseInt(ageInput.value, 10);

                    if (age >= 18) {
                        alert(`Welcome, ${nameInput.value}. You can vote.`);
                    } else {
                        alert(`Oh sorry ${nameInput.value}. You aren't old enough.`);
                    }
                }, 4000);
            });
        });