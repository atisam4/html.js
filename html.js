<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anime Website with Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: url('https://example.com/goku-background.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #ffffff;
        }
        header {
            background: rgba(53, 66, 74, 0.7);
            padding: 10px 0;
            text-align: center;
        }
        nav {
            margin: 20px 0;
        }
        nav a {
            margin: 0 10px;
            padding: 10px 15px;
            background: rgba(53, 66, 74, 0.7);
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }
        nav a:hover {
            background: rgba(232, 73, 29, 0.7);
        }
        section {
            background: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px #ccc;
            display: none; /* Initially hide main content */
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
        }
        #login {
            display: flex;
            flex-direction: column;
            width: 300px;
            margin: auto;
            background: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 5px;
        }
        input {
            margin-bottom: 10px;
            padding: 10px;
            border: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>

<header>
    <h1>Welcome to My Anime Website</h1>
</header>

<div id="login">
    <h2>Login</h2>
    <input type="text" id="username" placeholder="Username" />
    <input type="password" id="password" placeholder="Password" />
    <button onclick="login()">Login</button>
    <p id="error-message" style="color: #ff0000;"></p>
</div>

<section id="content">
    <nav>
        <a href="#convo" onclick="showSection('convo')">Convo</a>
        <a href="#wall" onclick="showSection('wall')">Wall</a>
        <a href="#tokenchkar" onclick="showSection('tokenchkar')">Token Chkar</a>
        <a href="#web" onclick="showSection('web')">Web</a>
    </nav>
    <div id="convo" class="section">
        <h2>Convo Section</h2>
        <p>This is the Convo section where you can start a conversation.</p>
        <img src="https://example.com/anime-convo.jpg" alt="Anime Convo Image">
    </div>
    <div id="wall" class="section">
        <h2>Wall Section</h2>
        <p>This is the Wall section where you can post messages.</p>
        <img src="https://example.com/anime-wall.jpg" alt="Anime Wall Image">
    </div>
    <div id="tokenchkar" class="section">
        <h2>Token Chkar Section</h2>
        <p>This is the Token Chkar section for checking tokens.</p>
        <img src="https://example.com/anime-tokenchkar.jpg" alt="Anime Token Chkar Image">
    </div>
    <div id="web" class="section">
        <h2>Web Section</h2>
        <p>This is the Web section for web-related information.</p>
        <img src="https://example.com/anime-web.jpg" alt="Anime Web Image">
    </div>
</section>

<script>
    const correctUsername = 'user'; // Replace with your desired username
    const correctPassword = 'pass'; // Replace with your desired password

    function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        if (username === correctUsername && password === correctPassword) {
            document.getElementById('login').style.display = 'none'; // Hide login
            document.getElementById('content').style.display = 'block'; // Show content
            showSection('convo'); // Show first section
        } else {
            errorMessage.textContent = 'Incorrect username or password. Please try again.';
        }
    }

    function showSection(sectionId) {
        // Hide all sections
        var sections = document.querySelectorAll('.section');
        sections.forEach(function(section) {
            section.style.display = 'none';
        });
        
        // Show the selected section
        document.getElementById(sectionId).style.display = 'block';
    }
</script>

</body>
</html>
