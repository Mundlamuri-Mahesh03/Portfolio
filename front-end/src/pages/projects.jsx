import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import CircularIndeterminate from "../components/MUI/circular-loader";
import { gitData } from "../github";


const Projects = () => {
  const [UserData, setUsersData] = useState(gitData);
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    try {
      if (gitData) {
        setUsersData(gitData);
        setUserData(true);
      }
    }
    catch (err) {
      console.log("Error in getting data from github");
    }

  }, [UserData]);

  return (
    <div>
      <h1 className="protest-riot-regular" style={{ fontSize: "40px", textAlign: "center", margin: "30px 0" }}><span style={{ color: "crimson" }}>Th</span>ings I’ve made trying to put my dent in the <span style={{ color: "crimson" }}>universe.</span></h1>

      <div className="github-card" style={{ border: "2px solid #2A2A2B", borderRadius: "5px", padding: "10px 10px", maxWidth: "500px", margin: "40px auto", marginBottom: "0" }}>
        <div style={{ display: "flex", minHeight: "220px", justifyContent: "center", width: "100%", alignContent: "space-between", position: "relative" }}>
          {!userData && <CircularIndeterminate />}
          {userData && <div style={{ width: "100%", textAlign: 'left', paddingLeft: "20px" }}>
            <p style={{ marginTop: "30px", fontFamily: "sans-serif", fontWeight: "bold" }}>{UserData.login}</p>
            <p className="ubuntu-regular"><i className="fa-solid fa-book-bookmark"></i> Repositories <span style={{ background: "#2D3139", color: "#E6EDF3", fontWeight: "bold", borderRadius: "15px" }}>&nbsp;{UserData.public_repos}&nbsp;</span></p>
            <p className="ubuntu-regular"><i className="fa-solid fa-users"></i> Followers {userData && <span style={{ background: "#2D3139", color: "#E6EDF3", fontWeight: "bold", borderRadius: "15px" }}>&nbsp;{UserData.followers}&nbsp;</span>}</p>
            <p className="ubuntu-regular"><i className="fa-solid fa-location-dot"></i> {UserData.location}</p>
            <p><NavLink to={UserData.html_url} target="_blank"><Button variant="outlined" color="error">Follow Me</Button></NavLink></p>
          </div>}

          <div style={{ position: "relative", width: "fit-content", textAlign: "right", padding: "10px" }}>
            {userData && <img className="github-avatar" src={UserData.avatar_url} alt="github-avatar" />}
            <p style={{ position: "absolute", right: '0', bottom: "0" }}><i className="fa-brands fa-github" style={{ color: "grey", fontSize: "25px" }}></i></p>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: "25%", background: "#3178C6", height: "10px", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" }}></div>
          <div style={{ width: "25%", background: "#ffffff", height: "10px" }}></div>
          <div style={{ width: "30%", background: "#950F94", height: "10px" }}></div>
          <div style={{ width: "25%", background: "#F1E05A", height: "10px", borderTopRightRadius: "5px", borderBottomRightRadius: "5px" }}></div>
        </div>
      </div>


      <h1 className="protest-riot-regular" style={{ fontSize: "40px", textAlign: "center", margin: "30px 0" }}><span style={{ color: "crimson" }}>Pro</span>jects<span style={{ backgroundColor: "#6C6C6D", borderRadius: '2px', color: "#323232" }}>&nbsp;</span></h1>

      <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', margin: "20px auto", marginBottom: "0" }}>
        {projectsData.map((project, index) => {
          return (

            <div key={index} className="github-card" style={{ position: "relative", alignContent: "center", border: "2px solid #2A2A2B", borderRadius: "5px", padding: "10px 10px", width: "350px", margin: "20px auto", marginTop: "40px", overflowWrap: "break-word" }}>
              <div style={{ display: "flex", justifyContent: "center", width: "100%", alignContent: "space-between" }}>
                <div style={{ textAlign: 'left', paddingLeft: "20px" }}>
                  {userData && <p style={{ marginTop: "30px", fontWeight: "bold", fontFamily: "sans-serif" }}>{UserData.login}/{project.id}</p>}
                  <p className="ubuntu-regular" style={{ textAlign: "left" }}>{project.description}</p>
                  <p className="ubuntu-regular"><NavLink to={project.githubLink} target="_blank"><Button variant="outlined" color="success"><i className="fa-brands fa-git-alt"></i> &nbsp; Repo</Button></NavLink> &nbsp;
                    {/* <NavLink to={project.websiteLink} target="_blank"><Button variant="outlined" color="error"><i className="fa-solid fa-wifi" style={{ transform: "rotate(45deg)" }}></i> &nbsp; Demo</Button></NavLink></p> */}
                  </p>
                </div>

                <div style={{ position: "relative", textAlign: "right", padding: "22px" }}>
                  <img src={require(`../images/project/${project.photo}.png`)} style={{ borderRadius: "20px", border: "1px solid gray", background: "darkgray", marginTop: '20px', width: "40px", position: "absolute", right: '0', top: "0" }} alt="project-logo" /><br />
                  <p style={{ position: "absolute", right: '0', bottom: "0" }}><i className="fa-brands fa-github" style={{ color: "grey", fontSize: "25px" }}></i></p>
                </div>
              </div>
              <div style={{ position: "relative", padding: "10px" }}>

                <div style={{ display: 'flex', position: "absolute", width: "100%", margin: "auto", right: "1px", left: "1px", bottom: "0" }}>
                  <div style={{ width: "25%", background: "#3178C6", height: "10px", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" }}></div>
                  <div style={{ width: "25%", background: "#ffffff", height: "10px" }}></div>
                  <div style={{ width: "30%", background: "#950F94", height: "10px" }}></div>
                  <div style={{ width: "25%", background: "#F1E05A", height: "10px", borderTopRightRadius: "5px", borderBottomRightRadius: "5px" }}></div>
                </div>
              </div>
            </div>

          )
        })}
      </div >

    </div>

  );
}


let projectsData = [
  {
    id: "rentify",
    name: "Doctor Application",
    githubLink: "https://github.com/Mundlamuri-Mahesh03/Doctor_Application",
    photo: "rentify",
    description: "A full-stack doctor appointment system for booking consultations and managing schedules."
  },
  {
    id: "mind-mirror",
    name: "Mind Mirror",
    githubLink: "https://github.com/Mundlamuri-Mahesh03/PrimeTrade_Assignment",
    photo: "mind-mirror",
    description: "A full-stack Todo application that allows users to create, update, delete, and manage daily tasks with persistent data storage."
  },
  {
    id: "weather-app",
    name: "WeatherApp",
    githubLink: "https://github.com/Mundlamuri-Mahesh03/flutter-weather",
    photo: "weather-app",
    description: "Get weather details at any 🌆 city"
  },
  {
    id: "sriram-foundation",
    name: "Crypto Currency Price Tracker",
    githubLink: "https://github.com/Mundlamuri-Mahesh03/restaurant-website",
    photo: "sriram-foundation",
    description: "A real-time cryptocurrency price tracker that displays live market data and price trends."
  }
]

export default Projects;