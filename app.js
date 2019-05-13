// Init Github
const github = new GitHub

// Init UI
const ui = new UI

//  Search input

const searchUser = document.getElementById('searchUser');


// search input Event Listener
searchUser.addEventListener('keyup', searchInput)


// searchInput function
function searchInput(e) {
  // Get Input text
  const userText = e.target.value;

  if(userText !== '') {
    // Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not found') {
        // Show Alert

      } else {
        // Show Profile
        ui.showProfile(data.profile)
      }
    })
  } else {
    // Clear Profile
  }
}

