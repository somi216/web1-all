window.onload = function() {
    document.getElementById("dup_check").onclick = duplicationCheck;

    function duplicationCheck() {
        let username_in = document.getElementById("username2").value;
        let localStorage = window.localStorage;

        if (!localStorage) {
            alert("Local storage is not supported by this browser.");
        } else {
            let numUsers = localStorage.numUsers;
            let duplicate = false;

            if (numUsers !== undefined) {
                for (let i = 0; i < numUsers; i++) {
                    let username = localStorage["user" + i];
                    if (username === username_in) {
                        duplicate = true;
                        break;
                    }
                }
            }

            if (duplicate) {
                alert(username_in + " is a duplicate username. Please enter a different one.");
            } else {
                alert("You can use " + username_in + " as a username.");
            }
        }
    }

    document.getElementById('signupForm').addEventListener('submit', function(event) {
        let pass1 = document.getElementById('pass1').value;
        let pass2 = document.getElementById('pass2').value;

        if (pass1 !== pass2) {
            alert('비밀번호가 일치하지 않습니다. 다시 확인해 주세요.');
            event.preventDefault(); // 폼 제출을 막음
        } else {
            signup(event);
        }
    });

    function signup(event) {
        event.preventDefault(); // 폼의 기본 제출 동작을 막음
        let username_in = document.getElementById("username2").value;
        let password_in1 = document.getElementById("pass1").value;
        let localStorage = window.localStorage;

        if (!localStorage) {
            alert("Local storage is not supported by this browser.");
        } else {
            let numUsers = localStorage.numUsers;
            if (numUsers === undefined) numUsers = "0";
            localStorage["user" + numUsers] = username_in;
            localStorage["pass" + numUsers] = password_in1;
            localStorage.numUsers = parseInt(numUsers) + 1;
            alert("Signup succeeded!\n" + "Number of users: " + localStorage.numUsers);
        }
    }
}