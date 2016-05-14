//way of abstracting out sidebar to be consistent across my all of user pages (mainly for blogs) - its ugly and hacky
//I did not want to introduce more overhead than really necessary (like a whole library/framework just to do the sidebar templating better)
//so this script is fine for building out the sidebar.

var sidebarDiv = document.getElementById("sidebar");

var sidebarHTMLBuilder = "";

//ToDo: rebuild with js element appending
// like so
//var firstname = document.getElementById('firstname').value;
//var entry = document.createElement('li');
//entry.appendChild(document.createTextNode(firstname));
//list.appendChild(entry);

sidebarHTMLBuilder += "<h4>My GitHub Projects</h4>"
             + "<hr />"
             + "<ul>"
             + "<li><a href='https://github.com/insane0hflex/moddingforge-skyrim' target='_blank'>Modding Forge: Skyrim</a></li>"
             + "<li><a href='https://github.com/insane0hflex/Fallout-4-Modding-Guide' target='_blank'>Fallout 4 Modding Guide</a></li>"
             + "<li><a href='https://github.com/insane0hflex/DarkSouls3SaveGameBackupTool' target='_blank'>Dark Souls 3 Save Game Backup Tool</a></li>"
             + "<li><a href='https://github.com/insane0hflex/GameSettingsConfigurator' target='_blank'>Game Settings Configurator</a></li>"
             + "</ul>"
             + "<h4>My Mods</h4>"
             + "<hr />"
             + "<ul>"
             + "<li><a href='http://www.nexusmods.com/fallout4/mods/190/?' target='_blank'>Fallout 4 Ultimate Tweak Tool</a></li>"
             + "<li><a href='http://www.nexusmods.com/witcher3/mods/807/? target='_blank'>Witcher 3 FOV Slider</li>"
             + "</ul>"
             + "<hr />"
             + "<h3>My Blog Posts</h3>"
             + "<ul>"
             + "<li><a href='a-commit-a-day-2016.html' >2016 - A Year of A 'Git-Commit a Day'</a></li>"
             + "<li><a href='lorem-ipsum-visual-studio-code-snippet.html'>Lorem Ipsum Visual Studio Code Snippet</a></li>"
             + "<li><a href='visual-studio-keybindings.html'>Visual Studio Keybindings/Keyboard Shortcuts</a></li>"
             + "<li><a href='90-days-of-commits.html'>90 days into A Year of a 'Git-Commit a Day'</a></li>"
             + "</ul>"; //Last line


sidebarDiv.innerHTML = sidebarHTMLBuilder;
