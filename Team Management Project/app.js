// Initial Player Dataset
let players = [
    {
      id: 1,
      name: "Virat Kohli",
      role: "Batsman",
      country: "India",
      matches: 250,
      runs: 12000,
      wickets: 0,
      form: "Excellent",
      img: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      name: "Steve Smith",
      role: "Batsman",
      country: "Australia",
      matches: 150,
      runs: 8500,
      wickets: 10,
      form: "Good",
      img: "https://via.placeholder.com/100"
    }
  ];
  
  // Authentication
  const coachCredentials = { username: "stephen", password: "csk2024" };
  
  // Authenticate Coach Login
  function authenticateCoach(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("loginError");
  
    if (username === coachCredentials.username && password === coachCredentials.password) {
      document.getElementById("loginModal").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
    } else {
      loginError.textContent = "Invalid Username or Password!";
    }
  }
  
  // Load players dynamically
  window.onload = function () {
    renderPlayers(players);
  };
  
  function renderPlayers(playerData) {
    const playerList = document.getElementById("playerList");
    playerList.innerHTML = ""; // Clear the current list
  
    playerData.forEach(player => {
      const playerCard = document.createElement("div");
      playerCard.className = "player-card";
  
      playerCard.innerHTML = `
        <img src="${player.img}" alt="${player.name}">
        <h3>${player.name}</h3>
        <p>Role: ${player.role}</p>
        <p>Country: ${player.country}</p>
        <p>Matches: ${player.matches}</p>
        <p>Runs: ${player.runs}</p>
        <p>Wickets: ${player.wickets}</p>
      `;
  
      playerList.appendChild(playerCard);
    });
  }
  
  // Add a new player
  function addPlayer(event) {
    event.preventDefault();
  
    const name = document.getElementById("playerName").value;
    const role = document.getElementById("playerRole").value;
    const country = document.getElementById("playerCountry").value;
    const matches = parseInt(document.getElementById("playerMatches").value);
    const runs = parseInt(document.getElementById("playerRuns").value);
    const wickets = parseInt(document.getElementById("playerWickets").value);
    const form = document.getElementById("playerForm").value;
    const imageFile = document.getElementById("playerImage").files[0];
  
    const reader = new FileReader();
  
    reader.onload = function (e) {
      const newPlayer = {
        id: players.length + 1,
        name,
        role,
        country,
        matches,
        runs,
        wickets,
        form,
        img: e.target.result // Base64 encoded image
      };
  
      players.push(newPlayer);
      renderPlayers(players);
      document.getElementById("addPlayerForm").reset();
    };
  
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      alert("Please upload an image!");
    }
  }
  